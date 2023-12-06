<script lang="ts">
	import PBox from './pBox.svelte';
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Background,
		BackgroundVariant,
		type Node,
		type Edge,
		Controls
	} from '@xyflow/svelte';
	import '$lib/style.css';
	import './pattern.css';
	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';
	import '$lib/pattern/pattern.css';
	import DownloadFlow from './DownloadFlow.svelte';
	const nodeTypes = {
		simple: PBox,
		tiptop: TopBox,
		bitbottom: BottomBox
	};
	import { initialNodes, initialEdges } from './pattern-nodes-edges';
	import TopBox from './topBox.svelte';
	import BottomBox from './bottomBox.svelte';

	const nodes = writable<Node[]>(initialNodes);
	const edges = writable<Edge[]>(initialEdges);
</script>

<!--
👇 By default, the Svelte Flow container has a height of 100%.
This means that the parent container needs a height to render the flow.
-->
<div style:height="500px" class="rounded-2xl my-4 overflow-hidden">
	<SvelteFlow {nodes} {edges} fitView {nodeTypes} maxZoom={4} minZoom={-10}>
		<DownloadFlow />
		<Controls showLock={false} />
		<Background variant={BackgroundVariant.Dots} class="dark:bg-gray-900 bg-gray-100" />
	</SvelteFlow>
</div>
