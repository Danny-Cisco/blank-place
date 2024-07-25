<script>
	import BodyCell from './BodyCell.svelte';
	export let record;
</script>

<div class="grid grid-cols-8">
	<BodyCell>{record.When}</BodyCell>
	<div class="col-span-3">
		<BodyCell>{record.Short}</BodyCell>
	</div>
	<BodyCell>{record.Type}</BodyCell>
	<BodyCell>{record.Who}</BodyCell>
	<BodyCell>{record.Tags.join(', ')}</BodyCell>
	<BodyCell>{record.File}</BodyCell>
</div>
