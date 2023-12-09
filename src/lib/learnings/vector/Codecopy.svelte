<script>
	import { onMount } from 'svelte';
	import BtnCopy from './btnCopy.svelte';
	export let allcodes = [
		{
			name: 'Initializing a Vector',
			code: 'cd'
		}
	];
	export let lang = 'cpp';
	let getcode = () => {
		allcodes.map((k, i) => {
			shiki
				.getHighlighter({
					theme: 'dracula-soft',
					langs: ['cpp', 'json']
				})
				.then((highlighter) => {
					const code = highlighter.codeToHtml(k.code, { lang: lang || 'cpp' });
					document.getElementById(`code-${i}`).innerHTML = code;
				});
		});
	};
	onMount(() => {
		getcode();
	});
</script>

{#each allcodes as item, i}
	<li class="text-left px-1">
		<div class="flex items-center justify-between">
			{item.name}
			<BtnCopy code={item.code} />
		</div>
		<div class="-my-4" id="code-{i}" />
	</li>
{/each}
