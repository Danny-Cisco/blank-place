<script>
	import { fly } from 'svelte/transition';
	import Bishop from './Bishop.svelte'; // Import the Bishop component
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'; // Import the FontAwesomeIcon component
	import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Import the faXmark icon

	let isExpanded = false;

	function toggleExpansion() {
		isExpanded = !isExpanded;
	}
</script>

<div class="absolute text-black isolate z-50 right-2 top-2">
	{#if isExpanded}
		<div
			class="flex max-h-[90vh] min-h-[90vh] relative flex-col w-[400px] rounded-2xl border-2 shadow-lg bg-white items-stretch justify-between"
			transition:fly={{ y: '-100%', duration: 300 }}
		>
			<!-- titlebar of Bishop window -->
			<div class="flex items-center h-[50px] justify-center">
				<img src="/bishop_avatar.png" alt="Avatar" class="w-12 h-12" />
				<div class="text-center text-gray-300">BISHOP</div>
			</div>
			<div class="flex-1"></div>
			<div class="absolute top-12 bottom-0 left-0 right-0">
				<Bishop />
			</div>
		</div>
	{/if}
	<button
		class="fixed btn btn-secondary marker:btn-outline top-[8px] right-[-4px]"
		on:click={toggleExpansion}
	>
		{#if isExpanded}
			<div class="rounded-full bg-white text-black flex flex-col items-center justify-center">
				<FontAwesomeIcon icon={faXmark} class="w-8 h-8 p-2" />
			</div>
		{:else}
			<div class="rounded-full bg-white">
				<img src="/bishop_avatar.png" alt="Avatar" class="w-12 h-12" />
			</div>
		{/if}
	</button>
</div>
