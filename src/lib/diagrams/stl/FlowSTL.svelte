<script lang="ts">
	import { writable } from 'svelte/store';
	import '$lib/style.css';
	import {
		SvelteFlow,
		Background,
		Controls,
		type Edge,
		type Node,
		BackgroundVariant
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import { initialEdges, initialnode, mobile, nodeTypes } from './edges-nodes';
	import { onMount } from 'svelte';

	let nodes = writable<Node[]>(initialnode);
	let edges = writable<Edge[]>(initialEdges);
	let isShow = false;
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
		<SvelteFlow {nodes} {edges} {nodeTypes} fitView={width > 600 ? false : true}>
			<Background class="dark:bg-gray-900 bg-sky-200" patternColor="#0677BD" gap={25}  />
			<Controls showLock={false} />
		</SvelteFlow>
	</main>
{/if}

<style>
	main {
		height: 90.7vh;
	}
</style>
