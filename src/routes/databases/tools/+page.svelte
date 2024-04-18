<script>
	import ToolsFrame from '$lib/backend/tools/ToolsFrame.svelte';
	import { SvelteFlowProvider } from '@xyflow/svelte';
</script>

<svelte:head>
	<title>Codeflow - Backend Tools</title>
	<meta name="description" content="Codeflow - Backend Tools" />
</svelte:head>
<SvelteFlowProvider>
	<ToolsFrame />
</SvelteFlowProvider>
