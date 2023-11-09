<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		type Node,
		type Edge
	} from '@xyflow/svelte';

	// NodeTypes :
	const nodeTypes = {
		simple: HomeCode,
		end: BottomEnd,
		top: TopEnd
	};
	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';
	import Simple from '$lib/diagrams/sv/Simple.svelte';
	import BottomEnd from '$lib/diagrams/sv/BottomEnd.svelte';
	import { Blocks, BracketsIcon, CircleDot, ScrollText, Terminal } from 'lucide-svelte';
	import TopEnd from '$lib/diagrams/sv/TopEnd.svelte';
	import { Home } from 'radix-icons-svelte';
	import HomeCode from './HomeCode.svelte';
	/*
	{
			id: '2',
			type: 'default',
			data: { label: 'CodeFlow' },
			position: { x: 50, y: 150 },
			style: 'background:#010612FF; color:white;'
		},
	 */
	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: '1',
			type: 'top',
			position: { x: 0, y: 40 },
			data: {
				label: 'Learn',
				icon: ScrollText,
				link: '/roadmap/dsa'
			}
		},
		{
			id: '2',
			type: 'simple',
			data: {
				label: 'CodeFlow',
				style: 'background:#010612FF; color:white;',
				icon: CircleDot,
				link: '/roadmap/dsa'
			},
			position: { x: 90, y: 150 }
		},
		{
			id: '3',
			type: 'end',
			position: { x: 0, y: 270 },
			data: {
				label: 'Practice',
				icon: Terminal,
				link: '/roadmap/dsa'
			}
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: '1-2',
			type: 'default',
			source: '1',
			target: '2',
			animated: true,
			style: 'stroke: #000;'
		},
		{
			id: '2-3',
			type: 'default',
			source: '2',
			target: '3',
			animated: true,
			style: 'stroke: #000;'
		}
	]);
</script>

<!-- 

    style="background: #041133FF;"
 -->
<div
	class=" shadow-xl shadow-gray-600/30 dark:shadow-gray-950 overflow-hidden h-full lg:h-5/6 rounded-2xl m-4 lg:m-0"
>
	<SvelteFlow
		style="background:#45ADF7FF;"
		{nodes}
		{edges}
		{nodeTypes}
		fitView
	>
		<!-- <Controls /> -->
		<Background patternColor="#051F40FF" variant={BackgroundVariant.Dots} />
	</SvelteFlow>
</div>
