<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import AllConceptTags from '$lib/frontend/concepts/AllConceptTags.svelte';
	$: routeID = $page.route.id;
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-56 lg:w-60 xl:w-72">
		<AllConceptTags title="Learn Frontend Concepts" desc="Simple frontend Concepts" />
	</div>
	{#key routeID}
		<div
			in:fly={{ duration: 300, x: 20 }}
			class="w-full bg-gray-50 dark:bg-gray-900/40 rounded-lg border border-primary/20 px-2 md:px-6 py-3 md:py-6 text-center md:text-left"
		>
			<div class="prose dark:prose-invert min-w-full">
				<slot />
			</div>
		</div>
	{/key}
</main>
