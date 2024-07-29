<script>
	// import userStore from "$lib/stores/userStore.js";
	import { onMount, afterUpdate } from 'svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	import { chatMessagesStore } from '$lib/stores/chatStore.js';

	// On mount, subscribe to the store, and scroll to the bottom of chat
	onMount(() => {
		chatMessagesStore.subscribe((value) => {
			chatMessages = value;
		});

		chatContainer.scrollTop = chatContainer.scrollHeight;
	});

	let text = '';
	let isLoading = false;
	let error = '';
	let avatarUrl = '';
	let chatMessages = [];

	let chatContainer;

	afterUpdate(() => {
		chatContainer.scrollTop = chatContainer.scrollHeight;
	});

	// userStore.subscribe(({ avatarUrl: url, isLoggedIn }) => {
	//   avatarUrl = url;
	//   isLoading = !isLoggedIn;
	// });

	function decodeHtml(html) {
		return html.replace(/\\u[\dA-F]{4}|\\r/gi, function (match) {
			if (match === '\\r') {
				return '';
			}
			return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
		});
	}

	function buildConversationHistory() {
		// The initial system prompt that is not displayed but included in the conversation history
		const initialSystemPrompt =
			'Please give an organised response using Markdown format, Use **bold** emphasis! bold headings for lists. use markdown format for hyperlinks \n\n';

		// Prepend the initial system prompt to the chat history
		return (
			initialSystemPrompt +
			chatMessages
				.map((message) => `${message.type === 'question' ? 'Q: ' : 'A: '}${message.text}`)
				.join('\n\n')
		);
	}

	async function handleQuestion(event) {
		event.preventDefault(); // Prevent the form from submitting in the traditional way

		if (!text.trim()) {
			alert('Please enter some text to send.');
			return;
		}

		// Construct the new question object
		const newQuestion = {
			type: 'question',
			text: text.trim(),
			avatar: avatarUrl
		};

		// Update the store with the new question
		chatMessagesStore.update((currentMessages) => [...currentMessages, newQuestion]);

		isLoading = true; // Set loading state to true while fetching the response
		error = ''; // Reset any previous errors

		try {
			// Build the conversation history for the backend to process
			const conversationHistory = buildConversationHistory() + '\nQ: ' + text;

			// Prepare the form data to send to your backend/API
			const formData = new FormData();
			formData.append('text', conversationHistory);

			// Send the question to your backend/API
			const response = await fetch('?/askQuestionGPT3', {
				method: 'POST',
				body: formData
			});

			const result = await response.json(); // Parse the JSON response

			if (response.ok) {
				let responseData = decodeHtml(result.data); // Decode HTML entities in the response
				let formattedResponse = responseData.replace(/\\n/g, '<br>'); // Replace newline characters with HTML line breaks

				// Use marked.js to parse Markdown in the response and DOMPurify to sanitize it
				const renderer = new marked.Renderer();
				renderer.link = (href, title, text) =>
					`<a href="${href}" title="${title}" class="font-bold text-blue-500">${text}</a>`;
				marked.setOptions({ renderer });

				let parsedResponse = marked.parse(formattedResponse.slice(2, -2)); // Parse and slice the response string to fit your needs
				let cleanedResponse = DOMPurify.sanitize(parsedResponse, {
					ADD_ATTR: ['class']
				});

				// Construct the response message object
				const newResponse = {
					type: 'response',
					text: cleanedResponse,
					avatar: '/default_avatar.png' // Default avatar for responses
				};

				// Update the store with the new response
				chatMessagesStore.update((currentMessages) => [...currentMessages, newResponse]);
			} else {
				// Handle API errors
				console.error('Question error:', result.error);
				error = result.error || 'Failed to answer the question';
			}
		} catch (err) {
			// Handle exceptions during the fetch call
			console.error('Question failed:', err);
			error = err.message || 'An unexpected error occurred.';
		} finally {
			isLoading = false; // Reset loading state
			text = ''; // Clear the input field after processing
		}
	}

	function handleEnter(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			handleQuestion(event);
		}
	}

	$: reversedChatMessages = [...chatMessages].reverse();
</script>

<div class="flex flex-col max-h-[92%] rounded-xl">
	<div class="flex flex-col max-h-[100%] h-full mt-2 overflow-auto" bind:this={chatContainer}>
		<div class="flex flex-col items-stretch justify-end flex-grow chat-container">
			<div class="p-2 space-y-4">
				{#each chatMessages as message, index (index)}
					<div
						class={`flex items-end space-x-2 rounded-xl ${
							message.type === 'question' ? 'justify-start ' : 'justify-end flex-row-reverse'
						} transition-all duration-600`}
					>
						<div class="chat-image avatar mb-[4px]">
							<div class="w-10 h-10 rounded-full">
								<img src={message.avatar} alt="Avatar" class="shadow-lg" />
							</div>
						</div>
						<div
							class={` safe-html ${
								message.type === 'question'
									? 'bg-primary rounded-bl-0 rounded-br-xl rounded-tl-xl rounded-tr-xl'
									: 'bg-secondary rounded-br-0 rounded-bl-xl rounded-tr-xl rounded-tl-xl'
							} p-3 shadow  max-w-3/4 min-w-1/2 transition-transform duration-200 `}
						>
							{@html message.text}
							<!-- Render HTML here -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full p-4">
		<form class="form-class" on:submit|preventDefault={handleQuestion}>
			<div class="flex items-center space-x-2">
				<input
					type="text"
					bind:value={text}
					placeholder="Enter your question..."
					class="w-full max-w-xs input input-bordered input-warning"
					on:keydown={handleEnter}
				/>
				<button type="submit" class="btn btn-primary" disabled={isLoading}>Ask</button>
			</div>
		</form>
		{#if error}
			<p class="text-red-500">{error}</p>
		{/if}
	</div>
</div>

<style>
	.chat-container {
		margin-bottom: 1rem;
	}
</style>
