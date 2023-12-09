<script>
	import Button from '$ui/button/button.svelte';
	import { Code2, DatabaseZap, GitPullRequest } from 'lucide-svelte';
	import FlowDiagram from './FlowDiagram.svelte';
</script>

<div
	class="flex flex-col md:flex-row w-full justify-around items-center h-full lg:h-[90vh] gap-10 md:gap-0 bg-sky-100 dark:bg-gray-950"
>
	<div
		class="flex flex-col text-center md:text-left w-full lg:w-5/12 h-80 md:h-full justify-center lg:pb-24 mt-10 px-4 md:px-0 md:mt-0"
	>
		<div
			class="gap-4 flex flex-col bg-sky-700/10 lg:border border-gray-500 dark:border-gray-300/50 rounded-2xl lg:rounded-xl dark:bg-gradient-to-r dark:from-gray-950/10 dark:to-gray-900/90 dark:shadow-lg px-8 py-8 w-full group"
		>
			<h1
				class="text-4xl font-bold lg:text-3xl xl:text-6xl text-left drop-shadow-md transition-all duration-150"
			>
				CodeFlow.
			</h1>
			<!-- <p class="lg:pl-1 text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-200 text-left">
				Learn to Think and Code Better.
			</p> -->
			<p class="dark:text-gray-600 text-lg">
				Introducing new things on codeflow <a
					href="/c/snippets"
					class=" text-primary hover:underline transition-all duration-200 underline-offset-2"
					>Snippets</a
				>
				and
				<a href="/roadmap/knapsack" class="text-primary hover:underline underline-offset-2"
					>0/1 Knapsack</a
				>
			</p>
			<div class="flex flex-wrap flex-col md:flex-row gap-3 mt-4 md:items-start">
				<Button size="lg" href="/roadmap/dsa">
					<GitPullRequest strokeWidth="1.3" size="22" class="mr-1" />
					Coding Roadmap</Button
				>

				<Button size="lg" href="/roadmap/stl">
					<DatabaseZap strokeWidth="1.3" size="22" class="mr-2" />
					Data Structures</Button
				>
				<Button size="lg" href="/practice">
					<Code2 strokeWidth="1.3" size="22" class="mr-2" />
					Practice Questions</Button
				>
			</div>
		</div>
	</div>
	<div class="w-full h-64 md:h-full lg:w-1/3 lg:h-4/5 md:mb-5">
		<FlowDiagram />
	</div>
</div>

<style>
</style>
