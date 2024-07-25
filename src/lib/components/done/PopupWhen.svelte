<script>
	let sortOrder = 'LIFO'; // default selection for sort order
	let filterType = 'ALL'; // default selection for filter type
	let startDate = '';
	let endDate = '';
</script>

<div class="w-[300px]">
	<h2 class="font-bold mb-3 text-xl text-center">Sort Order</h2>
	<div class="mb-2">
		<label class="flex items-center">
			<input type="radio" name="sortOrder" value="LIFO" bind:group={sortOrder} class="mr-2" />
			LIFO (most recent)
		</label>
	</div>
	<div class="mb-2">
		<label class="flex items-center">
			<input type="radio" name="sortOrder" value="FIFO" bind:group={sortOrder} class="mr-2" />
			FIFO (in order of arrival)
		</label>
	</div>
	<div class="my-4 border-t border-gray-400"></div>
	<div class="mb-2">
		<label class="flex items-center">
			<input type="radio" name="filterType" value="ALL" bind:group={filterType} class="mr-2" />
			ALL
		</label>
	</div>
	<div class="mb-2">
		<label class="flex items-center">
			<input type="radio" name="filterType" value="Between" bind:group={filterType} class="mr-2" />
			Between
		</label>
		{#if filterType === 'Between'}
			<div class="mt-2">
				<input
					type="text"
					placeholder="Start Date"
					bind:value={startDate}
					class="w-full p-1 border rounded mb-2"
				/>
				<input
					type="text"
					placeholder="End Date"
					bind:value={endDate}
					class="w-full p-1 border rounded"
				/>
			</div>
		{/if}
	</div>
</div>
