<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	// Create a derived store that sets showSearch to true if the current path is /search
	const showSearch = derived(page, ($page) => $page.url.pathname === '/search');
</script>

{#if $showSearch}
	<div
		class="flex flex-col relative items-center justify-center rounded-full bg-white text-black overflow-hidden h-[50px]"
	>
		<div class="absolute left-[15px] text-[24px]">
			<FontAwesomeIcon icon={faSearch} />
		</div>
		<input class="bg-white w-[102%] pl-[60px] h-[52px] my-[-2px]" placeholder="Search..." />
	</div>
{/if}
