<script>
	import BodyCell from './BodyCell.svelte';
	import Tag from './Tag.svelte';
	export let record;
</script>

<div class="grid grid-cols-8">
	<BodyCell>{record.created_time}</BodyCell>
	<div class="col-span-3 h-full">
		<BodyCell>{record.short}</BodyCell>
	</div>
	<BodyCell>{record.type}</BodyCell>
	<BodyCell>{record.who}</BodyCell>
	<BodyCell>
		<div class="flex">
			{#each record.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</BodyCell>
	<BodyCell>{record.file_url}</BodyCell>
</div>
