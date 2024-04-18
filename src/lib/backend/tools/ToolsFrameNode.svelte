<script lang="ts">
	import Button from '$ui/button/button.svelte';
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';
	import * as Sheet from '$ui/ui/sheet';
	import Separator from '$ui/ui/separator/separator.svelte';
	import { Cloud, File } from 'lucide-svelte';
	type $$Props = NodeProps;

	export let data: $$Props['data'];
	export let id: $$Props['data'];
	const { label, icon, src, desc, link, starter_code, docs, examples, playground } = data;
	export let isConnectable: $$Props['isConnectable'];
</script>

{#if label === 'Frontend Frameworks' || label === 'Full Stack Frameworks'}
	<div class="cloud gradient">
		<div>
			<Cloud size="16" />
		</div>
	</div>
	<div
		class="wrapper gradient outline-none border-none hover:scale-125 transition-all duration-150"
	>
		<div class="inner">
			<div class="body">
				{#if data.icon}
					<div class="icon">
						<img src={data.icon} alt={data.label} class="h-7 w-7 mr-1" />
					</div>
				{/if}
				<div>
					<div class="title">{data.label}</div>
					{#if data.short_desc}
						<div class="subline">{data.short_desc}</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div>
		<Sheet.Root>
			<Sheet.Trigger class="outline-none border-none hover:scale-105 transition-all duration-150">
				<div class="cloud gradient">
					<div>
						{#if data.label === 'Supabase'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-database-zap"
								><ellipse cx="12" cy="5" rx="9" ry="3" /><path
									d="M3 5V19A9 3 0 0 0 15 21.84"
								/><path d="M21 5V8" /><path d="M21 12L18 17H22L19 22" /><path
									d="M3 12A9 3 0 0 0 14.59 14.87"
								/></svg
							>
						{:else}
							<Cloud size="16" />
						{/if}
					</div>
				</div>
				<div class="wrapper gradient">
					<div class="inner">
						<div class="body">
							{#if data.icon}
								<div class="icon">
									<img src={data.icon} alt={data.label} class="h-7 w-7 mr-1" />
								</div>
							{/if}
							<div>
								<div class="title flex items-center">
									{#if data.src}
										<div class="icon">
											<svelte:component this={data.src} strokeWidth="1.6" size="22" />
										</div>
									{/if}
									{data.label}
								</div>
								{#if data.short_desc}
									<div class="subline">{data.short_desc}</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
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

<Handle type="target" position={Position.Left} />
<Handle type="source" position={Position.Right} />
