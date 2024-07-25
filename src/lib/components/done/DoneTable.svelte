<script>
	import HeaderRow from './HeaderRow.svelte';
	import BodyRow from './BodyRow.svelte';

	export let data = { records: [] };
</script>

<div class="p-2 w-full">
	<div class="rounded-3xl border-[3px] w-full overflow-auto border-black/20">
		<div class="">
			<HeaderRow />
			{#each data.records as record}
				<BodyRow {record} />
			{/each}
		</div>
	</div>
</div>
