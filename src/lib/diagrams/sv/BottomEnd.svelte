<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import * as Sheet from '$ui/ui/sheet';
	import TableFlow from './TableFlow.svelte';
	import { webdata } from '$lib';
	type $$Props = NodeProps;

	export let data: $$Props['data'];

	const { label, icon, style, link, id } = data;
	// $: console.log(id, 'END');
	let problems= $webdata[id].problems;
</script>

<Handle type="target" position={Position.Top} />

<div>
	{#if link}
		<div
			class="label dark:text-gray-950 border border-gray-900 dark:border-gray-800 bg-gray-900 text-white rounded-md text-sm px-4 py-2 dark:bg-white w-32 flex justify-center"
		>
			<svelte:component this={icon} size="20" strokeWidth="1.3" class="mr-2" />
			<a href={link ? link : '/'}> {label}</a>
		</div>
	{:else}
		<Sheet.Root>
			<Sheet.Trigger class="outline-none border-none">
				<div
					{style}
					class="label dark:text-gray-950 border border-gray-900 dark:border-gray-800 bg-gray-900 text-white rounded-md text-sm px-4 py-2 dark:bg-white max-w-full flex justify-center"
				>
					<svelte:component this={icon} size="20" strokeWidth="1.3" class="mr-2" />
					{label}
				</div>
			</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title class="text-center">{label}</Sheet.Title>
					<Sheet.Description class="text-center"
						>List of Questions for Solving and <span class="text-primary"
							>Improving
						</span></Sheet.Description
					>
					<div class="mt-5">
						<TableFlow {problems} />
					</div>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	{/if}
</div>

<!-- <Handle type="source" position={Position.Bottom} /> -->

<style>
	.label {
		display: flex;
		align-items: center;
	}
</style>
