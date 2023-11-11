<script lang="ts">
	import Badge from '$ui/badge/badge.svelte';
	import * as Card from '$ui/card';
	let allTags = [
		'Array',
		'String',
		'DP',
		'Linked List',
		'Graph',
		'Tree',
		'Recursion',
		'Backtracking'
	];
</script>

<Card.Root class="md:sticky md:top-5 w-full md:w-fit">
	<Card.Header class="pb-3 ">
		<Card.Title>Question Tags</Card.Title>
		<Card.Description>Choose Questions Accordingly</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-wrap gap-2">
			{#each allTags as item}
				<Badge
					variant="outline"
					class="px-3 py-2 bg-gray-900 text-white dark:hover:bg-gray-800/80 dark:bg-gray-900/40 "
					>{item}</Badge
				>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
