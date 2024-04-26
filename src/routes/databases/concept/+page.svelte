<script>
	import ConceptFlow from '$lib/backend/concept/ConceptFlow.svelte';
	import { SvelteFlowProvider } from '@xyflow/svelte';
</script>

<svelte:head>
	<title>Codeflow - Backend Tools</title>
	<meta name="description" content="Codeflow - Backend Tools" />
</svelte:head>
<SvelteFlowProvider>
	<ConceptFlow />
</SvelteFlowProvider>
