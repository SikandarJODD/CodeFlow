<script>
	import QueTable from '$lib/practice/queTable.svelte';
	import TagsSidebar from '$lib/practice/tagsSidebar.svelte';
	// import { onMount } from 'svelte';
	import { qdata } from '$lib';

	let queData = $qdata;

	import { DataHandler } from '@vincjo/datatables';

	let handler = new DataHandler(queData, { rowsPerPage: 31 });
	// onMount(() => {
	// 	console.clear();
	// });
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-96">
		<TagsSidebar {handler} />
	</div>
	<div class="w-full">
		<QueTable {handler} />
	</div>
</main>
