<script>
	import Badge from '$ui/badge/badge.svelte';
    export let difficulty='';
</script>

<Badge
	variant="outline"
	class={difficulty=== 'easy'
		? 'border-green-500 text-green-400'
		: difficulty === 'medium'
		? 'border-yellow-500 text-yellow-300'
		: 'border-red-500 text-red-400'}>{difficulty}</Badge
>
