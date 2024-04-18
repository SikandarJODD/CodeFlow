<script>
	import { conceptsTitle } from '$lib/frontend/concepts/concept_tags';
	import SubTopics from '$lib/learnings/SubTopics.svelte';
</script>

<svelte:head>
	<title>Full Stack Concepts</title>
	<meta name="description" content="Codeflow - Full Stack Concepts" />
</svelte:head>

<div class="not-prose grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
	{#each $conceptsTitle as subtopic}
		<SubTopics {subtopic} />
	{/each}
</div>
