<script>
	import BackendGuide from '$lib/backend/BackendGuide.svelte';
	import ToolsCompare from '$lib/backend/databases/ToolsCompare.svelte';
	import ToolsTabs from '$lib/backend/databases/ToolsTabs.svelte';
</script>

<svelte:head>
	<title>Backend Guide</title>
	<meta name="description" content="Codeflow - Backend Guide" />
</svelte:head>

<BackendGuide />
<div class="px-2 md:px-0">
	<ToolsTabs />
	<ToolsCompare />
</div>
