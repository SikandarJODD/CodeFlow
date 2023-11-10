<script>
	import QueTable from '$lib/practice/queTable.svelte';
import TagsSidebar from '$lib/practice/tagsSidebar.svelte';
	import * as Card from '$ui/card';
	import { Bell, EyeNone, Person } from 'radix-icons-svelte';
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-96">
		<TagsSidebar />
	</div>
	<div class="w-full">
		<QueTable/>
	</div>
</main>
