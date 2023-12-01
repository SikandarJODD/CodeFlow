<script>
	import { onMount } from 'svelte';
	import BtnCopy from './btnCopy.svelte';
	export let allcodes = [
		{
			name: 'Initializing a Vector',
			code: 'cd'
		}
	];
	let getcode = () => {
		allcodes.map((k, i) => {
			shiki
				.getHighlighter({
					theme: 'dracula-soft',
					langs: ['cpp']
				})
				.then((highlighter) => {
					const code = highlighter.codeToHtml(k.code, { lang: 'cpp' });
					document.getElementById(`code-${i}`).innerHTML = code;
				});
		});
	};
	onMount(() => {
		getcode();
	});
</script>

{#each allcodes as item, i}
	<li class="text-left">
		<div class="flex items-center justify-between">
			{item.name}
			<BtnCopy code={item.code} />
		</div>
		<div class="-my-4" id="code-{i}" />
	</li>
{/each}
