<script lang="ts">
	import { qdata, webdata } from '$lib';
	import * as Card from '$ui/card';
	import * as Table from '$ui/table/';

	import { DataHandler, Datatable, Th } from '@vincjo/datatables';
	import Input from '$ui/ui/input/input.svelte';
	import Button from '$ui/button/button.svelte';
	import Badge from '$ui/badge/badge.svelte';
	import { fade, slide } from 'svelte/transition';
	import QueStatus from './queStatus.svelte';
	import { onMount } from 'svelte';
	import DiffBadge from '$lib/diagrams/sv/DiffBadge.svelte';

	export let handler = new DataHandler($qdata, { rowsPerPage: 31 });
	$: rows = handler.getRows();
	$: handler.setRows($qdata);
	let getDataQ = () => {
		let cnt = localStorage.getItem('que') || null;
		let changeQ;
		if (cnt !== null) {
			changeQ = JSON.parse(cnt);
			webdata.set(changeQ);
			handler.setRows($qdata);
		}
	};
	onMount(() => {
		getDataQ();
	});
	let value1 = '';

	handler.on('clearFilters', () => {
		value1 = '';
	});
	let innerWidth = 0;
	let isTagsVisible = true;
	// let changetoArray = () => {
	// 	handler.filter('recursion', 'tags');
	// };
</script>

<svelte:window bind:innerWidth />

<Card.Root>
	<Card.Content class="py-2 ">
		<div class="flex items-center gap-x-4 gap-y-2 mt-2 flex-wrap">
			<Input
				type="text"
				class="w-full md:w-96 dark:border-sky-400/80 border-primary"
				placeholder="Name, Tags - Array, String..."
				bind:value={value1}
				on:input={() => {
					handler.search(value1, ['id', 'problem', 'tags']);
				}}
			/>
			<div>
				<Button
					size="sm"
					on:click={() => {
						handler.clearSearch();
						value1 = '';
					}}
				>
					Clear</Button
				>
				<Button
					size="sm"
					on:click={() => {
						isTagsVisible = !isTagsVisible;
					}}
				>
					{isTagsVisible ? 'Remove' : 'Show'} Tags</Button
				>
				<!-- <Button size="sm" on:click={changetoArray}>Array</Button> -->
			</div>
		</div>
		<div>
			<Datatable {handler} search={false} rowsPerPage={false} rowCount={true} pagination={true}>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							{#if innerWidth > 600}
								<Th {handler} orderBy="id"><Table.Head>Id</Table.Head></Th>
								<Th {handler} orderBy="status"><Table.Head>Status</Table.Head></Th>
							{/if}
							<Th {handler} orderBy="problem"><Table.Head>Title</Table.Head></Th>
							<Th {handler} orderBy="difficulty"><Table.Head>Difficulty</Table.Head></Th>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#key $qdata}
							{#each $rows as row, i (row.id)}
								<Table.Row
									class="h-10  {row.status
										? 'dark:bg-cyan-800/30 bg-green-400/60 hover:bg-green-400/70'
										: ''}"
								>
									{#if innerWidth > 600}
										<Table.Cell class="pl-8  w-20">{row.id}</Table.Cell>
										<Table.Cell class="pl-10  w-20">
											<!-- <Checkbox bind:checked={row.status} on:click={() => changeStatus(row.id)} /> -->
											<QueStatus i={row.id} status={row.status} />
										</Table.Cell>
									{/if}
									<Table.Cell
										class="capitalize md:font-medium text-md md:pl-7 flex items-center gap-x-6 justify-between"
									>
										<div>
											<a href={row.link} target="_blank">{row.problem}</a>
										</div>
										{#if isTagsVisible}
											<div
												transition:fade={{ duration: 200 }}
												class="hidden md:flex gap-x-1.5 mt-1"
											>
												{#each String(row.tags).split(',').slice(0, 4) as item}
													<Badge variant="outline">{item}</Badge>
												{/each}
											</div>
										{/if}
									</Table.Cell>
									<Table.Cell class="pl-8 text-gray-700 cursor-progress text-center w-20">
										<DiffBadge difficulty={row.difficulty} />
									</Table.Cell>
								</Table.Row>
							{/each}
						{/key}
					</Table.Body>
				</Table.Root>
			</Datatable>
		</div>
	</Card.Content>
</Card.Root>
