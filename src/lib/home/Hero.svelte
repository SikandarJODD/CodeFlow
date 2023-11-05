<script>
	import Button from '$ui/button/button.svelte';
	import { DollarSign, GitCompare, GitPullRequest } from 'lucide-svelte';
	import FlowDiagram from './FlowDiagram.svelte';
</script>

<div class="flex flex-col md:flex-row w-full justify-around items-center h-[90vh] gap-10 md:gap-0">
	<div
		class="flex flex-col text-center md:text-left gap-4 w-full lg:w-1/3 h-96 md:h-full justify-center lg:pb-24"
	>
		<h1 class="text-4xl font-bold lg:text-3xl xl:text-6xl">CodeFlow</h1>
		<p
			class="sub_head text-xl lg:text-xl xl:text-3xl font-semibold text-gray-900 dark:text-gray-500"
		>
			Learn to Think and Code Better.
		</p>
		<div class="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
			<Button size="lg">
				<GitPullRequest strokeWidth="1.3" size="22" class="mr-1" />
				Roadmap</Button
			>
			<Button variant="outline" size="lg">
				<GitCompare strokeWidth="1.3" size="22" class="mr-1" />
				Svelte</Button
			>
		</div>
	</div>
	<div class="w-full lg:w-1/3 h-full lg:h-4/5 mb-5">
		<FlowDiagram />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap');
	.sub_head {
		font-family: 'Nunito Sans', sans-serif;
	}
</style>
