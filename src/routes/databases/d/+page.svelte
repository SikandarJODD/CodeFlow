<script>
	import DatabasesFlow from '$lib/backend/databases/DatabasesFlow.svelte';
	import { SvelteFlowProvider } from '@xyflow/svelte';
</script>

<svelte:head>
	<title>Codeflow - FullStack Frameworks</title>
	<meta name="description" content="Codeflow - Fullstack Frameworks" />
</svelte:head>
<SvelteFlowProvider>
	<DatabasesFlow />
</SvelteFlowProvider>
