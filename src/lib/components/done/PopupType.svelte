<script>
	let sentMail = false;
	let archivedEmail = false;
	let events = false;
	let completedAction = false;
	let archivedNotes = false;

	export let selection;

	const labels = {
		sentMail: 'Sent mail',
		archivedEmail: 'Archived Email',
		events: 'Events',
		completedAction: 'Completed Action',
		archivedNotes: 'Archived Notes'
	};

	let mode = 'ALL';

	$: {
		const selectedLabels = [];
		if (mode === 'Selected') {
			if (sentMail) selectedLabels.push(labels.sentMail);
			if (archivedEmail) selectedLabels.push(labels.archivedEmail);
			if (events) selectedLabels.push(labels.events);
			if (completedAction) selectedLabels.push(labels.completedAction);
			if (archivedNotes) selectedLabels.push(labels.archivedNotes);
		}
		selection = mode === 'ALL' ? 'ALL' : selectedLabels.join(', ');
	}

	$: if (!selection && mode === 'Selected') {
		selection = 'Selected';
	}
</script>

<div class="dropdown w-[250px]">
	<div class="dropdown-content">
		<h2 class="font-bold text-lg mb-4 text-center">Include&nbsp(Select)</h2>
		<div class="flex justify-between">
			<label>
				<input type="radio" bind:group={mode} value="ALL" />
				ALL
			</label>

			<label>
				<input type="radio" bind:group={mode} value="Selected" />
				Selected
			</label>
		</div>

		<div class="my-4 border-t border-gray-400"></div>
		{#if mode === 'Selected'}
			<label>
				<input type="checkbox" bind:checked={sentMail} disabled={mode === 'ALL'} />
				Sent mail
			</label>
			<br />
			<label>
				<input type="checkbox" bind:checked={archivedEmail} disabled={mode === 'ALL'} />
				Archived Email
			</label>
			<br />
			<label>
				<input type="checkbox" bind:checked={events} disabled={mode === 'ALL'} />
				Events
			</label>
			<br />
			<label>
				<input type="checkbox" bind:checked={completedAction} disabled={mode === 'ALL'} />
				Completed Action
			</label>
			<br />
			<label>
				<input type="checkbox" bind:checked={archivedNotes} disabled={mode === 'ALL'} />
				Archived Notes
			</label>
		{/if}
	</div>
</div>

<style>
	.dropdown-content {
		display: block;
		min-width: 160px;
		padding: 12px 16px;
		z-index: 1;
	}
</style>
