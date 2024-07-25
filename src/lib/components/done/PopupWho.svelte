<script>
	export let selection;
	let containsText = '';

	$: if (containsText) {
		selection = containsText;
	} else selection = 'ALL';
</script>

<h2 class="font-bold mb-2 text-center">Contains</h2>
<div class="mb-2">
	<input
		type="text"
		placeholder="Contains"
		bind:value={containsText}
		class="w-full p-1 border rounded mb-2"
	/>
</div>
