<script>
	export let column;
</script>

<div class="bg-gray-200 text-black p-4 absolute top-[30px] rounded-md left-[-5px]">
	{#if column === 'When'}
		<h2 class="font-bold mb-2">Sort Order</h2>
		<div class="mb-2">
			<label class="flex items-center">
				<input type="checkbox" checked class="mr-2" />
				LIFO (most recent)
			</label>
		</div>
		<div class="mb-2">
			<label class="flex items-center">
				<input type="checkbox" class="mr-2" />
				FIFO (in order of arrival)
			</label>
		</div>
		<div class="my-4 border-t border-gray-400"></div>
		<div class="mb-2">
			<label class="flex items-center">
				<input type="checkbox" checked class="mr-2" />
				ALL
			</label>
		</div>
		<div class="mb-2">
			<label class="flex items-center">
				<input type="checkbox" class="mr-2" />
				Between
			</label>
			<div class="mt-2">
				<input type="text" placeholder="Start Date" class="w-full p-1 border rounded mb-2" />
				<input type="text" placeholder="End Date" class="w-full p-1 border rounded" />
			</div>
		</div>
	{/if}
</div>

<style>
	.absolute {
		position: absolute;
	}
	.top-\[30px\] {
		top: 30px;
	}
	.left-\[-5px\] {
		left: -5px;
	}
</style>
