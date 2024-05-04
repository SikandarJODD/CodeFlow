<script>
	import SvelteMarkdown from 'svelte-markdown';
	let markdown = `| BAAS | Supabase | Appwrite | Xata |
| --- | --- | --- | --- |
| Database |      ✓ |      ✓ |      ✓ |
| Authentication |      ✓ |      ✓ |  |
| Edge Functions |      ✓ |      ✓ |  |
| Storage |      ✓ |      ✓ |  |
| Realtime |      ✓ |      ✓ |  |
| Vector |      ✓ |      ✓ |  |
| File Storage without Bucket |  |  |      ✓ |
| Branching |  |  |      ✓ |
| Full Text Search |  |  |      ✓ |
| Chat GPT  |  |  |      ✓ |
`;

	let freeTier = `| BASS | Supabase | Appwrite  | Xata  |
| --- | --- | --- | --- |
| Unlimited API Request |      ✓ | 750 K Executions |         ——— |
| Database Space | 500 MB | Not clearly Mentioned | 15 GB Data Storage |
| File Storage | 1 GB | 2 GB | 2 GB File Attachments |
| Bandwidth | 5 GB | 10 GB |          ——— |
| Active Users  | 50,000 | 75,000 |  |
| AI Queries |          ——— |         ——— | 250 AI Query Per Month |
| Search Engine Storage |          ——— |         ——— | 15 GB Storage |`;

	let proTier = `
| BASS | Supabase - Popular | Appwrite  |
| --- | --- | --- |
| Pricing | $25 / Per Month  | $15 / Per Month |
| Unlimited API Request |               ✓  | 3.5 Million Executions |
| Database Space | 8 GB then → $0.025 Per GB | 150 GB |
| File Storage | 100 GB then → $0.021 Per GB | 2 GB |
| Bandwidth | 250 GB then → $0.09 Per GB | 300 GB |
| Active Users  | 100,000 | 200,000 |
| Email Support  |               ✓ |           ✓ |
| Daily Backup | Daily Backup stored for 7 Days |  |
| AI Queries |          ——— |         ——— |
| Search Engine Storage |          ——— |         ——— |`;

	/* 
| Features Description | Free projects are paused after 1 week of inactivity. Limit of 2 active projects | 1 DB, 3 Buckets, 5 Functions Per Project, Unlimited Project Never Pause | High Availability, Generative AI, Full Text Search |
*/

	/* 
| Features Description | 7-day log retention | Remove Appwrite Branding, Add-ons, unlimited DB, Buckets, Functions |
*/
	let features = `| BASS | Supabase  | Appwrite  |
| --- | --- | --- |
| Features Free Tier | Free projects are paused after 1 week of inactivity. Limit of 2 active projects | 1 DB, 3 Buckets, 5 Functions Per Project, Unlimited Project Never Pause | High Availability, Generative AI, Full Text Search |
| Features Pro Tier | 7-day log retention | Remove Appwrite Branding, Add-ons, unlimited DB, Buckets, Functions |`;
</script>

<div class="prose dark:prose-invert min-w-full">
	<h1 class="text-center mb-4">Features Comparison</h1>
	<div
		class="w-2/3 mx-auto dark:bg-gray-800/30 shadow-xl dark:shadow-slate-950 rounded-2xl prose-table:my-2 border border-primary"
	>
		<SvelteMarkdown source={markdown} />
	</div>
	<div class="w-2/3 mx-auto mt-20">
		<h1 class="text-center mb-5">Price Comparison - Free Tier</h1>
		<div
			class="dark:bg-gray-800/30 shadow-xl dark:shadow-slate-950 rounded-2xl prose-table:my-2 border border-primary prose-td:font-mono"
		>
			<SvelteMarkdown source={freeTier} />
		</div>
	</div>
	<div class="w-2/3 mx-auto mt-20">
		<h1 class="text-center mb-5">Price Comparison - Pro Tier</h1>
		<div
			class="dark:bg-gray-800/30 shadow-xl dark:shadow-slate-950 rounded-2xl prose-table:my-2 border border-primary prose-td:font-mono"
		>
			<SvelteMarkdown source={proTier} />
		</div>
	</div>
	<div class="w-2/3 mx-auto my-20">
		<h1 class="text-center mb-5">Features</h1>
		<div
			class="dark:bg-gray-800/30 shadow-xl dark:shadow-slate-950 rounded-2xl prose-table:my-2 border border-primary prose-td:font-mono"
		>
			<SvelteMarkdown source={features} />
		</div>
	</div>
</div>
