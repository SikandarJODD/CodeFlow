<script>
	import Button from '$ui/button/button.svelte';
	import { fly, slide } from 'svelte/transition';

	let screenWidth = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class="flex flex-col justify-center items-center h-[84vh] md:h-[90vh] relative px-2 md:px-0">
	<div class="text-center">
		<h1 class="font-semibold head_title text-3xl md:text-5xl">
			<!-- {#key textCode}
				<span in:blur>{textCode}</span>
			{/key} -->
			Coding Guide.
		</h1>
		<p class="mt-1.5 md:mt-3 text-lg text-primary/70 head_para">
			Simple guide to Web Development & Competitive Coding with Interview Questions
		</p>
	</div>
	{#if screenWidth > 768}
		<div class="parent mt-5">
			<a
				in:slide={{ duration: 300 }}
				href="/roadmap/stl"
				class="div1 box border bg-orange-400/30 border-orange-500 dark:border-sky-400 dark:bg-sky-800/20"
			>
				DSA
			</a>
			<a
				in:fly={{ y: 100, duration: 300, delay: 500 }}
				href="/databases/d"
				class="div2 box border dark:bg-orange-800/20 dark:border-orange-500 border-sky-600 bg-sky-600/30"
			>
				Databases
			</a>
			<a
				in:fly={{ x: 100, duration: 300, delay: 1000 }}
				href="/fullstack"
				class="div3 box border bg-emerald-500/30 dark:bg-emerald-800/20 border-emerald-500 bg"
			>
				Full-stack</a
			>
			<div
				class="div4 box border bg-gray-100 border-gray-600 dark:border-cyan-800/50 dark:bg-cyan-800/10"
			/>
			<div
				class="div5 box border bg-gray-100 border-gray-600 dark:border-gray-800 dark:bg-gray-800/10"
			/>
			<div
				class="div6 box border bg-gray-100 border-gray-600 dark:border-gray-800 dark:bg-gray-800/10"
			/>
			<div
				class="div7 box border bg-gray-100 border-gray-600 dark:border-cyan-800/50 dark:bg-cyan-800/10"
			/>
		</div>
	{:else}
		<div class="flex flex-wrap gap-2 mt-5 justify-center">
			<Button size="lg" href="/fullstack/frameworks">Frameworks</Button>
			<Button size="lg" href="/fullstack/concepts">Concepts</Button>
			<Button size="lg" href="/fullstack/interview">Interview</Button>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
	.head_title {
		font-family: 'Sora', sans-serif;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: normal;
	}
	.head_para {
		font-family: 'Sora', sans-serif;
	}
	/* .parent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
		height: 150px;
		width: 320px;
	}
	.div2 {
		height: 150px;
		width: 320px;
		grid-area: 2 / 1 / 3 / 2;
	}
	.div3 {
		height: 310px;
		width: 320px;
		grid-area: 1 / 2 / 3 / 3;
	} */
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px;
		border-radius: 15px;
		font-size: 2rem;
	}
	.parent {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		font-family: 'Poppins', sans-serif;
	}

	.div1 {
		grid-area: 1 / 2 / 4 / 4;
	}
	.div2 {
		grid-area: 1 / 4 / 7 / 6;
	}
	.div3 {
		grid-area: 4 / 2 / 7 / 4;
	}
	.div4 {
		grid-area: 1 / 6 / 5 / 7;
	}
	.div5 {
		grid-area: 5 / 6 / 7 / 7;
	}
	.div6 {
		grid-area: 1 / 1 / 3 / 2;
	}
	.div7 {
		grid-area: 3 / 1 / 7 / 2;
	}
</style>
