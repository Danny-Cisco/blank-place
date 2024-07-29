<script>
	import DoneTable from '$lib/components/done/DoneTable.svelte';
	let data = {
		records: [
			{
				When: '2024-07-25',
				Short: 'Event A',
				Type: 'Meeting',
				Who: 'John Doe',
				Tags: ['Tag1', 'Tag2'],
				File: 'file-a.pdf'
			},
			{
				When: '2024-07-26',
				Short: 'Event B',
				Type: 'Workshop',
				Who: 'Jane Smith',
				Tags: ['Tag3', 'Tag4'],
				File: 'file-b.pdf'
			}
		]
	};
</script>

<DoneTable {data} />
