<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import DiffBadge from './DiffBadge.svelte';
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	export let problems = [
		{
			id: 0,
			status: false,
			problem: 'Set matrix Zeros',
			link: 'https://leetcode.com/problems/set-matrix-zeroes/description/',
			difficulty: 'easy',
			code: 'C++'
		},
		{
			id: 1,
			status: false,
			problem: `Kadane's Algorithm`,
			link: 'https://leetcode.com/problems/maximum-subarray/description/',
			difficulty: 'easy',
			code: 'C++'
		},
		{
			id: 2,
			status: false,
			problem: `Sort an Array of 0's, 1's and 2's`,
			link: 'https://leetcode.com/problems/sort-colors/description/',
			difficulty: 'medium',
			code: 'C++'
		},
		{
			id: 3,
			status: false,
			problem: 'Stock Buy and Sell',
			link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/',
			difficulty: 'hard',
			code: 'C++'
		}
	];
	export let question = {
		min: 0,
		max: problems.length,
		value: problems.filter((n: any) => n.status).length
	};
	import { webdata } from '$lib';
	import QuestionProgress from './QuestionProgress.svelte';

	let changeStatus = (id: any) => {
		// console.log(id, 'ID');
		let res = $webdata.map((k) =>
			k.problems.filter((que) => {
				if (que.id === id) {
					// console.log(que, 'QUE');
					que.status = !que.status;
					return que;
				}
				return k;
			})
		);
		$webdata = $webdata;
	};
	
</script>

<div>
	<QuestionProgress {question} />
</div>
<Table.Root>
	<!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Status</Table.Head>
			<Table.Head class="w-3/5">Problem</Table.Head>
			<Table.Head>Difficulty</Table.Head>
			<Table.Head class="text-right">Code</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each problems as code, i (i)}
			<Table.Row
				class={code.status
					? 'bg-green-400/80 hover:bg-green-400 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30'
					: ''}
			>
				<Table.Cell class="font-medium">
					<Checkbox id="terms" bind:checked={code.status} on:click={() => changeStatus(code.id)} />
				</Table.Cell>
				<Table.Cell>
					<a href={code.link} target="_blank" class="capitalize font-semibold text-primary"
						>{code.problem}</a
					>
				</Table.Cell>
				<Table.Cell>
					<DiffBadge difficulty={code.difficulty} />
				</Table.Cell>
				<Table.Cell class="text-right">{code.code}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

