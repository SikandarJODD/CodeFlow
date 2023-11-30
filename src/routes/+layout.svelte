<script>
	import { fly, scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	$: routeID = $page.route.id;
</script>

<ModeWatcher />
<Navbar />
{#key routeID}
	<div in:fly={{ duration: 300, x: -100 }}>
		<slot />
	</div>
{/key}
