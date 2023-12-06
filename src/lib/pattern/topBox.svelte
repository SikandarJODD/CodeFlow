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
		class=" flex flex-col justify-center items-center rounded-lg h-24 p-6 {id >= 8 && id <= 13
			? 'opacity-30 cursor-auto'
			: 'opacity-100'} border-primary/70 border {sackWeight === 0
			? 'border-green-400 dark:bg-green-950/40 bg-green-400/50'
			: ' dark:bg-gray-800/50 bg-gray-100/10'}"
	>
		{#if Number(sackWeight) === 0}
			<h2 class="font-bold mb-1.5 flex items-end gap-1.5 text-green-800 dark:text-green-400">
				<CheckCircle2 /> Sack Weight : {sackWeight}
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
</div>
