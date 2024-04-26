<script>
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/base16/dracula.css';

	let insideCode = `
	<form method='POST'>
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required>
		</div>
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>
		</div>
		<button type="submit">Submit</button>
	</form>
	`;
	let code =
		`
    <script lang='ts'>` +
		`
		export let data;
		export let form;
    </` +
		`script>
    ` +
		insideCode;

	let servercode = `import type { Actions } from "./$types";

export const actions: Actions = {
    defualt: async ({ request }) => {
        let form = await request.formData();
        console.log(form)  // Form Data 
		return { success: true };
    }
};`;
</script>

<h1>Simple Form Submission using Svelte</h1>
<p class="mb-2">
	Form submission on the web typically involves sending data from a web form to a server for
	processing. Here's a basic overview of how form submission works
</p>
<h2 class="mt-0">Basic working of Form</h2>
<ol>
	<li>Creating the Form</li>
	<li>User Input</li>
	<li>Submitting the Form</li>
	<li>Sending the Request</li>
	<li>Processigng on the Server</li>
	<li>Response from the Server</li>
	<li>Displaying the Response</li>
</ol>
<p>
	In summary, form submission involves creating an HTML form, collecting user input, sending the
	data to a server via an HTTP POST request, processing the data on the server, and then responding
	to the client's request with the appropriate content
</p>
<div class="not-prose">
	<CodeBlock
		language="svelte"
		{code}
		showHeader={true}
		showLineNumbers={false}
		headerText="Simple Form Submission using Svelte"
	/>
</div>
<h4>Form submission at Server Side <code>+page.server.ts</code> File</h4>
<div class="not-prose">
	<CodeBlock
		language="ts"
		code={servercode}
		showHeader={true}
		showLineNumbers={false}
		headerText="Server Side Code for Form Submission using Svelte"
	/>
</div>
<div class="mt-2">
	6. <strong>Response from the Server</strong>: After processing the form data, the server typically
	sends back a response to the client (browser). This response might be a new web page, a
	confirmation message, or any other content determined by the server-side processing.
	<br />
	7. <strong>Displaying the Response</strong>: The browser receives the response from the server and
	displays it to the user. This might involve loading a new page, updating parts of the current page
	dynamically (using AJAX), or displaying a pop-up message.
</div>
