<script lang="ts">
	import * as Tabs from '$lib/components/ui/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import SupabaseIcon from '$lib/images/backend/supabase.svg';
	import AppwriteIcon from '$lib/images/backend/appwrite.svg';
	import XataIoIcon from '$lib/images/backend/xataio.svg';
	import PocektbaseIcon from '$lib/images/backend/pocket-base.svg';
	import TursoIcon from '$lib/images/backend/turso.svg';
	import { fade, scale } from 'svelte/transition';
	let dbtools = [
		{
			name: 'Supabase',
			link: 'https://supabase.com',
			icon: SupabaseIcon,
			description:
				'Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.',
			features: [
				'Postgres Database',
				'Authentication',
				'Edge Functions',
				'Realtime subscriptions',
				'Storage',
				'Vector embeddings',
				'Email Support'
			]
		},
		{
			name: 'Xata',
			link: 'https://xata.io',
			icon: XataIoIcon,
			description: `Xata is a serverless data platform. Built on top of PostgreSQL, Xata provides a full-text and vector search engine, record-level file attachments, table-level aggregations and exposes a single consistent REST API with SDKs. Xata provides support for schema branches and an optional ask endpoint to engage with with OpenAI's ChatGPT API.`,
			features: [
				'Serverless Postgress',
				'Schema Migrations',
				'File Attachments',
				'Generative AI',
				'Full-Text Search',
				'Branching',
				'AI Intergration'
			]
		},
		{
			name: 'Appwrite',
			link: 'https://appwrite.io',
			icon: AppwriteIcon,
			description:
				"Build your entire backend within minutes and scale effortlessly using Appwrite's open-source platform. Add Authentication, Databases, Functions, Storage, and Messaging to your projects using the frameworks and languages of your choice.",
			features: [
				'Databases',
				'30+ Login Methods',
				'Never Pause - Projects',
				'Storage',
				'Image Transformation',
				'Edge Functions',
				'Realtime Subscriptions'
			]
		},
		{
			name: 'Turso',
			link: 'https://turso.tech',
			icon: TursoIcon,
			description:
				'Turso is a SQLite-compatible database built on libSQL, the Open Contribution fork of SQLite. It enables scaling to hundreds of thousands of databases per organization and supports replication to any location, including your own servers, for microsecond-latency access',
			features: [
				'SQLite-compatible',
				'Platform API',
				'Replication',
				'Multi-DB Schema',
				'Attach Database',
				'Data Edge',
				'Branching',
				'Point-in-Time Recovery'
			]
		},
		{
			name: 'Pocketbase',
			link: 'https://pocketbase.io',
			icon: PocektbaseIcon,
			description:
				'PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API.',
			features: [
				'SQLite',
				'Realtime Subscriptions',
				'Auth Management',
				'File Upload and Handling',
				'Admin Dashboard',
				'Backups',
				'Test Emails',
				'S3 Storage Conncetion'
			]
		}
	];
	let value = 'Supabase';
	let i = 0;
	let changeValue = setInterval(() => {
		value = dbtools[i].name;
		i++;
		if (i === dbtools.length) {
			i = 0;
		}
	}, 2000);
</script>

<Tabs.Root {value} class="md:w-2/3 mx-auto mb-10">
	<Tabs.List class="flex flex-wrap h-full w-fit md:grid  md:w-fit  md:grid-cols-5 mx-auto">
		{#each dbtools as item}
			<Tabs.Trigger
				value={item.name}
				on:click={() => {
					clearInterval(changeValue);
					value = item.name;
				}}
			>
				<img src={item.icon} class="h-4 w-5 mr-1.5" alt="supasbe Icon" />
				{item.name}</Tabs.Trigger
			>
		{/each}
	</Tabs.List>
	{#each dbtools as item}
		<Tabs.Content value={item.name}>
			<Card.Root>
				<Card.Header class="pb-3">
					<a href={item.link} target="_blank" e>
						<Card.Title tag="h3" class="text-xl flex items-center ">
							<img src={item.icon} class="w-5 h-5 mr-1.5" alt="" />
							{item.name}</Card.Title
						>
					</a>
					<Card.Description class="text-md leading-6">
						{item.description}
					</Card.Description>
				</Card.Header>
				<Card.Content class="mt-0">
					{#each item.features as feature}
						<Button class="mr-2 mb-2" variant="outline">{feature}</Button>
					{/each}
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	{/each}
</Tabs.Root>
