<script lang="ts">
	import { writable } from 'svelte/store';
	import { SvelteFlow, Controls, Background, BackgroundVariant } from '@xyflow/svelte';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: '1',
			type: 'input',
			data: { label: 'Learn' },
			position: { x: 0, y: 0 }
		},
		{
			id: '2',
			type: 'default',
			data: { label: 'CodeFlow' },
			position: { x: 50, y: 150 },
			style: 'background:#010612FF; color:white;'
		},
		{
			id: '3',
			type: 'default',
			data: { label: 'Practice' },
			position: { x: 0, y: 300 }
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
		class="h-full w-full text-gray-900"
		style="background:#45ADF7FF;"
		{nodes}
		{edges}
		fitView
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<!-- <Controls /> -->
		<Background patternColor="#051F40FF" variant={BackgroundVariant.Dots} />
	</SvelteFlow>
</div>
