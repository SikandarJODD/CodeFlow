<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import STLTags from '$lib/learnings/STLTags.svelte';
	$: routeID = $page.route.id;
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-64 lg:w-72">
		<STLTags />
	</div>
	{#key routeID}
		<div
			in:fly={{ duration: 300, x: 20 }}
			class="prose dark:prose-invert lg:max-w-full bg-gray-50 dark:bg-gray-900 rounded-lg border border-primary/20 px-2 md:px-4 py-3 md:py-6 text-center md:text-left"
		>
			<slot />
		</div>
	{/key}
</main>
<!-- md:min-w-max -->
