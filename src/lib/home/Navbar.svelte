<script>
	import { fly, scale, slide } from 'svelte/transition';
	import ThemeMode from './ThemeMode.svelte';

	let isFlyoutOpen = false;
	let isMobileFlyoutOpen = true;
	let isMenuBarOpen = false;
	let navData = {
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
		products: [
			{
				name: 'Svelte',
				desc: 'Get a better understanding of Svelte',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="107" height="128" viewBox="0 0 107 128"><title>svelte-logo</title><path d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157" style="fill:#ff3e00"/><path d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>`,
				link: '/'
			},
			{
				name: 'Competitive Programming',
				desc: 'Simple Roadmap for Progress',
				icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="306px" height="344.35px" viewBox="0 0 306 344.35" enable-background="new 0 0 306 344.35" xml:space="preserve">
<path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175
	L302.107,258.262z"/>
<path fill="#004482" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263
	c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"/>
<path fill="#659AD2" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0
	L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"/>
<g>
	<path fill="#FFFFFF" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968
		l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51
		c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"/>
</g>
<g>
	<polygon fill="#FFFFFF" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 
		221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"/>
</g>
<g>
	<polygon fill="#FFFFFF" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 
		263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"/>
</g>
</svg>`,
				link: '/'
			}
		],
		navs: [
			{
				name: 'Practice',
				link: '/'
			},
			{
				name: 'Marketplace',
				link: '/about'
			},
			{
				name: 'Company',
				link: '/about'
			}
		]
	};
</script>

<header class="bg-white dark:bg-gray-900">
	<nav class="mx-auto flex max-w-7xl items-center justify-between h-16 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<!-- <img class="h-8 w-auto" src={navData.img} alt="" /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-pi"
					><line x1="9" x2="9" y1="4" y2="20" /><path d="M4 7c0-1.7 1.3-3 3-3h13" /><path
						d="M18 20c-1.7 0-3-1.3-3-3V4"
					/></svg
				>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (isMenuBarOpen = !isMenuBarOpen)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<div class="relative">
				<button
					type="button"
					class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none outline-none dark:text-white"
					aria-expanded="false"
					on:click={() => (isFlyoutOpen = !isFlyoutOpen)}
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
					<div
						in:fly={{ duration: 300, y: 30 }}
						out:fly={{ duration: 300, y: 30 }}
						class="{isFlyoutOpen
							? 'opacity-100 translate-y-0 visible'
							: 'opacity-0 translate-y-1 hidden'} absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
					>
						<div class="p-4">
							{#each navData.products as item}
								<div
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-indigo-100 z-50"
								>
									<div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
										{@html item.icon}
									</div>
									<div class="flex-auto">
										<a
											href={item.link}
											class="block font-semibold text-gray-900 group-hover:text-indigo-600 lg:text-[1.03rem]"
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
				<a href={item.link} class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
					>{item.name}</a
				>
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
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
					on:click={() => (isMenuBarOpen = false)}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						<div class="-mx-3">
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								aria-controls="disclosure-1"
								aria-expanded="false"
								on:click={() => (isMobileFlyoutOpen = !isMobileFlyoutOpen)}
							>
								Product
								<!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  -->
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
											href={item.link}
											class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											>{item.name}</a
										>
									{/each}
								</div>
							{/key}
						</div>
						{#each navData.navs as item}
							<a
								href={item.link}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>{item.name}</a
							>
						{/each}
					</div>
					<div class="py-6">
						<ThemeMode />
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
