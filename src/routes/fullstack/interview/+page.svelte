<script>
	import { conceptsTitle } from '$lib/frontend/concepts/concept_tags';
	import { interviewTitle } from '$lib/frontend/interview/interview_qt';
	import SubTopics from '$lib/learnings/SubTopics.svelte';
</script>

<svelte:head>
	<title>Codeflow - Interview Questions</title>
	<meta name="description" content="Codeflow - Interview Questions" />
</svelte:head>

<div class="not-prose grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
	{#each $interviewTitle as subtopic}
		<SubTopics {subtopic} />
	{/each}
</div>
