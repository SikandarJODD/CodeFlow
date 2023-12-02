<script>
	import Button from '$ui/button/button.svelte';
	import { ArrowLeftToLine, ArrowRightToLine, Slice } from 'lucide-svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let nums = [
		{
			num: 10,
			id: crypto.randomUUID()
		}
	];
	let disablePush = false,
		disablePop = false;
	$: {
		if (nums.length === 5) {
			disablePush = true;
		} else {
			disablePush = false;
		}
		if (nums.length === 1) {
			disablePop = true;
		} else {
			disablePop = false;
		}
	}
</script>

<div class="flex flex-col items-center">
	<div class="my-2 flex flex-col items-center mb-6">
		<code class=" text-primary"> {`vector<int>v;`}</code>
		<code class=" text-primary flex gap-2"
			>Size:<span class="text-sky-600 dark:text-cyan-400">{nums.length || '0'}</span>
		</code>
		<code class=" text-primary flex gap-2"
			>v.top():<span class="text-sky-600 dark:text-cyan-400">{nums[0].num || ''}</span>
		</code>
	</div>

	<div class="flex items-center gap-5 justify-center">
		<div
			class="px-3 pb-2 pt-3 border-b border-l border-r rounded-b-xl border-primary transition-all duration-700 ease-out"
		>
			<div class="flex flex-col">
				{#each nums as item (item.id)}
					<div
						in:fly={{ y: -60 }}
						out:fly={{ y: -50 }}
						animate:flip={{ duration: 400, easing: quintOut }}
						class=" small_box my-1 text-center first:bg-green-400/30 dark:first:bg-green-900/20 dark:first:text-green-400 first:text-green-600 border border-primary py-1 px-2.5 rounded-md dark:bg-gray-800/50"
					>
						{item.num}
					</div>
				{:else}
					Empty Stack
				{/each}
			</div>
		</div>
	</div>
	<div class="flex gap-4 mt-4 flex-wrap items-center justify-center md:flex-row">
		<Button
			size="sm"
			on:click={() => {
				nums = [{ num: Math.floor(Math.random() * 50), id: crypto.randomUUID() }, ...nums];
			}}
			disabled={disablePush}
		>
			<ArrowLeftToLine size="15" strokeWidth="1.8" class="mr-1.5" />
			Push</Button
		>
		<Button
			disabled={disablePop}
			size="sm"
			on:click={() => {
				nums.shift();
				nums = nums;
			}}
		>
			Pop <ArrowRightToLine size="15" strokeWidth="1.8" class="ml-1.5" /></Button
		>
	</div>
</div>
s

<style>
</style>
