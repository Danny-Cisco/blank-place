<script>
	import BodyCell from './BodyCell.svelte';
	export let record;
</script>

<div class="grid grid-cols-6">
	<BodyCell>{record.When}</BodyCell>
	<BodyCell>{record.Short}</BodyCell>
	<BodyCell>{record.Type}</BodyCell>
	<BodyCell>{record.Who}</BodyCell>
	<BodyCell>{record.Tags.join(', ')}</BodyCell>
	<BodyCell>{record.File}</BodyCell>
</div>
