<script lang="ts">
	import * as Card from '$ui/card';
	import Button from '$ui/button/button.svelte';
	import { alltags } from './topics-and-tags';
	export let title = 'Learning Topics';
	export let desc = 'Choose Topics Accordingly';
	export let tags = $alltags;
</script>

<Card.Root class="md:sticky md:top-5 w-full md:w-56 lg:w-60 xl:w-72">
	<Card.Header class="pb-3 ">
		<Card.Title>{title}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-wrap gap-2 h-40 overflow-y-scroll md:h-full md:overflow-auto">
			{#each tags as item}
				<Button
					href={item.link}
					size="sm"
					variant="outline"
					class="w-full px-3 py-2 bg-gray-900 text-white dark:hover:bg-gray-800/80 dark:bg-gray-900/40 dark:focus:bg-white dark:focus:text-black"
					>{item.name}</Button
				>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
