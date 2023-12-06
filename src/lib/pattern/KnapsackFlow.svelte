<script lang="ts">
	import PBox from './pBox.svelte';
	import { writable } from 'svelte/store';
	import { SvelteFlow, Background, BackgroundVariant, MiniMap } from '@xyflow/svelte';
	import './pattern.css';
	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';
	import '$lib/pattern/pattern.css';
	const nodeTypes = {
		simple: PBox
	};
	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: '1',
			type: 'simple',
			data: { label: 'Input Node' },
			position: { x: 0, y: 0 }
		},
		{
			id: '2',
			type: 'simple',
			data: { label: 'Node' },
			position: { x: 0, y: 150 }
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: '1-2',
			source: '1',
			label: 'pick',
			target: '2'
		}
	]);
</script>

<!--
👇 By default, the Svelte Flow container has a height of 100%.
This means that the parent container needs a height to render the flow.
-->
<div style:height="500px" class="rounded-3xl my-4 overflow-hidden">
	<SvelteFlow {nodes} {edges} fitView {nodeTypes}>
		<Background variant={BackgroundVariant.Dots} class="dark:bg-gray-900 bg-gray-100" />
	</SvelteFlow>
</div>
