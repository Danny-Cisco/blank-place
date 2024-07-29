<script>
	import PopupShort from './PopupShort.svelte';
	import PopupWhen from './PopupWhen.svelte';
	import PopupType from './PopupType.svelte';
	import PopupWho from './PopupWho.svelte';
	import PopupTags from './PopupTags.svelte';
	import PopupFile from './PopupFile.svelte';
	export let column;
	export let selection = '';

	function getData() {
		console.log('GETTING DATA...', selection);
	}

	$: if (selection) getData(); // This will call getData whenever selection changes
</script>

<div class="bg-gray-200 text-black p-4 absolute top-[40px] shadow-lg rounded-xl left-[-30px]">
	{#if column === 'When'}
		<PopupWhen bind:selection />
	{:else if column === 'Short'}
		<PopupShort bind:selection />
	{:else if column === 'Type'}
		<PopupType bind:selection />
	{:else if column === 'Who'}
		<PopupWho bind:selection />
	{:else if column === 'Tags'}
		<PopupTags bind:selection />
	{:else if column === 'File'}
		<PopupFile bind:selection />
	{/if}
</div>

<style>
	.absolute {
		position: absolute;
	}
	.top-\[40px\] {
		top: 40px;
	}
	.left-\[-30px\] {
		left: -30px;
	}
</style>
