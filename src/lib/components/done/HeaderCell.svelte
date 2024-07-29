<script>
	import FilterButton from './FilterButton.svelte';
	export let column;
</script>

<div class="header-cell flex h-full flex-col">
	<div class="mb-4 text-2xl font-bold">
		{column}
	</div>
	<FilterButton {column} />
</div>

<style>
	.header-cell {
		padding: 10px;
		font-weight: bold;
		border: 1px solid #ccc;
		background-color: white;
	}
</style>
