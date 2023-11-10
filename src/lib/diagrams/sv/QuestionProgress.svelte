<script lang="ts">
	import Progress from '$ui/ui/progress/progress.svelte';
	export let question = {
		max: 100,
		min: 10,
		value: 0
	};
	
</script>

<div class="flex justify-center py-4">
	<Progress value={question.value} max={question.max} class="w-[60%] " />
</div>
