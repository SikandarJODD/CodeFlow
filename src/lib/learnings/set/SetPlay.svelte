<script>
	import Button from '$ui/button/button.svelte';
	import Separator from '$ui/ui/separator/separator.svelte';
	import { ArrowLeftToLine, Brackets } from 'lucide-svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let allnums = [3, 4, 2, 2, 5];
	let i = 1;
	let nums = [
		{
			num: 3,
			id: crypto.randomUUID()
		}
	];
	$: uniqueNums = [
		...new Set(
			nums.map((n) => {
				return n.num;
			})
		)
	].sort((a, b) => a - b);

	let disablePush = false;
	$: {
		if (nums.length === 5) {
			disablePush = true;
		} else {
			disablePush = false;
		}
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex gap-y-4 md:gap-x-7 flex-wrap items-center justify-center">
		<div class="w-full md:w-80">
			<div class="my-2 flex flex-col items-center justify-center">
				<code class=" text-primary"> {`vector<int>v;`}</code>
				<code class=" text-primary flex gap-2"
					>Size:<span class="text-sky-600 dark:text-cyan-400">{nums.length || '0'}</span>
				</code>
			</div>
			<div class="flex items-center justify-center">
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
						Empty Vector
					{/each}
				</div>
			</div>
		</div>
		<Separator orientation="vertical" class="hidden lg:flex" />
		<div class="bg-gray-100 dark:bg-gray-700/60 px-3 py-3 w-full md:w-72 rounded-md">
			<div class="my-2 flex flex-col items-center">
				<code class=" text-primary dark:text-sky-200">
					{`set<int>v;`} Size:
					<span class="text-sky-600 dark:text-cyan-400"> {uniqueNums.length || '0'}</span></code
				>
				<code class=" text-primary flex gap-2">
					<Separator orientation="vertical" /> Unique & Sorted Elements
				</code>
			</div>
			<div class="flex items-center justify-center">
				<div class="flex">
					{#each uniqueNums as item (item)}
						<div
							in:fly={{ x: 20 }}
							out:fly={{ x: 20 }}
							animate:flip={{ duration: 900, easing: quintOut }}
							class="small_box first:rounded-l-md last:rounded-r-md last:bg-green-400/30 dark:last:bg-green-900/20 dark:last:text-green-500 last:text-green-600 border border-primary p-2 px-4"
						>
							{item}
						</div>
					{:else}
						Empty Set
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="flex gap-4 mt-4 md:mt-10 flex-wrap items-center justify-center md:flex-row">
		<Button
			size="sm"
			on:click={() => {
				nums = [...nums, { num: allnums[i], id: crypto.randomUUID() }];
				i++;
			}}
			disabled={disablePush}
		>
			<ArrowLeftToLine size="15" strokeWidth="1.8" class="mr-1.5" />
			Insert</Button
		>
		<Button
			size="sm"
			on:click={() => {
				nums = [];
				i = 1;
			}}
		>
			<Brackets size="15" strokeWidth="1.8" class="mr-1.5" />
			Clear</Button
		>
	</div>
</div>
