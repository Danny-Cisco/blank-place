<script>
	import HeaderCell from './HeaderCell.svelte';
</script>

<div class="grid grid-cols-8">
	<HeaderCell column="When" />
	<div class="col-span-3">
		<HeaderCell column="Short" />
	</div>
	<HeaderCell column="Type" />
	<HeaderCell column="Who" />
	<HeaderCell column="Tags" />
	<HeaderCell column="File" />
</div>
