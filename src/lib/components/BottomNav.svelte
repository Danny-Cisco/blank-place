<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let activeRoute = '';

	const routes = ['/plus', '/in', '/do', '/done', '/search', '/bishop', '/me'];

	$: {
		const currentPath = $page.url.pathname;
		if (routes.includes(currentPath)) {
			activeRoute = currentPath;
		}
	}

	function setActive(route) {
		activeRoute = route;
	}

	// Optional: Scroll to top on navigation
	onMount(() => {
		$page.subscribe(() => {
			window.scrollTo(0, 0);
		});
	});
</script>

<nav class="w-full flex justify-around items-center py-4 shadow-lg">
	<a
		href="/plus"
		class="{activeRoute === '/plus' ? 'active' : ''} nav-item"
		on:click={() => setActive('/plus')}>+</a
	>
	<a
		href="/in"
		class="{activeRoute === '/in' ? 'active' : ''} nav-item"
		on:click={() => setActive('/in')}>IN</a
	>
	<a
		href="/do"
		class="{activeRoute === '/do' ? 'active' : ''} nav-item"
		on:click={() => setActive('/do')}>DO</a
	>
	<a
		href="/done"
		class="{activeRoute === '/done' ? 'active' : ''} nav-item"
		on:click={() => setActive('/done')}>DONE</a
	>
	<a
		href="/search"
		class="{activeRoute === '/search' ? 'active' : ''} nav-item"
		on:click={() => setActive('/search')}>SEARCH</a
	>
	<a
		href="/bishop"
		class="{activeRoute === '/bishop' ? 'active' : ''} nav-item"
		on:click={() => setActive('/bishop')}>BISHOP</a
	>
	<a
		href="/me"
		class="{activeRoute === '/me' ? 'active' : ''} nav-item"
		on:click={() => setActive('/me')}>ME</a
	>
</nav>

<style>
	nav {
		z-index: 10;
		gap: 10px;
	}
	.nav-item {
		flex: 1;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: gray;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		text-align: center;
	}
	.active {
		background-color: yellow;
		color: black;
		font-weight: bold;
	}
</style>
