<script>
	import Button from '$ui/button/button.svelte';

	let screenWidth = 0;
	$: console.log(screenWidth, 'screen width');
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class="flex flex-col justify-center items-center h-[84vh] md:h-[90vh] relative px-2 md:px-0">
	<div class="text-center">
		<h1 class="font-semibold head_title text-3xl md:text-5xl">Frontend Guide.</h1>
		<p class="mt-1.5 text-lg text-primary/70 head_para">
			Simple guide to Frontend Development with Interview Questions
		</p>
	</div>
	{#if screenWidth > 768}
		<div class="parent mt-5">
			<a
				href="/frontend/frameworks"
				class="div1 box border bg-orange-400/30 border-orange-500 dark:border-sky-400 dark:bg-sky-800/20"
			>
				Frameworks
			</a>
			<a
				href="/frontend/concepts"
				class="div2 box border dark:bg-orange-800/20 dark:border-orange-500 border-sky-600 bg-sky-600/30"
			>
				Concepts
			</a>
			<a
				href="/frontend/interview"
				class="div3 box border bg-emerald-500/30 dark:bg-emerald-800/20 border-emerald-500 bg"
			>
				Interview</a
			>
		</div>
	{:else}
		<div class="flex flex-wrap gap-2 mt-5 justify-center">
			<Button size="lg" href="/frontend/frameworks">Frameworks</Button>
			<Button size="lg" href="/frontend/concepts">Concepts</Button>
			<Button size="lg" href="/frontend/interview">Interview</Button>
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
	.parent {
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
	}
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px;
		border-radius: 15px;
		font-size: 2rem;
	}
</style>
