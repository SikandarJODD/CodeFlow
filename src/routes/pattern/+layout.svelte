<script lang="ts">
	import { page } from '$app/stores';
	import STLTags from '$lib/learnings/STLTags.svelte';
	import Card from '$ui/card/card.svelte';
	import CardContent from '$ui/card/card-content.svelte';
	import { allpatterns } from '$lib/learnings/topics-and-tags';
	import { fly } from 'svelte/transition';
	$: routeID = $page.route.id;
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-56 lg:w-60 xl:w-72">
		<STLTags tags={$allpatterns} title="Question Patterns" desc="Solve Pattern Wise Questions" />
	</div>
	{#key routeID}
		<div in:fly={{ duration: 300, x: 20 }} class="w-full">
			<Card class="w-full  bg-gray-50 dark:bg-gray-900">
				<CardContent class="mt-6">
					<slot />
				</CardContent>
			</Card>
		</div>
	{/key}
</main>
<!-- md:min-w-max -->
<!-- <div
			in:fly={{ duration: 300, x: 20 }}
			class="lg:w-full bg-gray-50 dark:bg-gray-900 rounded-lg border border-primary/20 px-2 md:px-6 py-3 md:py-6 text-center md:text-left"
		>
			<slot />
		</div> -->
