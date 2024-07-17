<script>
</script>

<main class="flex justify-center items-center">
	<div class="bg-white p-8 rounded-lg w-full max-w-sm">
		<h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
		<div class="flex justify-around mb-6 space-x-4">
			<button type="button" class="bg-gray-700 flex-1 text-white py-2 px-4 rounded-full"
				>Continue with Google</button
			>
			<button type="button" class="bg-gray-700 flex-1 text-white py-2 px-4 rounded-full"
				>Continue with Microsoft</button
			>
		</div>
		<div class="text-center mb-6">
			<span class="text-gray-600">OR</span>
		</div>
		<div class="flex justify-center">
			<a href="/sign-up" class="bg-gray-700 text-white py-2 px-4 rounded-full">Sign Up</a>
		</div>
	</div>
</main>

<style>
	button {
		transition: background-color 0.3s;
	}
	button:hover {
		background-color: #4b5563; /* Tailwind gray-600 */
	}
</style>
