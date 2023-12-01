<script>
	import { copy } from 'svelte-copy';
	import Button from '$ui/button/button.svelte';
	import { CheckCircle, Copy } from 'lucide-svelte';
	export let code = '';
	let isclicked = false;
</script>

<button
	use:copy={code}
	size="sm"
	variant="secondary"
	class="outline-none border-none"
	on:click={() => {
		isclicked = true;
		setTimeout(() => {
			isclicked = false;
		}, 1200);
	}}
>
	{#if isclicked}
		<CheckCircle color="#59FF5F" size="16" strokeWidth="1.3" />
	{:else}
		<Copy size="14" strokeWidth="1.3" />
	{/if}
</button>
