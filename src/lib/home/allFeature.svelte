<script>
	import { Code } from 'radix-icons-svelte';
	import FeatureCode from './featureCode.svelte';
	import {
		FileQuestion,
		Flame,
		LineChart,
		MailCheck,
		MonitorSmartphone,
		MousePointerSquare,
		SunMedium
	} from 'lucide-svelte';
	let features = [
		{
			name: 'Clean UI',
			desc: 'Simple and Easy to Use',
			sub: [
				{
					icon: MousePointerSquare,
					title: 'Draggable Charts',
					desc: 'Convenient Roadmap for Programmers'
				},
				{
					icon: MonitorSmartphone,
					title: 'Responsive UI',
					desc: 'Effective theming for Mobile Devices'
				}
			]
		},
		{
			name: 'Leetcode Questions',
			desc: '100+ Leetcode Questions to Solve',
			sub: [
				{
					icon: FileQuestion,
					title: 'Topic Wise Question',
					desc: 'Dynamic Programming, Linked List,Graphs...'
				},
				{
					icon: LineChart,
					title: 'Begineer to Advance',
					desc: 'Easy, Medium, Hard Questions'
				}
			]
		},
		{
			name: 'Theme and Progress',
			desc: 'Grow Your Progress By Solving',
			sub: [
				{
					icon: SunMedium,
					title: 'Light and Dark Theme',
					desc: 'Light and Dark theme for Users'
				},
				{
					icon: Flame,
					title: 'Responsive Progress',
					desc: 'Real time Progress Records'
				}
			]
		}
	];
</script>

<div class="mx-3 mt-20 md:mt-20 md:mx-20 flex justify-center flex-col items-center">
	<h1 class="text-3xl lg:text-5xl font-bold">Features</h1>
	<div class="flex flex-wrap gap-5 md:gap-x-10 my-4 lg:my-10 justify-center">
		{#each features as { name, desc, sub }}
			<FeatureCode {name} {desc} {sub} />
		{/each}
	</div>
</div>
