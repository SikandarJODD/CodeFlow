<script lang="ts">
	import Button from '$ui/button/button.svelte';
	import { ArrowDown, ArrowUp } from 'lucide-svelte';

	import { fly } from 'svelte/transition';
	let outsideFruits = ['🍓 strawberry', '🍎 apple', '🍓 strawberry', '🥭 mango', '🍇 grapes'];
	let i = 0;
	let fruits: any = {
		'🍎 apple': 1
	};
	let removeFruit = (newfruit: string) => {
		let isFound = false;
		for (let key in fruits) {
			if (key === newfruit) {
				isFound = true;
				fruits[key] -= 1;
				if (fruits[key] < 0) {
					delete fruits[key];
				}
			}
		}

		i++;
		if (i >= outsideFruits.length) {
			i = 0;
		}
	};
	let addFruits = (newfruit: string) => {
		let isFound = false;
		for (let key in fruits) {
			if (key === newfruit) {
				isFound = true;
				fruits[key] += 1;
			}
		}
		if (isFound === false) {
			fruits[newfruit] = 1;
		}
		i++;
		if (i >= outsideFruits.length) {
			i = 0;
		}
	};
	$: calAllFruits = () => {
		let mint = new Array();
		for (let key in fruits) {
			if (fruits.hasOwnProperty(key)) {
				mint.push({ name: key, value: fruits[key] });
			}
		}
		return mint;
	};
	$: allfruits = calAllFruits();
	$: isApple = allfruits.filter((n) => n.name === '🍎 apple').length > 0 ? false : true;
	$: isMango = allfruits.filter((n) => n.name === '🥭 mango').length > 0 ? false : true;
	$: isGrape = allfruits.filter((n) => n.name === '🍇 grapes').length > 0 ? false : true;
</script>

<div class="flex flex-col items-center">
	<div class="my-2 flex flex-col items-center">
		<code class=" text-primary"> {`map<string,int>v;`}</code>
	</div>
	<div class="flex items-center">
		<div class="flex flex-col">
			{#each allfruits as item (item.name)}
				<div
					in:fly={{ y: 20 }}
					out:fly={{ y: -20 }}
					class="small_box {allfruits.length > 1
						? 'border-t border-l border-r border-primary last:border-b'
						: 'border border-primary'} dark:even:bg-gray-800/60 last:rounded-b-md first:rounded-t-md p-2 px-4"
				>
					{item.name} :
					<span class="font-mono text-sky-600 dark:text-sky-400 text-[19px]">{item.value}</span>
				</div>
			{:else}
				Empty Map
			{/each}
		</div>
	</div>
	<div class="flex gap-4 mt-4 flex-wrap items-center justify-center md:flex-row">
		<Button
			size="sm"
			variant="outline"
			class="border border-primary/70"
			on:click={() => addFruits('🍎 apple')}
		>
			<ArrowUp size="18" strokeWidth="1.4" class="mr-1" /> 🍎</Button
		>
		<Button
			size="sm"
			variant="outline"
			class="border border-primary/70"
			on:click={() => addFruits('🥭 mango')}
			><ArrowUp size="18" strokeWidth="1.4" class="mr-1" /> 🥭</Button
		>
		<Button
			size="sm"
			variant="outline"
			class="border border-primary/70"
			on:click={() => addFruits('🍇 grapes')}
			><ArrowUp size="18" strokeWidth="1.4" class="mr-1" /> 🍇</Button
		>
		<Button
			size="sm"
			variant="outline"
			class="border border-primary/70"
			on:click={() => addFruits(outsideFruits[i])}
		>
			<ArrowUp size="18" strokeWidth="1.4" class="mr-1" />Add Random</Button
		>
	</div>
	<div class="flex gap-4 mt-4 flex-wrap items-center justify-center md:flex-row">
		<Button
			size="sm"
			disabled={isApple}
			variant="outline"
			class="border border-primary/70"
			on:click={() => removeFruit('🍎 apple')}
			><ArrowDown size="18" strokeWidth="1.4" class="mr-1" /> 🍎</Button
		>
		<Button
			size="sm"
			disabled={isMango}
			variant="outline"
			class="border border-primary/70"
			on:click={() => removeFruit('🥭 mango')}
			><ArrowDown size="18" strokeWidth="1.4" class="mr-1" /> 🥭</Button
		>
		<Button
			size="sm"
			disabled={isGrape}
			variant="outline"
			class="border border-primary/70"
			on:click={() => removeFruit('🍇 grapes')}
		>
			<ArrowDown size="18" strokeWidth="1.4" class="mr-1" /> 🍇</Button
		>
		<Button
			size="sm"
			variant="outline"
			class="border border-primary/70"
			on:click={() => removeFruit(outsideFruits[i])}
		>
			<ArrowDown size="18" strokeWidth="1.4" class="mr-1" />Remove Random</Button
		>
	</div>
</div>
