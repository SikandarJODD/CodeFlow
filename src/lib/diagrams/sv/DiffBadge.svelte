<script>
	import Badge from '$ui/badge/badge.svelte';
	export let difficulty = '';
	let innerWidth = 0;
	$: console.log(innerWidth);
</script>

<svelte:window bind:innerWidth />
<Badge
	variant="outline"
	class="{difficulty === 'easy'
		? 'border-green-500 text-green-400 dark:bg-green-900/10 bg-green-50 '
		: difficulty === 'medium'
		? 'border-yellow-500 text-yellow-300 dark:bg-yellow-900/10 bg-yellow-50 dark:opacity-80 opacity-100'
		: 'border-red-500 text-red-400 dark:bg-red-900/10 bg-red-50  dark:opacity-80 opacity-100'} font-normal "
	>{difficulty}</Badge
>
