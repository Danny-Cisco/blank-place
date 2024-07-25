<script>
	import PopupContainer from './PopupContainer.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let column;
	let selection = 'ALL';
	export let showPopup = false;

	let popupRef;

	let handleOutsideClick;

	function handleClick() {
		if (typeof document !== 'undefined') {
			showPopup = !showPopup;
			if (showPopup) {
				// Attach click event listener to close popup on outside click
				document.addEventListener('click', handleOutsideClick, true);
			} else {
				// Remove event listener if popup is not shown
				document.removeEventListener('click', handleOutsideClick, true);
			}
		}
	}

	onMount(() => {
		// Define the event handler inside onMount to ensure it's only available in the browser
		handleOutsideClick = (event) => {
			if (popupRef && !popupRef.contains(event.target)) {
				showPopup = false;
				document.removeEventListener('click', handleOutsideClick, true);
			}
		};
	});

	onDestroy(() => {
		// Clean up the event listener when the component is destroyed
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', handleOutsideClick, true);
		}
	});
</script>

<div class="relative">
	<button
		on:click={handleClick}
		class={`text-white text-sm rounded-full whitespace-pre-line max-w-full px-3 py-2 min-w-[110px]  ${selection === 'ALL' ? ' bg-orange-500 ' : ' bg-red-500 '}`}
	>
		{selection}</button
	>
	{#if showPopup}
		<div bind:this={popupRef}>
			<PopupContainer {column} bind:selection />
		</div>
	{/if}
</div>
