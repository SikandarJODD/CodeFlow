<script lang="ts">
	import Button from '$ui/button/button.svelte';
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import * as Sheet from '$ui/ui/sheet';
	import Separator from '$ui/ui/separator/separator.svelte';
	import { split } from 'postcss/lib/list';
	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let id: $$Props['data'];
	const { label, icon, src, desc, link, starter_code, docs, examples, playground } = data;
	export let isConnectable: $$Props['isConnectable'];
	console.log(id);
</script>

<Handle type="target" position={Position.Top} {isConnectable} />
<Handle type="source" position={Position.Bottom} {isConnectable} />
{#if label === 'Frontend Frameworks' || label === 'Full Stack Frameworks'}
	<Button class="font-bold">
		{#if icon}
			<img src={icon} alt={label} class="h-5 w-5 mr-1" />
		{:else if data.src}
			<svelte:component this={src} strokeWidth="1.4" size="22" class="mr-1" />
		{/if}

		{label}</Button
	>
{:else}
	<div>
		<Sheet.Root>
			<Sheet.Trigger>
				<Button class="font-bold">
					{#if icon}
						<img src={icon} alt={label} class="h-5 w-5 mr-1" />
					{:else if data.src}
						<svelte:component this={src} strokeWidth="1.4" size="22" class="mr-1" />
					{/if}

					{label}</Button
				>
			</Sheet.Trigger>
			<Sheet.Content side="frame">
				<Sheet.Header>
					<a href={link} target="_blank">
						<Sheet.Title class="md:text-2xl flex items-center font-bold">
							{#if icon}
								<img src={icon} alt={label} class="h-7 w-7 mr-1" />
							{:else if data.src}
								<svelte:component this={src} strokeWidth="1.4" size="26" class="mr-1" />
							{/if}
							{label}</Sheet.Title
						>
					</a>
					<Separator />
					<Sheet.Description class="text-primary/80 md:text-lg">{desc}</Sheet.Description>
					<div class="starter_code">
						{#if starter_code}
							<h3 class="text-xl mb-2 font-bold">Installation</h3>
							<div class="dark:bg-gray-800 flex flex-col p-2 rounded-md">
								{#each starter_code.split('\n') as item}
									<code class="">
										{item}
									</code>
								{/each}
							</div>
						{/if}
					</div>
					<div class="important_Links">
						<h3 class="text-xl mt-2 font-bold">Important Links</h3>
						<div class="prose dark:prose-a:text-primary/90">
							<ul>
								<li>
									<a href={docs} target="_blank" class="">Docs</a>
								</li>

								{#if examples}
									<li>
										<a href={examples} target="_blank" class="">Examples</a>
									</li>
								{/if}
								{#if playground}
									<li>
										<a href={playground} target="_blank" class="">Playground</a>
									</li>
								{/if}
							</ul>
						</div>
					</div>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	</div>
	<!-- content here -->
{/if}
