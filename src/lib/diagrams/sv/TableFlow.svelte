<script>
	import * as Table from '$lib/components/ui/table';
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	import Badge from '$ui/badge/badge.svelte';
	import DiffBadge from './DiffBadge.svelte';
	export let problems = [
		{
			status: false,
			problem: 'Set matrix Zeros',
			link: 'https://leetcode.com/problems/set-matrix-zeroes/description/',
			difficulty: 'easy',
			code: 'C++'
		},
		{
			status: false,
			problem: `Kadane's Algorithm`,
			link: 'https://leetcode.com/problems/maximum-subarray/description/',
			difficulty: 'easy',
			code: 'C++'
		},
		{
			status: false,
			problem: `Sort an Array of 0's, 1's and 2's`,
			link: 'https://leetcode.com/problems/sort-colors/description/',
			difficulty: 'medium',
			code: 'C++'
		},
		{
			status: false,
			problem: 'Stock Buy and Sell',
			link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/',
			difficulty: 'hard',
			code: 'C++'
		}
	];
</script>

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
			<Table.Row>
				<Table.Cell class="font-medium">
					<Checkbox id="terms" bind:checked={code.status} />
				</Table.Cell>
				<Table.Cell>
					<a href={code.link} target="_blank">{code.problem}</a>
				</Table.Cell>
				<Table.Cell>
					<DiffBadge difficulty={code.difficulty} />
				</Table.Cell>
				<Table.Cell class="text-right">{code.code}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
