<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let isConnectable: $$Props['isConnectable'];

	const { label, icon } = data;
	export let context = 'Simple';
</script>

<Handle type="target" position={Position.Top} />
<div
	class="label dark:text-gray-900 border border-gray-900 dark:border-gray-800 bg-gray-900 text-white rounded-md text-sm px-4 py-2 dark:bg-white"
>
	<svelte:component this={icon} size="20" strokeWidth="1.3" class="mr-2" />
	<a href="/">{label}</a>
</div>

<style>
	.label {
		display: flex;
		align-items: center;
	}
</style>
