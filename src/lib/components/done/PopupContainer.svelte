<script>
	import PopupShort from './PopupShort.svelte';
	import PopupWhen from './PopupWhen.svelte';
	import PopupType from './PopupType.svelte';
	import PopupWho from './PopupWho.svelte';
	import PopupTags from './PopupTags.svelte';
	export let column;
	export let selection = '';
</script>

<div class="bg-gray-200 text-black p-4 absolute top-[40px] shadow-2xl rounded-xl left-[-5px]">
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
	{/if}
</div>

<style>
	.absolute {
		position: absolute;
	}
	.top-\[30px\] {
		top: 30px;
	}
	.left-\[-5px\] {
		left: -5px;
	}
</style>
