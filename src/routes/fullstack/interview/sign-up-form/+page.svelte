<script>
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/base16/dracula.css';

	let insideCode = `
	<form method='POST' action='?/signUp' use:enhance>
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required>
		</div>
        <div>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required>
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
        import { enhance } from '$app/forms';
    </` +
		`script>
    ` +
		insideCode;

	let servercode = `import type { Actions } from "./$types";

export const actions: Actions = {
    signUp: async ({ request }) => {
        let form = await request.formData();
        console.log(form)  // Form Data 
        let username = form.get('username');
        let email = form.get('email');
        let password = form.get('password');

        // signup logic using supabase 

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

		return { success: true };
    }
};`;
</script>

<h1>Sign-up form using Sveltekit</h1>
<h3>Inverview Question : Create a Sign Up Form using Sveltekit</h3>
<p class="mb-2">
	Interview questions on sign-up forms are common in full-stack developer interviews. This is
	because sign-up forms are a common feature in web applications. In this article, we will discuss
	how to create a sign-up form using Sveltekit.
</p>
<p class="mb-2">
	Sign up forms includes username, email, password and any other information that is required to
	create an account. Here's a basic overview of how form submission works
</p>
<div class="not-prose">
	<CodeBlock
		language="svelte"
		{code}
		showHeader={true}
		showLineNumbers={false}
		headerText="Sign Up"
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
