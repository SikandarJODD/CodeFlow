<script>
	import Badge from '$ui/badge/badge.svelte';
</script>

<div
	class="md:px-32 lg:w-2/3 md:mx-auto h-[100vh] flex flex-col items-center justify-center gap-10"
>
	<div>
		<h1 class="font-bold text-3xl md:text-5xl">Features</h1>
	</div>
	<div class="parent">
		<div
			class="div1 box bg-gray-100 dark:bg-transparent border border-primary/60 dark:hover:bg-gray-800/20 transition-all duration-200"
		>
			<div class="flex items-center justify-center">
				<div class="">
					<h1 class="text-2xl font-bold">Databases</h1>
					<div>
						<Badge>SQL</Badge>
						<Badge>NoSQL</Badge>
						<Badge>PostgresSQL</Badge>
					</div>
					<p class="text-sm mt-2">
						Detail information about databases and how to use them in your projects. various types
						of tools and services available for databases.
					</p>
				</div>
			</div>
		</div>
		<div
			class="div2 box bg-gray-100 dark:bg-transparent border border-primary/60 dark:hover:bg-gray-800/20 transition-all duration-200"
		>
			<div class="flex items-center justify-center">
				<div class="">
					<h1 class="text-2xl font-bold">Roadmap</h1>
					<div>
						<Badge>DSA</Badge>
						<Badge>Frontend</Badge>
						<Badge>Backend Tools</Badge>
					</div>
					<p class="text-sm mt-2">
						Roadmap guide to all programmers and developers to learn and grow in their career. It is
						a step by step guide to learn and grow in the field of programming.
					</p>
				</div>
			</div>
		</div>
		<div
			class="div3 box bg-sky-300/50 dark:bg-gradient-to-tr from-sky-700/20 dark:bg-transparent to-gray-950 border-blue-400 border"
		>
			<div class="flex items-center justify-center h-full">
				<h1 class="text-2xl font-bold">Full Stack</h1>
			</div>
		</div>
		<div
			class="div4 box bg-gray-100 dark:bg-transparent border border-primary/60 dark:hover:bg-gray-800/20 transition-all duration-200"
		>
			<div class="flex items-center justify-center h-full">
				<div class="">
					<h1 class="text-2xl font-bold">Concepts</h1>
					<div>
						<Badge>Interview</Badge>
						<Badge>Forms & API's</Badge>
						<Badge>Replication & Storage</Badge>
					</div>
					<p class="text-sm mt-2">
						Concepts related to programming and development. It includes topics like API's, Form
						Submission, DB Replication etc. Structured Information about Data Structures with
						Leetcode Questions
					</p>
				</div>
			</div>
		</div>
		<div
			class="div5 box bg-green-200 dark:bg-gradient-to-tl from-emerald-700/20 dark:bg-transparent to-gray-950 border-emerald-500 border"
		>
			<div class="flex items-center justify-center h-full">
				<h1 class="text-2xl font-bold">Patterns</h1>
			</div>
		</div>
	</div>
</div>

<style>
	@media only screen and (min-width: 620px) {
		.parent {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-column-gap: 15px;
			grid-row-gap: 15px;
		}

		.div1 {
			grid-area: 1 / 1 / 3 / 3;
		}
		.div2 {
			grid-area: 1 / 3 / 3 / 6;
		}
		.div3 {
			grid-area: 3 / 1 / 5 / 2;
		}
		.div4 {
			grid-area: 3 / 2 / 5 / 5;
		}
		.div5 {
			grid-area: 3 / 5 / 5 / 6;
		}
		.box {
			border-radius: 12px;
			padding: 10px;
			min-height: 180px;
			min-width: 160px;
		}
	}
	@media only screen and (max-width: 600px) {
		.parent {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(5, 1fr);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
		}

		.div1 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.div2 {
			grid-area: 2 / 1 / 3 / 2;
		}
		.div3 {
			grid-area: 3 / 1 / 4 / 2;
		}
		.div4 {
			grid-area: 4 / 1 / 5 / 2;
		}
		.div5 {
			grid-area: 5 / 1 / 6 / 2;
		}
	}
</style>
