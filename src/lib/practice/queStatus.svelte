<script lang="ts">
	import { webdata } from '$lib';
	export let status = false;
	let originalStatus = status;
	export let i = 0;
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	let changeStatus = (i: any) => {
		$webdata.map((n) => {
			n.problems.filter((k) => {
				if (k.id === i) {
					k.status = !k.status;
					return k;
				}
				return n;
			});
		});
		localStorage.setItem('que', JSON.stringify($webdata));
		$webdata = $webdata;
	};
</script>

<Checkbox bind:checked={originalStatus} on:click={() => changeStatus(i)} />
