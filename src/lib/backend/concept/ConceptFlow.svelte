<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';
	import { onMount } from 'svelte';
	import { useSvelteFlow } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import '$lib/style.css';

	import { conceptNodes, conceptEdges } from './allconceptmap';
	import ConceptNode from '$lib/frontend/concepts/ConceptNode.svelte';

	let nodeTypes = {
		framework: ConceptNode
	};
	const nodes = writable(conceptNodes);
	const edges = writable(conceptEdges);

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
