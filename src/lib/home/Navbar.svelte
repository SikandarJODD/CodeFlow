<script>
	import { fly, slide } from 'svelte/transition';
	import ThemeMode from './ThemeMode.svelte';
	import {
		Binary,
		Code,
		Flame,
		GitPullRequest,
		Menu,
		Pi,
		X,
		FileCode2,
		DatabaseZap
	} from 'lucide-svelte';
	import CppLogo from '$lib/images/cpplogo.svg';
	import DSALogo from '$lib/images/dsa-stl.png';
	import KnapSackImage from '$lib/images/version-control.svg';
	import LearningImg from '$lib/images/learnings.svg';
	import CppImage from '$lib/images/cppimg.svg';

	let isFlyoutOpen = false;
	let isMobileFlyoutOpen = true;
	let isMenuBarOpen = false;
	let navData = {
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
		products: [
			// {
			// 	name: 'Svelte',
			// 	desc: 'Get a better understanding of Svelte',
			// 	mobileIcon: SvelteLogo,
			// 	link: '/roadmap/svelte'
			// },
			{
				name: 'Competitive Programming',
				desc: 'Simple Roadmap for Progress',
				mobileIcon: CppLogo,
				link: '/roadmap/dsa'
			},
			{
				name: 'Data Structures',
				desc: 'Roadmap of Data Structures in Detail',
				mobileIcon: DSALogo,
				link: '/roadmap/stl'
			},
			{
				name: '0/1 Knapsack',
				desc: 'Detail Understanding of 0/1 Knapsack Problem',
				mobileIcon: KnapSackImage,
				link: '/roadmap/knapsack'
			},
			{
				name: 'Learnings',
				desc: 'Detail Understanding of Data Structures',
				mobileIcon: LearningImg,
				link: '/c'
			},
			{
				name: 'Practice',
				desc: 'Solve Leetcode Topic wise Questions',
				mobileIcon: CppImage,
				link: '/practice'
			}
		],
		navs: [
			{
				name: 'Pattern',
				link: '/pattern',
				icon: Binary
			},
			{
				name: 'Full-Stack',
				link: '/fullstack',
				icon: FileCode2
			},
			{
				name: 'Databases',
				link: '/databases',
				icon: DatabaseZap
			}
		]
	};
</script>

<header class="bg-white dark:bg-gray-900 border-b dark:border-primary">
	<nav
		class="mx-auto flex max-w-7xl items-center px-6 py-8 justify-between h-16 lg:px-8"
		aria-label="Global"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 font-bold text-xl"> Codeflow. </a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
				on:click={() => (isMenuBarOpen = !isMenuBarOpen)}
			>
				<span class="sr-only">Open main menu</span>
				<Menu />
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<div class="relative">
				<button
					type="button"
					class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none outline-none dark:text-white"
					aria-expanded="false"
					on:mouseenter={() => (isFlyoutOpen = true)}
				>
					Roadmap
					<svg
						class="{isFlyoutOpen
							? 'rotate-180 transition-all duration-200'
							: 'transition-all duration-200'} h-5 w-5 flex-none text-gray-800 dark:text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				{#key isFlyoutOpen}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						on:mouseleave={() => {
							isFlyoutOpen = false;
						}}
						in:fly={{ duration: 300, y: 30 }}
						out:fly={{ duration: 300, y: 30 }}
						class="{isFlyoutOpen
							? 'opacity-100 translate-y-0 visible'
							: 'opacity-0 translate-y-1 hidden'} absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
					>
						<div class="p-4">
							{#each navData.products as item}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div
									on:click={() => (isFlyoutOpen = !isFlyoutOpen)}
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-100 z-50"
								>
									<img src={item.mobileIcon} alt="" class="h-12" />

									<div class="flex-auto">
										<a
											href={item.link}
											class="block font-semibold text-gray-800 group-hover:text-gray-950 lg:text-[1.03rem]"
										>
											{item.name}
											<span class="absolute inset-0" />
										</a>
										<p class="mt-1 text-gray-600">{item.desc}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/key}
			</div>
			{#each navData.navs as item}
				<a
					href={item.link}
					class=" flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white"
				>
					{item.name}
					{#if item.link === '/pattern'}
						<span
							class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
							>New</span
						>
					{/if}
				</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<ThemeMode />
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="{isMenuBarOpen ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="{isMenuBarOpen ? 'backdrop-blur-sm' : ''} fixed inset-0 z-10" />
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<a href="/" class="font-bold text-xl">Codeflow.</a>
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
					on:click={() => (isMenuBarOpen = false)}
				>
					<span class="sr-only">Close menu</span>
					<X />
				</button>
			</div>
			{#key isMenuBarOpen}
				<div class="mt-6 flow-root" in:slide>
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<div class="-mx-3">
								<button
									type="button"
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white hover:dark:bg-gray-800"
									aria-controls="disclosure-1"
									aria-expanded="false"
									on:click={() => (isMobileFlyoutOpen = !isMobileFlyoutOpen)}
								>
									<div class="flex items-center gap-2">
										<GitPullRequest size="20" strokeWidth="1.3" />
										Roadmap
									</div>

									<svg
										class=" {isMobileFlyoutOpen
											? 'rotate-180 transition-all duration-300'
											: 'transition-all duration-300'} h-5 w-5 flex-none"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
								<!-- 'Product' sub-menu, show/hide based on menu state. -->
								{#key isMobileFlyoutOpen}
									<div
										in:slide={{ duration: 400 }}
										class="{isMobileFlyoutOpen ? 'hidden' : 'visible'} mt-2 space-y-2"
										id="disclosure-1"
									>
										{#each navData.products as item}
											<a
												on:click={() => (isMenuBarOpen = false)}
												href={item.link}
												class="flex justify-start items-center gap-2 rounded-lg py-2 pl-5 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:bg-gray-800 bg-sky-100"
											>
												<img src={item.mobileIcon} class="h-6" alt="" />
												{item.name}</a
											>
										{/each}
									</div>
								{/key}
							</div>
							{#each navData.navs as item}
								<a
									on:click={() => (isMenuBarOpen = false)}
									href={item.link}
									class="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white hover:dark:bg-gray-800"
								>
									<svelte:component this={item.icon} size="20" strokeWidth="1.3" />
									{item.name}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<ThemeMode />
						</div>
					</div>
				</div>
			{/key}
		</div>
	</div>
</header>
