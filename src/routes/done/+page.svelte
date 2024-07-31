<script>
	import DoneTable from '$lib/components/done/DoneTable.svelte';
	let data = {
		records: [
			{
				when: '2024-07-25',
				short: 'Event A',
				type: 'Meeting',
				who: 'John Doe',
				tags: ['Tag1', 'Tag2'],
				file_url: 'file-a.pdf'
			},
			{
				when: '2024-07-26',
				short: 'Event B',
				type: 'Workshop',
				who: 'Jane Smith',
				tags: ['Tag3', 'Tag4'],
				file_url: 'file-b.pdf'
			}
		]
	};
</script>

<DoneTable {data} />
