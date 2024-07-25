<script>
	import FilterButton from './FilterButton.svelte';
	export let column;
</script>

<div class="header-cell flex flex-col">
	{column}
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
