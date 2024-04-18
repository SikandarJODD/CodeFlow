<script>
	import MainFrame from '$lib/frontend/flowNodes/mainFrame.svelte';
	import { SvelteFlowProvider } from '@xyflow/svelte';
</script>

<svelte:head>
	<title>Codeflow - FullStack Frameworks</title>
	<meta name="description" content="Codeflow - Fullstack Frameworks" />
</svelte:head>
<SvelteFlowProvider>
	<MainFrame />
</SvelteFlowProvider>
