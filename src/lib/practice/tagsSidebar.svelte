<script lang="ts">
	import * as Card from '$ui/card';
	let allTags = [
		'Array',
		'String',
		'DP',
		'Linked List',
		'Graph',
		'Recursion',
		'Backtracking',
		'Depth-first Search',
		'Tree',
		'Sorting',
		'Hash Table',
		'Breadth-first Search',
		'Binary Tree'
	];
	import { qdata } from '$lib';

	import { DataHandler } from '@vincjo/datatables';
	import Button from '$ui/button/button.svelte';
	export let handler = new DataHandler($qdata, { rowsPerPage: 31 });
	$: handler.setRows($qdata);

	let filterTopic = (filterText: string) => {
		console.log('working');
		handler.filter(filterText, 'tags');
	};
</script>

<Card.Root class="md:sticky md:top-5 w-full md:w-fit">
	<Card.Header class="pb-3 ">
		<Card.Title>Question Tags</Card.Title>
		<Card.Description>Choose Questions Accordingly</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-wrap gap-2">
			{#each allTags as item}
				<Button
					size="sm"
					on:click={() => filterTopic(item.toLowerCase())}
					variant="outline"
					class="px-3 py-2 bg-gray-900 text-white dark:hover:bg-gray-800/80 dark:bg-gray-900/40 dark:focus:bg-white dark:focus:text-black"
					>{item}</Button
				>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
