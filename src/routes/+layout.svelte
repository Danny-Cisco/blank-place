<script lang="ts">
	import '../app.postcss';

	import BottomNav from '$lib/components/BottomNav.svelte';
	import TopBar from '$lib/components/topBar/TopBar.svelte';
	import BishopFloating from '$lib/components/bishop/BishopFloating.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="relative max-h-[100vh] min-h-[100vh] flex flex-col pt-2 px-4">
	<TopBar />
	<div
		class="flex-1 mt-2 mx-auto w-full max-h-[85vh] flex flex-col overflow-hidden justify-start text-black items-center bg-white rounded-3xl"
	>
		<slot />
	</div>
	<BottomNav />
</div>
<BishopFloating />
