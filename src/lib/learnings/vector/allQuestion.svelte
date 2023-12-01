<script lang="ts">
	import * as Accordion from '$ui/ui/accordion';
	let allques = [
		{
			id: 1,
			title: 'Easy',
			content: 'hello'
		},
		{
			id: 2,
			title: 'Medium',
			content: 'hello'
		},
		{
			id: 3,
			title: 'Hard',
			content: 'hello'
		}
	];
</script>

<div class="flex items-center justify-center">
	<Accordion.Root class="w-full sm:max-w-[80%]">
		{#each allques as item}
			<Accordion.Item value="item-{item.id}">
				<Accordion.Trigger>{item.title}</Accordion.Trigger>
				<Accordion.Content>{item.content}</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
