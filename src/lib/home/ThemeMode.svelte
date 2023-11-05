<script lang="ts">
	import { Sun, Moon } from 'radix-icons-svelte';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$ui/button';
</script>
<Button on:click={toggleMode} variant="outline" size="icon">
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-100"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-150"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
