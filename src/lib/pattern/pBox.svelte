<script lang="ts">
	import { Handle, Position } from '@xyflow/svelte';
	import { Brackets, CheckCircle2 } from 'lucide-svelte';

	export let data;
	export let id = 0;

	const { label, w1, v, sackWeight } = data;
	// let w1 = [1, 2, 3];
	// let v = [4, 1, 3];
	// let sackWeight = 10;
</script>

<div>
	<Handle type="target" position={Position.Top} />
	<div
		class="dark:bg-gray-800/50 flex flex-col justify-center items-center bg-gray-100/10 rounded-lg h-24 p-6 {id >=
			8 && id <= 13
			? 'opacity-30 cursor-auto'
			: 'opacity-100'} border border-primary/70"
	>
		{#if Number(sackWeight) === 0}
			<h2 class="font-bold mb-1.5 flex items-end gap-1.5">
				<CheckCircle2 color="#30fd48" /> Sack Weight : {sackWeight}
			</h2>
		{:else}
			<h2 class="font-bold mb-1.5">Sack Weight : {sackWeight}</h2>
		{/if}
		<div class="w-32 flex gap-0.5 items-center">
			<span class="px-2"> w : </span>
			<div>
				{#each w1 as item}
					<span class="px-2 border-l border-t border-b last:border-r border-primary/80">
						{item}
					</span>
				{:else}
					<Brackets />
				{/each}
			</div>
		</div>
		<div class="w-32 flex gap-0.5 items-center">
			<span class="px-2"> v : </span>
			<div>
				{#each v as item}
					<span class="px-2 border-l border-t border-b last:border-r border-primary/80">
						{item}
					</span>
				{:else}
					<Brackets />
				{/each}
			</div>
		</div>
	</div>
	<Handle type="source" position={Position.Bottom} />
</div>
