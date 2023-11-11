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

<!-- <table>
					<thead>
						<tr>
							<Th {handler} orderBy="first_name">First Name</Th>
							<Th {handler} orderBy="last_name">Last Name</Th>
							<Th {handler} orderBy="email">Email</Th>
						</tr>
						<tr>
							<ThFilter {handler} filterBy="first_name" />
							<ThFilter {handler} filterBy="last_name" />
							<ThFilter {handler} filterBy="email" />
						</tr>
					</thead>
					<tbody>
						{#each $rows as row}
							<tr>
								<td>{row.first_name}</td>
								<td>{row.last_name}</td>
								<td>{row.email}</td>
							</tr>
						{/each}
					</tbody>
				</table> -->

<Card.Root>
	<Card.Content class="py-2 ">
		<div class="flex items-center gap-x-4 mt-2">
			<Input
				type="text"
				class="w-64"
				placeholder="Question Name, Number"
				bind:value={value1}
				on:input={() => {
					handler.search(value1, ['id', 'problem']);
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
				<Table.Root class="border-separate border-spacing-0">
					<Table.Header>
						<Table.Row>
							<Th {handler} orderBy="id" class="w-20"><Table.Head>Id</Table.Head></Th>
							<Th {handler} orderBy="status" class="w-20"><Table.Head>Status</Table.Head></Th>
							<Th {handler} orderBy="problem" class="w-4/6"><Table.Head>Problem</Table.Head></Th>
							<Th {handler} orderBy=""><Table.Head>Code</Table.Head></Th>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each $rows as row, i (i)}
							<Table.Row class="h-10 hover:bg-gray-100 hover:dark:bg-gray-900 ">
								<Table.Cell class="text-center">{row.id}</Table.Cell>
								<Table.Cell class="text-center ">
									<Checkbox bind:checked={row.status} on:click={() => changeStatus(row.id)} />
									<!-- <QueStatus i={row.id} status={row.status} /> -->
								</Table.Cell>
								<Table.Cell class="capitalize  pl-8">
									<a href={row.link} target="_blank">{row.problem}</a>
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
