<script>
	import Popup from './Popup.svelte';
	export let column;
	let selection = 'All';
	export let showPopup = false;

	function handleClick() {
		showPopup = !showPopup;
	}
</script>

<div class="relative">
	<button on:click={handleClick} class="bg-orange-500 text-white rounded-xl max-w-[100px] px-3">
		{selection}</button
	>
	{#if showPopup}
		<Popup />
	{/if}
</div>
