<script lang="ts">
	import STLTags from '$lib/learnings/STLTags.svelte';
	import { topicsTitle } from '$lib/learnings/topics-and-tags';
	import SubTopics from '$lib/learnings/SubTopics.svelte';
</script>

<main class="flex flex-col md:flex-row gap-6 m-3 my-6 md:m-8">
	<div class="w-full md:w-64 lg:w-72">
		<STLTags />
	</div>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 items-start justify-start"
	>
		{#each $topicsTitle as subtopic}
			<SubTopics {subtopic} />
		{/each}
	</div>
</main>
