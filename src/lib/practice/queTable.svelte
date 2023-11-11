<script lang="ts">
	import { webdata, qdata } from '$lib';
	import * as Card from '$ui/card';
	import * as Table from '$ui/table/';
	let queData = $qdata;

	import { DataHandler, Datatable, Th, check } from '@vincjo/datatables';
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	import Input from '$ui/ui/input/input.svelte';
	import Button from '$ui/button/button.svelte';
	import { Search, SearchCodeIcon } from 'lucide-svelte';
	import { split } from 'postcss/lib/list';
	import Badge from '$ui/badge/badge.svelte';

	let handler = new DataHandler(queData, { rowsPerPage: 31 });
	let rows = handler.getRows();
	let value1 = '';
	let value2 = '';

	let clear = () => {
		handler.clearFilters();
	};
	handler.on('clearFilters', () => {
		value1 = '';
	});
	/*
	webdata
	{
                    id: 1,
                    status: false,
                    problem: 'Contains Duplicate',
                    link: 'https://leetcode.com/problems/contains-duplicate/',
                    difficulty: 'easy',
                    code: 'C++',
                    isblind: true
                },
	*/
	let changeStatus = (i: any) => {
		// $qdata[i].status = $qdata[i].status;
		$webdata.map((n) => {
			n.problems.filter((k) => {
				if (k.id === i) {
					k.status = !k.status;
					return k;
				}
				return n;
			});
		});
		// $qdata = $qdata;
	};
</script>

<Card.Root>
	<Card.Content class="py-2 ">
		<div class="flex items-center gap-x-4 mt-2">
			<Input
				type="text"
				class="w-64"
				placeholder="Question Name, Number"
				bind:value={value1}
				on:input={() => {
					handler.search(value1, ['id', 'problem', 'tags']);
				}}
			/>
			<Button
				size="sm"
				on:click={() => {
					handler.clearSearch();
					value1 = '';
				}}
			>
				Clear</Button
			>
		</div>
		<div>
			<Datatable {handler} search={false} rowsPerPage={false} rowCount={true} pagination={true}>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Th {handler} orderBy="id"><Table.Head>Id</Table.Head></Th>
							<Th {handler} orderBy="status"><Table.Head>Status</Table.Head></Th>
							<Th {handler} orderBy="problem"><Table.Head>Problem</Table.Head></Th>
							<Th {handler} orderBy=""><Table.Head>Code</Table.Head></Th>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each $rows as row, i (i)}
							<Table.Row
								class="h-10 hover:bg-gray-100 hover:dark:bg-gray-900 {row.status
									? 'dark:bg-cyan-800/30 bg-green-400/60'
									: ''}"
							>
								<Table.Cell class="pl-8  w-20">{row.id}</Table.Cell>
								<Table.Cell class="pl-10  w-20">
									<Checkbox bind:checked={row.status} on:click={() => changeStatus(row.id)} />
									<!-- <QueStatus i={row.id} status={row.status} /> -->
								</Table.Cell>
								<Table.Cell
									class="capitalize md:font-medium text-md md:pl-7 flex items-center gap-x-6 justify-between"
								>
									<div>
										<a href={row.link} target="_blank">{row.problem}</a>
									</div>
									<div class="flex gap-x-1.5 mt-1">
										{#each String(row.tags).split(',') as item}
											<Badge variant="outline">{item}</Badge>
										{/each}
									</div>
								</Table.Cell>
								<Table.Cell class="pl-8">{row.code}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Datatable>
		</div>
	</Card.Content>
</Card.Root>
