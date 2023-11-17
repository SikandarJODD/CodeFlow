<script lang="ts">
	import QueTable from '$lib/practice/queTable.svelte';
	import TagsSidebar from '$lib/practice/tagsSidebar.svelte';
	import { qdata, webdata } from '$lib';
	import * as Card from '$ui/card';
	import * as Table from '$ui/table/';

	import { DataHandler } from '@vincjo/datatables';
	import { onMount } from 'svelte';

	let handler = new DataHandler($qdata, { rowsPerPage: 31 });
	$: handler.setRows($qdata);
	let getDataQ = () => {
		let cnt = localStorage.getItem('allq') || null;
		let changeQ;
		if (cnt !== null) {
			changeQ = JSON.parse(cnt);
			webdata.set(changeQ);
			handler.setRows($qdata);
		}
	};
	onMount(() => {
		if (localStorage.getItem('que') !== null) {
			localStorage.removeItem('que');
		}
		getDataQ();
	});
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-96">
		<TagsSidebar {handler} />
	</div>
	<div class="w-full">
		<QueTable {handler} />
	</div>
</main>
