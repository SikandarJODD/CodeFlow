<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import * as Sheet from '$ui/ui/sheet';
	type $$Props = NodeProps;

	export let data: $$Props['data'];

	const { label, icon, desc, style } = data;
</script>

<!-- class="h-2 w-6 rounded-sm bg-blue-400 dark:bg-white border border-primary dark:border-black dak:border-white" -->
<!-- <Handle type="target" position={Position.Top} class="" /> -->

<Sheet.Root>
	<Sheet.Trigger>
		<div
			{style}
			class=" md:min-w-[100px] label dark:text-gray-950 border border-gray-900 dark:border-gray-800 bg-gray-900 text-white rounded-md text-sm px-4 py-2 dark:bg-white max-w-full flex justify-center text-center"
		>
			<svelte:component this={icon} size="20" strokeWidth="1.3" class="mr-2" />
			{label}
		</div></Sheet.Trigger
	>
	<Sheet.Content side="codestl">
		<Sheet.Header>
			<Sheet.Title class="md:text-3xl md:font-bold">{label}</Sheet.Title>
		</Sheet.Header>
		<div class="my-4">
			<svelte:component this={desc} />
		</div>
	</Sheet.Content>
</Sheet.Root>
<Handle type="source" position={Position.Bottom} />

<style>
	.label {
		display: flex;
		align-items: center;
	}
</style>
