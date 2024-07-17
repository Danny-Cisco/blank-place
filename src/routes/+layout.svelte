<script lang="ts">
	import '../app.postcss';

	import BottomNav from '$lib/components/BottomNav.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="relative h-full flex flex-col">
	<div
		class="flex-1 mt-4 container mx-auto flex justify-center text-black items-center bg-white rounded-3xl"
	>
		<slot />
	</div>
	<BottomNav />
</div>
