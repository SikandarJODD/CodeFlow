<script lang="ts">
	import * as Card from '$ui/card';
	import { Terminal, ToggleRight } from 'lucide-svelte';
	import { Bell, Code, EyeNone, Person } from 'radix-icons-svelte';
	export let name = 'Coding';
	export let desc = 'Choose what you want to be notified about.';
	export let sub = [
		{
			icon: Code,
			title: 'Emails',
			desc: 'Email digest, mentions & all activity.'
		},
		{
			icon: Terminal,
			title: 'Emails',
			desc: 'Email digest, mentions & all activity.'
		},
		{
			icon: ToggleRight,
			title: 'Emails',
			desc: 'Email digest, mentions & all activity.'
		}
	];
</script>

<Card.Root class="w-full md:w-fit">
	<Card.Header class="pb-3">
		<Card.Title>{name}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-1 ">
		{#each sub as item}
			<div
				class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
			>
				<svelte:component this={item.icon}  size={22} strokeWidth="1.4" />
				<div class="space-y-1">
					<p class="text-sm font-medium leading-none">{item.title}</p>
					<p class="text-sm text-muted-foreground">{item.desc}</p>
				</div>
			</div>
		{/each}
	</Card.Content>
</Card.Root>
