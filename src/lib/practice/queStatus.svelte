<script lang="ts">
	import { qdata, webdata } from '$lib';
	export let status = false;
	let originalStatus = status;
	export let i = 0;
	import Checkbox from '$ui/checkbox/checkbox.svelte';
	let changeStatus = (i: any) => {
		// $qdata[i].status = $qdata[i].status;
		$webdata.map((n) => {
			n.problems.filter((k) => {
				if (k.id === i) {
					k.status = !k.status;
					return k;
				}
				return n;
			});
		});
		// $qdata = $qdata;
	};
</script>

<Checkbox bind:checked={originalStatus} on:click={() => changeStatus(i)} />
