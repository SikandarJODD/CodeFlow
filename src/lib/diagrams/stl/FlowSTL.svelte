<script lang="ts">
	import CenterName from './centerName.svelte';
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Background,
		Controls,
		type Edge,
		type Node,
		type NodeTypes,
		type FitViewOptions
	} from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import { initialEdges, initialnode } from './edges-nodes';

	let nodeTypes: NodeTypes = {
		center: CenterName
	};
	let fitViewOptions: FitViewOptions = {
		padding: 3,
		minZoom: 1,
		maxZoom: 9,
		duration: 30
	};
	let nodes = writable<Node[]>(initialnode);
	let innerWidth = 0;
	let edges = writable<Edge[]>(initialEdges);
	let mobileNodes = writable<Node[]>([
		{
			id: '1', // required and needs to be a string,
			type: 'center',
			position: { x: 150, y: 50 }, // required
			data: { label: 'Data Structure' } // required
		},
		{
			id: '2',
			type: 'center',
			position: { x: 430, y: 170 },
			data: { label: 'Linear Data Structure' }
		},
		{
			id: '3',
			type: 'center',
			position: { x: 870, y: 170 },
			data: { label: 'Non-Linear Data Structure' }
		},
		{
			id: '4',
			type: 'center',
			position: { x: 280, y: 280 },
			data: { label: 'Static Data Structure' }
		},
		{
			id: '5',
			type: 'center',
			position: { x: 544, y: 280 },
			data: { label: 'Dynamic Data Structure' }
		},
		{
			id: '6',
			type: 'center',
			position: { x: 315, y: 400 },
			data: { label: 'Array' }
		},
		{
			id: '7',
			type: 'center',
			position: { x: 470, y: 400 },
			data: { label: 'Queue' }
		},
		{
			id: '8',
			type: 'center',
			position: { x: 590, y: 400 },
			data: { label: 'Stack' }
		},
		{
			id: '9',
			type: 'center',
			position: { x: 710, y: 400 },
			data: { label: 'Linked List' }
		},
		{
			id: '10',
			type: 'center',
			position: { x: 850, y: 280 },
			data: { label: 'Tree' }
		},
		{
			id: '11',
			type: 'center',
			position: { x: 1000, y: 280 },
			data: { label: 'Graph' }
		}
	]);
	$: {
		if (innerWidth < 600) {
			$nodes = $mobileNodes;
		} else {
			$nodes = initialnode;
		}
	}
</script>

<svelte:window bind:innerWidth />

<main>
	<SvelteFlow {nodes} {edges} {nodeTypes} {fitViewOptions}>
		<Background class="dark:bg-gray-900 bg-gray-100" patternColor="#aaa" gap={20} />
		<Controls />
	</SvelteFlow>
</main>

<style>
	main {
		height: 90.7vh;
	}
</style>
