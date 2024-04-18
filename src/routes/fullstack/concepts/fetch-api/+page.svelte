<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import { onMount } from 'svelte';

	import 'highlight.js/styles/base16/dracula.css';
	import Button from '$ui/button/button.svelte';

	let code =
		`
    <script lang='ts'>` +
		`
        import { onMount } from 'svelte';
        let data: any;
 
        onMount(async () => {
            await fetch('https://fakestoreapi.com/products?limit=3')
                .then((res) => res.json())
                .then((json) => (data = json));
	    });
        
    </` +
		`script>
    ` +
		`
    {#if data}
	    {#each data as result}
		    <p>{result.title}</p>
	    {/each}
    {/if}
    `;
	let data: any;

	let showOutput = false;
	let getData = async () => {
		await fetch('https://fakestoreapi.com/products?limit=3')
			.then((res) => res.json())
			.then((json) => (data = json));
	};
	onMount(async () => {
		getData();
	});
</script>

<h1>Fetch API using Svelte JS</h1>
<p>
	Fetch API is a modern way to make HTTP requests in JavaScript. It is a promise-based API that
	allows you to make network requests similar to XMLHttpRequest (XHR).
</p>
<div class="text-center flex justify-center mt-0 mb-0">
	<img
		class="rounded-3xl my-0"
		src="https://res.cloudinary.com/practicaldev/image/fetch/s--hZ9ewz1R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cba6spi80klwxj0uyheu.jpg"
		alt="fetch_API_image"
	/>
</div>
<p>
	APIs (Application Programming Interfaces) are typically accessed through HTTP requests. Here's a
	simplified explanation of how APIs are fetched:
</p>
<ol>
	<li>
		<strong>Identify the API</strong> : First, you need to know the endpoint of the API you want to fetch.
		This endpoint is usually a URL provided by the service or application offering the API.
	</li>
	<li>
		<strong>Choose the Appropriate HTTP Method</strong> : Depending on the action you want to
		perform, you'll use one of the HTTP methods: <br />
		<strong>- GET</strong> : Retrieves data from the API. <br /> <strong>- POST</strong>: Sends data
		to the API to create or update a resource.<br /><strong>- PUT</strong>: Sends data to the API to
		update a resource.<br />
		<strong>- DELETE</strong>: Deletes a resource from the API.<br /> - And other less common methods
		like PATCH, OPTIONS, etc.
	</li>
</ol>
<p>
	Here's an example of how to use the Fetch API to make a GET request to an API endpoint with Limit
	is equal to 3
</p>
<div class="not-prose">
	<CodeBlock
		language="svelte"
		{code}
		showHeader={true}
		showLineNumbers={false}
		headerText="Client side fetch API example"
	/>
</div>
<div class="not-prose mt-2">
	<div>
		<Button on:click={() => (showOutput = true)}>Show Output</Button>
	</div>
	<div class="not-prose">
		{#if showOutput}
			<div>
				{#if data}
					<CodeBlock
						language="json"
						code={JSON.stringify(data, null, 2)}
						showHeader={true}
						showLineNumbers={false}
						headerText="Output"
					/>
				{/if}
			</div>
		{/if}
	</div>
</div>
