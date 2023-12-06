<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import KnapsackFlow from '$lib/pattern/KnapsackFlow.svelte';
</script>

<div>
	<Card.Root>
		<Card.Header class="pb-3">
			<Card.Title class="font-mono text-xl md:text-2xl">0/1 KnapSack</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="dark:text-gray-400">
				Given N items where each item has some weight and profit associated with it and also given a
				bag with capacity W. The task is to put the items into the bag such that the sum of profits
				associated with them is the maximum possible
			</p>
			<div>
				<KnapsackFlow />
			</div>
		</Card.Content>
		<Card.Footer>
			<p>Card Footer</p>
		</Card.Footer>
	</Card.Root>
</div>
