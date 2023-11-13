<script lang="ts">
	import { writable } from 'svelte/store';
	import '$lib/style.css';
	import { SvelteFlow, Background, Controls, type Edge, type Node } from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import { initialEdges, initialnode, mobile, nodeTypes } from './edges-nodes';
	import { onMount } from 'svelte';

	let nodes = writable<Node[]>(initialnode);
	let edges = writable<Edge[]>(initialEdges);
	$: innerWidth = 0;
	onMount(() => {
		if (innerWidth < 600) {
			$nodes = mobile;
		} else {
			$nodes = initialnode;
		}
	});
</script>

<svelte:window bind:innerWidth />
<main>
	<SvelteFlow {nodes} {edges} {nodeTypes} fitView>
		<Background class="dark:bg-gray-900 bg-sky-100" patternColor="#69A0FFFF" gap={25} />
		<Controls showLock={false} />
	</SvelteFlow>
</main>

<style>
	main {
		height: 90.7vh;
	}
</style>
