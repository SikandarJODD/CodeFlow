<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];

	const { label, icon, link } = data;
	export let context = 'Simple';
</script>

<div
	class="label dark:text-gray-950 border border-gray-900 dark:border-gray-800 bg-gray-900 text-white rounded-md text-sm px-4 py-2 dark:bg-white w-32 flex justify-center"
>
	<svelte:component this={icon} size="20" strokeWidth="1.3" class="mr-2" />
	<a href={link ? link : '/'}> {label}</a>
</div>
<Handle type="source" position={Position.Bottom} />

<style>
	.label {
		display: flex;
		align-items: center;
	}
</style>
