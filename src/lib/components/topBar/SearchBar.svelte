<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// Create a derived store that sets showSearch to true if the current path is /search
	const showSearch = derived(page, ($page) => $page.url.pathname === '/search');
</script>

{#if $showSearch}
	<div
		class="flex flex-col relative items-center justify-center rounded-full bg-white text-black overflow-hidden h-[50px]"
	>
		<div class="absolute left-[15px] text-[24px]">🔎</div>
		<input class="bg-white w-[102%] pl-[60px] h-[52px] my-[-2px]" placeholder="Search..." />
	</div>
{/if}
