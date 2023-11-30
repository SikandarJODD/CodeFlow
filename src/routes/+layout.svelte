<script>
	import { fly, scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	$: routeID = $page.route.id?.split('/');
	// $: console.log(routeID);
</script>

<ModeWatcher />
<Navbar />
{#if routeID[1] === 'c'}
	<div in:fly={{ duration: 300, x: -100 }}>
		<slot />
	</div>
{:else}
	{#key routeID}
		<div in:fly={{ duration: 300, x: -100 }}>
			<slot />
		</div>
	{/key}
{/if}
