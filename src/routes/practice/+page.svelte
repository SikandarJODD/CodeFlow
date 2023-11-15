<script>
	import { webdata } from '$lib';
	import QueTable from '$lib/practice/queTable.svelte';
	import TagsSidebar from '$lib/practice/tagsSidebar.svelte';
	import { onMount } from 'svelte';
	
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-96">
		<TagsSidebar />
	</div>
	<div class="w-full">
		<QueTable />
	</div>
</main>
