<script lang="ts">
	import Button from '$ui/button/button.svelte';
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import { fade } from 'svelte/transition';

	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let isConnectable: $$Props['isConnectable'];
</script>

<Handle type="target" position={Position.Top} {isConnectable} />
<Handle type="source" position={Position.Bottom} {isConnectable} />
<Button class="font-bold">
	{#if data.icon}
		<img src={data.icon} alt={data.label} class="h-5 w-5 mr-1" />
	{/if}
	{data.label}</Button
>
