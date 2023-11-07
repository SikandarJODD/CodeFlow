<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, type Node, type Edge } from '@xyflow/svelte';

	import Simple from './Simple.svelte';
	import BottomEnd from './BottomEnd.svelte';

	import '@xyflow/svelte/dist/style.css';
	import {
		BarChartIcon,
		BinaryIcon,
		BracketsIcon,
		CombineIcon,
		Files,
		FilesIcon,
		GitBranchIcon,
		GitCompareIcon,
		GitPullRequestCreate,
		NetworkIcon,
		SearchCode,
		SearchCodeIcon
	} from 'lucide-svelte';
	import SheetFlow from './SheetFlow.svelte';

	const nodeTypes = {
		simple: Simple,
		end: BottomEnd,
		sheet:SheetFlow
	};

	const fitViewOptions = {
		padding: 80,
		minZoom: 10,
		duration: 900
	};

	const nodes = writable<Node[]>([
		{
			id: '1',
			type: 'sheet',
			position: { x: 700, y: 40 },
			data: {
				label: 'Array & Hashing',
				icon: BracketsIcon
			}
		},
		{
			id: '2',
			type: 'simple',
			position: { x: 650, y: 140 },
			data: {
				label: 'Two Pointers'
			}
		},
		{
			id: '3',
			type: 'end',
			position: { x: 800, y: 140 },
			data: {
				label: 'Stack',
				icon: FilesIcon
			}
		},
		{
			id: '4',
			type: 'simple',
			position: { x: 476, y: 260 },
			data: {
				label: 'Binary Search',
				icon: SearchCodeIcon
			}
		},
		{
			id: '5',
			type: 'end',
			position: { x: 643, y: 260 },
			data: {
				label: 'Sliding Window'
			}
		},
		{
			id: '6',
			type: 'simple',
			position: { x: 814, y: 260 },
			data: {
				label: 'Linked List',
				icon: GitBranchIcon
			}
		},
		{
			id: '7',
			type: 'simple',
			position: { x: 600, y: 360 },
			data: {
				label: 'Tree',
				icon: NetworkIcon
			}
		},
		{
			id: '8',
			type: 'end',
			position: { x: 460, y: 430 },
			data: {
				label: 'Tries'
			}
		},
		{
			id: '9',
			type: 'simple',
			position: { x: 546, y: 520 },
			data: {
				label: 'Heap/ Priority Queue'
			}
		},
		{
			id: '10',
			type: 'simple',
			position: { x: 880, y: 430 },
			data: {
				label: 'Backtracking',
				icon: CombineIcon
			}
		},
		{
			id: '11',
			type: 'end',
			position: { x: 450, y: 640 },
			data: {
				label: 'Intervals'
			}
		},
		{
			id: '12',
			type: 'end',
			position: { x: 600, y: 640 },
			data: {
				label: 'Greedy'
			}
		},
		{
			id: '13',
			type: 'end',
			position: { x: 740, y: 640 },
			data: {
				label: 'Advance Graphs'
			}
		},
		{
			id: '14',
			type: 'simple',
			position: { x: 780, y: 520 },
			data: {
				label: 'Graphs',
				icon: BarChartIcon
			}
		},
		{
			id: '15',
			type: 'simple',
			position: { x: 1000, y: 520 },
			data: {
				label: '1 DP',
				icon: GitPullRequestCreate
			}
		},
		{
			id: '16',
			type: 'end',
			position: { x: 980, y: 640 },
			data: {
				label: '2 DP',
				icon: GitCompareIcon
			}
		},
		{
			id: '17',
			type: 'simple',
			position: { x: 1100, y: 640 },
			data: {
				label: 'Bit Manipulation',
				icon: BinaryIcon
			}
		},
		{
			id: '18',
			type: 'end',
			position: { x: 890, y: 720 },
			data: {
				label: 'Math Geometry'
			}
		}
	]);

	const edges = writable<Edge[]>([
		{
			id: '1-2',
			source: '1',
			target: '2',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '1-3',
			source: '1',
			target: '3',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '2-4',
			source: '2',
			target: '4',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '2-5',
			source: '2',
			target: '5',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '2-6',
			source: '2',
			target: '6',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '4-7',
			source: '4',
			target: '7',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '6-7',
			source: '6',
			target: '7',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '7-8',
			source: '7',
			target: '8',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '7-9',
			source: '7',
			target: '9',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '7-10',
			source: '7',
			target: '10',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '9-11',
			source: '9',
			target: '11',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '9-12',
			source: '9',
			target: '12',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '9-13',
			source: '9',
			target: '13',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '10-14',
			source: '10',
			target: '14',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '10-15',
			source: '10',
			target: '15',
			animated: true,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '14-13',
			source: '14',
			target: '13',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '15-16',
			source: '15',
			target: '16',
			animated: true,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '15-17',
			source: '15',
			target: '17',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '17-18',
			source: '17',
			target: '18',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '14-18',
			source: '14',
			target: '18',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		},
		{
			id: '14-16',
			source: '14',
			target: '16',
			animated: false,
			style: 'stroke: #1C77FFFF;'
		}
	]);
</script>

<div style="height:91.4vh">
	<SvelteFlow {nodes} {edges} {nodeTypes} maxZoom={3} fitView>
		<Controls />
		<Background class="dark:bg-gray-900 bg-gray-100" />
	</SvelteFlow>
</div>
