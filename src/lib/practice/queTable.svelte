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
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	import { CheckSquare2, Gauge } from 'lucide-svelte';

	export let handler = new DataHandler($qdata, { rowsPerPage: 31 });
	$: rows = handler.getRows();
	$: handler.setRows($qdata);
	let getDataQ = () => {
		let cnt = localStorage.getItem('ans') || null;
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
				{#if innerWidth > 600}
					<Button
						size="sm"
						on:click={() => {
							isTagsVisible = !isTagsVisible;
						}}
					>
						{isTagsVisible ? 'Remove' : 'Show'} Tags</Button
					>
				{/if}
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
							{/if}
							<Th
								{handler}
								orderBy="status"
								style="max-width:10px; width:10px !important; background:red !important;"
								><Table.Head style="padding:0; margin:0;">
									{#if innerWidth > 600}
										Status
									{:else}
										<CheckSquare2 strokeWidth="1.1" size="19" />
									{/if}
								</Table.Head></Th
							>
							<Th {handler} orderBy="problem"><Table.Head>Title</Table.Head></Th>
							<Th {handler} orderBy="difficulty"
								><Table.Head style="padding:0; margin:0;">
									{#if innerWidth > 600}
										Level
									{:else}
										<Gauge strokeWidth="1.1" size="19" />
									{/if}
								</Table.Head></Th
							>
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
										<Table.Cell class="pl-8  w-20">{i + 1}</Table.Cell>
									{/if}
									<Table.Cell class="md:pl-10 text-center w-20" style="padding:0 14px 0 0px;">
										<!-- <Checkbox bind:checked={row.status} on:click={() => changeStatus(row.id)} /> -->
										<QueStatus i={row.id} status={row.status} />
									</Table.Cell>
									<Table.Cell
										class="capitalize md:font-medium text-md md:pl-7 flex items-center gap-x-6 justify-between group w-40 md:w-full"
									>
										<div>
											<a href={row.link} target="_blank"
												>{row.problem}
												<Badge
													variant="outline"
													class="hidden md:inline-block opacity-0 ml-1 group-hover:opacity-90 text-[10px] dark:bg-gray-900 transition-all duration-200 dark:hover:bg-gray-600"
													>#{row.id}</Badge
												></a
											>
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
									<Table.Cell class="md:pl-8 text-gray-700 cursor-progress text-center w-20">
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
