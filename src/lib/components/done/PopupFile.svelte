<script>
	let includesFiles = true;

	export let selection;

	$: selection = includesFiles ? 'ALL' : 'No Files';
</script>

<div class="dropdown w-[130px]">
	<div class="dropdown-content">
		<label>
			<input type="radio" bind:group={includesFiles} value={true} />
			Include
		</label>
		<br />
		<label>
			<input type="radio" bind:group={includesFiles} value={false} />
			Exclude
		</label>
	</div>
</div>

<style>
	.dropdown-content {
		display: block;
		min-width: 160px;
		padding: 12px 16px;
		z-index: 1;
	}
</style>
