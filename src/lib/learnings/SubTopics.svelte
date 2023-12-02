<script>
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
	import { Circle, Star } from 'radix-icons-svelte';
	import TopicBadge from './topicBadge.svelte';
	export let subtopic = {
		name: 'Vector STL',
		desc: 'Deep Dive into Vector C++ and STL Functions',
		lang: 'C++',
		isupdated: 'Nov 2023',
		tag: 'easy',
		link: '/'
	};
</script>

<a href={subtopic.link}>
	<Card.Root
		class="border-primary dark:border-primary-foreground dark:hover:border-primary/70  transition-all duration-150"
	>
		<Card.Header
			class="grid grid-cols-[1fr_50px] {subtopic.tag === 'easy' || subtopic.tag === 'hard'
				? 'md:grid-cols-[1fr_35px]'
				: 'md:grid-cols-[1fr_50px]'}  items-start gap-4 space-y-0"
		>
			<div class="space-y-1">
				<Card.Title>{subtopic.name}</Card.Title>
				<Card.Description>{subtopic.desc}</Card.Description>
			</div>
			<div class="flex items-center">
				<TopicBadge tag={subtopic.tag} />
			</div>
		</Card.Header>
		<Card.Content>
			<div class="flex space-x-4 text-sm text-muted-foreground">
				<div class="flex items-center">
					<Circle class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
					{subtopic.lang}
				</div>
				<div class="flex items-center">
					<Star class="mr-1 h-3 w-3" />
					20k
				</div>
				<div>Updated {subtopic.isupdated}</div>
			</div>
		</Card.Content>
	</Card.Root>
</a>
