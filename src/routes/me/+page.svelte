<div class="bg-gray-100 flex justify-center items-center min-h-screen">
	<div class="flex flex-col items-start p-8 bg-white rounded-lg w-full max-w-lg">
		<h1 class="text-xxl font-bold mb-8">User Name</h1>
		<div class="space-y-4 flex flex-col">
			<a href="/my-emails" class="bg-gray-700 text-white py-2 px-4 rounded-full w-48 text-left"
				>My Emails</a
			>
			<button class="bg-gray-700 text-white py-2 px-4 rounded-full w-48 text-left"
				>Close My Account</button
			>
			<a href="/login" class="bg-gray-700 text-white py-2 px-4 rounded-full w-48 text-left"
				>Log Out</a
			>
		</div>
	</div>
</div>

<style>
	button {
		transition: background-color 0.3s;
	}
	button:hover {
		background-color: #4b5563; /* Tailwind gray-600 */
	}
</style>
