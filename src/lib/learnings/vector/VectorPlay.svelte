<script>
	import Button from '$ui/button/button.svelte';
	import Separator from '$ui/ui/separator/separator.svelte';
	import {
		ArrowDown01,
		ArrowLeftToLine,
		ArrowRightLeft,
		ArrowRightToLine,
		MoveLeft,
		MoveRight
	} from 'lucide-svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let nums = [
		{
			num: 10,
			id: crypto.randomUUID()
		},
		{
			num: 1,
			id: crypto.randomUUID()
		}
	];
	let disablePush = false,
		disablePop = false;
	$: {
		if (nums.length === 6) {
			disablePush = true;
		} else {
			disablePush = false;
		}
		if (nums.length === 0) {
			disablePop = true;
		} else {
			disablePop = false;
		}
	}
</script>

<div class="flex flex-col items-center">
	<div class="my-2 flex flex-col items-center">
		<code class=" text-primary"> {`vector<int>v;`}</code>
		<code class=" text-primary flex gap-2"
			>Size:<span class="text-sky-600 dark:text-cyan-400">{nums.length || ''}</span>
			<Separator orientation="vertical" /> v.front():
			<span class="text-sky-600 dark:text-cyan-400">{nums[0].num || ''}</span>
			<Separator orientation="vertical" /> v.back():
			<span class="text-sky-600 dark:text-cyan-400">{nums[nums.length - 1].num || ''}</span>
		</code>
	</div>
	<div class="flex items-center">
		<div class="flex">
			{#each nums as item (item.id)}
				<div
					in:fly={{ x: 20 }}
					out:fly={{ x: 20 }}
					animate:flip={{ duration: 900, easing: quintOut }}
					class="small_box first:rounded-l-md last:rounded-r-md last:bg-green-400/30 dark:last:bg-green-900/20 dark:last:text-green-500 last:text-green-600 border border-primary p-2 px-4"
				>
					{item.num}
				</div>
			{:else}
				Empty Nums
			{/each}
		</div>
	</div>
	<div class="flex gap-4 mt-4 flex-wrap items-center justify-center md:flex-row">
		<Button
			size="sm"
			on:click={() => {
				nums = [...nums, { num: Math.floor(Math.random() * 50), id: crypto.randomUUID() }];
			}}
			disabled={disablePush}
		>
			<ArrowLeftToLine size="15" strokeWidth="1.8" class="mr-1.5" />
			v.push_back()</Button
		>
		<Button
			disabled={disablePop}
			size="sm"
			on:click={() => {
				nums.pop();
				nums = nums;
			}}
		>
			v.pop_back() <ArrowRightToLine size="15" strokeWidth="1.8" class="ml-1.5" /></Button
		>
		<Button
			disabled={disablePop}
			size="sm"
			on:click={() => {
				nums.reverse();
				nums = nums;
			}}
		>
			Reverse <ArrowRightLeft size="15" strokeWidth="1.8" class="ml-1.5" /></Button
		>
		<Button
			disabled={disablePop}
			size="sm"
			on:click={() => {
				nums.sort((a, b) => {
					return a.num - b.num;
				});
				console.log(nums);
				nums = nums;
			}}
		>
			Sort <ArrowDown01 size="15" strokeWidth="1.8" class="ml-1.5" /></Button
		>
	</div>
</div>
