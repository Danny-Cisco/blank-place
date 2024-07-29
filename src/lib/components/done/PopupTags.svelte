<script>
	export let selection;
	let containsText = '';
	let orText = '';

	$: if (containsText && orText) {
		selection = containsText + ' OR ' + orText;
	} else if (containsText) {
		selection = containsText;
	} else if (orText) {
		selection = orText;
	} else selection = 'ALL';
</script>

<h2 class="font-bold mb-2 w-[200px] text-center">Contains</h2>
<div class="mb-2">
	<input
		type="text"
		placeholder="Contains"
		bind:value={containsText}
		class="w-full p-1 border rounded mb-2"
	/>
</div>
<h2 class="font-bold mb-2 text-center">OR</h2>
<div class="mb-2">
	<input type="text" placeholder="Or" bind:value={orText} class="w-full p-1 border rounded" />
</div>
