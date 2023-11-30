<script>
	export let tag = 'easy';
</script>

{#if tag === 'easy'}
	<span
		class="inline-flex items-center rounded-md bg-green-100 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 dark:text-green-400 ring-1 ring-inset ring-green-500 dark:ring-green-500/20"
		>{tag}</span
	>
{:else if tag === 'medium'}
	<span
		class="inline-flex items-center rounded-md bg-yellow-100 dark:bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 dark:text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:ring-yellow-400/20"
		>{tag}</span
	>
{:else}
	<span
		class="inline-flex items-center rounded-md bg-red-100 dark:bg-red-400/10 px-2 py-1 text-xs font-medium text-red-500 dark:text-red-400 ring-1 ring-inset ring-red-400 dark:ring-red-400/20"
		>{tag}</span
	>
{/if}
