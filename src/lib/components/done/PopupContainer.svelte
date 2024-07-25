<script>
	import PopupShort from './PopupShort.svelte';
	import PopupWhen from './PopupWhen.svelte';
	export let column;
	export let selection = '';
</script>

<div class="bg-gray-200 text-black p-4 absolute top-[40px] rounded-md left-[-5px]">
	{#if column === 'When'}
		<PopupWhen bind:selection />
	{:else if column === 'Short'}
		<PopupShort />
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
