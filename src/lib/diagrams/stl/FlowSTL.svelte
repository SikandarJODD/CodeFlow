<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Background, Controls, type Edge, type Node } from '@xyflow/svelte';
	import '$lib/style.css';
	import '@xyflow/svelte/dist/style.css';

	import { onMount } from 'svelte';
	import { initialEdges, initialnode, mobile, nodeTypes } from './edges-nodes';

	let nodes = writable<Node[]>(initialnode);
	let edges = writable<Edge[]>(initialEdges);
	let isShow = true;
	let width = 0;
	onMount(() => {
		isShow = true;

		if (width < 600) {
			nodes.set(mobile);
		} else {
			nodes.set(initialnode);
		}
	});
</script>

<svelte:window bind:innerWidth={width} />

{#if isShow}
	<main>
		<SvelteFlow {nodes} {edges} {nodeTypes} fitView>
			<Background class="dark:bg-[#04081a] bg-sky-200" patternColor="#0677BD" gap={25} />
			<Controls showLock={false} />
		</SvelteFlow>
	</main>
{/if}

<style>
	main {
		height: 90.7vh;
	}
	:global(.svelte-flow__handle.target) {
		left: 50%;
	}
</style>
