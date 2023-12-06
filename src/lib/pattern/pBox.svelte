<script lang="ts">
	import Badge from '$ui/badge/badge.svelte';
	import Button from '$ui/button/button.svelte';
	import { Handle, Position } from '@xyflow/svelte';

	export let data;

	const { label } = data;
	let w1 = [1, 2, 3];
	let v = [4, 1, 3];
	let sackWeight = 10;
</script>

<div>
	<Handle type="target" position={Position.Top} />
	<div
		class="dark:bg-gray-800 flex flex-col justify-center align-middle items-center bg-gray-200 rounded-lg h-24 px-4 py-3"
	>
		<h2 class="font-bold mb-1.5">Sack Weight : {sackWeight}</h2>
		<div>
			<div class="text-right">
				w :
				{#each w1 as item}
					<span class="px-2 border-l border-t border-b last:border-r border-primary/80">
						{item}
					</span>
				{/each}
			</div>
			<div class="text-right">
				v :
				{#each v as item}
					<span class="px-2 border-l border-t border-b last:border-r border-primary/80">
						{item}
					</span>
				{/each}
			</div>
		</div>
	</div>
	<Handle type="source" position={Position.Bottom} />
</div>
