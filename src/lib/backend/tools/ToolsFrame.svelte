<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import '$lib/backend/tools/turbo.css';

	let nodeTypes = {
		turbo: ToolsFrameNode
	};
	const edgeTypes = {
		turbo: ToolsFrameEdge
	};
	const nodes = writable(toolsNodes);
	const edges = writable(toolsEdges);
	import { useSvelteFlow } from '@xyflow/svelte';
	import { onMount } from 'svelte';
	import ToolsFrameNode from './ToolsFrameNode.svelte';
	import { toolsEdges, toolsNodes } from './tools_code';
	import ToolsFrameEdge from './ToolsFrameEdge.svelte';

	const { setZoom } = useSvelteFlow();
	onMount(() => {
		// window.location.reload();
		setTimeout(() => {
			setZoom(0.82, { duration: 300 });
		}, 800);
	});
	const defaultEdgeOptions = {
		type: 'turbo',
		markerEnd: 'edge-circle'
	};
</script>

<div style:height="90vh">
	<SvelteFlow
		{nodes}
		{edges}
		fitView
		{nodeTypes}
		{edgeTypes}
		{defaultEdgeOptions}
		class="dark:bg-[#04081a]"
	>
		<Controls />
		<svg>
			<defs>
				<linearGradient id="edge-gradient">
					<stop offset="0%" stop-color="#ae53ba" />
					<stop offset="100%" stop-color="#2a8af6" />
				</linearGradient>
				<marker
					id="edge-circle"
					viewBox="-5 -5 10 10"
					refX="0"
					refY="0"
					markerUnits="strokeWidth"
					markerWidth="10"
					markerHeight="10"
					orient="auto"
				>
					<circle stroke="#2a8af6" stroke-opacity="0.75" r="2" cx="0" cy="0" />
				</marker>
			</defs>
		</svg>
		<Background variant={BackgroundVariant.Dots} gap={20} />
	</SvelteFlow>
</div>
