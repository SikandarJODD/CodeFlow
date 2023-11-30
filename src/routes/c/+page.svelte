<script>
	import SubTopics from '$lib/learnings/SubTopics.svelte';
	import { topicsTitle } from '$lib/learnings/topics-and-tags';
</script>

<div class="not-prose grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
	{#each $topicsTitle as subtopic}
		<SubTopics {subtopic} />
	{/each}
</div>
