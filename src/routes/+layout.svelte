<script lang="ts">
	import '../app.postcss';

	import BottomNav from '$lib/components/BottomNav.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="relative h-full flex flex-col px-4">
	<div
		class="flex-1 mt-4 mx-auto w-full flex flex-col justify-center text-black items-center bg-white rounded-3xl"
	>
		<slot />
	</div>
	<BottomNav />
</div>
