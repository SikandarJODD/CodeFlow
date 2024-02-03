<script lang="ts">
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/github-dark-dimmed.min.css';
	export let allcodes = [
		{
			name: 'Initializing a Vector',
			code: 'cd'
		}
	];
	export let lang: string = 'cpp';
</script>

{#each allcodes as { code, name }}
	<li class="text-left px-1 mb-2">
		<div class="flex items-center justify-between">
			{name}
		</div>
		<CodeBlock rounded="rounded-sm" language={lang} {code} />
	</li>
{/each}
