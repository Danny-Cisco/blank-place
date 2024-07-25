<script>
	import BodyCell from './BodyCell.svelte';
	import Tag from './Tag.svelte';
	export let record;
</script>

<div class="grid grid-cols-8">
	<BodyCell>{record.When}</BodyCell>
	<div class="col-span-3 h-full">
		<BodyCell>{record.Short}</BodyCell>
	</div>
	<BodyCell>{record.Type}</BodyCell>
	<BodyCell>{record.Who}</BodyCell>
	<BodyCell>
		<div class="flex">
			{#each record.Tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</BodyCell>
	<BodyCell>{record.File}</BodyCell>
</div>
