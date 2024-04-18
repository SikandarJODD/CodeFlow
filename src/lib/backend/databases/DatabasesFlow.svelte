<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';
	import '$lib/style.css';
	import { onMount } from 'svelte';
	import { useSvelteFlow } from '@xyflow/svelte';
	import { dbEdges, dbNodes } from './dbstore';
	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';

	import FrameworkNode from '$lib/frontend/flowNodes/frameworkNode.svelte';

	let nodeTypes = {
		framework: FrameworkNode
	};
	const nodes = writable(dbNodes);
	const edges = writable(dbEdges);

	const { setZoom } = useSvelteFlow();
	onMount(() => {
		setTimeout(() => {
			setZoom(0.97, { duration: 300 });
		}, 800);
	});
</script>

<div style:height="90vh">
	<SvelteFlow {nodes} {edges} fitView {nodeTypes}>
		<Controls />
		<Background variant={BackgroundVariant.Dots} gap={18} />
	</SvelteFlow>
</div>
