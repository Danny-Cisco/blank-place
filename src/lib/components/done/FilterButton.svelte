<script>
	import PopupContainer from './PopupContainer.svelte';
	import { createEventDispatcher } from 'svelte';

	export let column;
	let selection = 'All';
	export let showPopup = false;

	let activePopup = null;

	function handleClick() {
		showPopup = !showPopup;
	}

	const dispatcher = createEventDispatcher();

	function handlePopup(column) {
		if (activePopup === column) {
			activePopup = null;
		} else {
			activePopup = column;
		}
	}

	// Listen for the custom event to close all popups
	function closeAllPopups() {
		activePopup = null;
	}
</script>

<div class="relative">
	<button on:click={handleClick} class="bg-orange-500 text-white rounded-xl max-w-[100px] px-3">
		{selection}</button
	>
	{#if showPopup}
		<PopupContainer {column} />
	{/if}
</div>
