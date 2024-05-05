<script>
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/base16/dracula.css';

	let insideCode = `
	<form method='POST' action='?/fileUpload' enctype="multipart/form-data" use:enhance>
		<div>
			<label for="fileName">File Name : </label>
			<input type="text" id="fileName" name="fileName" required>
		</div>
		<div>
			<label for="file">File Name : </label>
			<input type="file" id="file" name="file" required>
		</div>
		<button type="submit">Submit</button>
	</form>
	`;
	let code =
		`    <script lang='ts'>` +
		`
		export let data;
		export let form;
        import { enhance } from '$app/forms';
    </` +
		`script>
    ` +
		insideCode;

	let servercode = `import { error } from '@sveltejs/kit';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } from '$env/static/private';
import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

cloudinary.config({
	cloud_name: PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
	secure: true
});
/** @type {import('./$types').Actions} */
export const actions = {
	fileUpload: async ({ request }) => {
		try {
			/*
			 * @type {FormData}
			 */
			const formData = await request.formData();
			/**
			 * @type {FormDataEntryValue | null}
			 */
			let fileName = formData.get('fileName');
			const fileData = /** @type {File} */ (formData.get('file'));
			const arrayBuffer = await fileData.arrayBuffer();
			const buffer = new Uint8Array(arrayBuffer);
			const uploadStream = await new Promise((resolve, reject) => {
				// Uploading to cloudinary
				cloudinary.uploader
					.upload_stream({}, function (error, result) {
						if (error) {
							return reject(error);
						}
						return resolve(result);
					})
					.end(buffer);
			});
			console.log(uploadStream); // Details of the uploaded file 
			return { success: true, image: uploadStream.url };
		} catch (er) {
			console.error(er);
			return error(er);
		}
	}
};`;
</script>

<h1>Build a File Uploaded</h1>
<h3>Inverview Question : Create a File Uploader using Sveltekit</h3>
<p class="mb-2">
	Let's create a file uploader using Sveltekit. we are going to use <span class="text-primary underline underline-offset-2" >Cloudinary</span> for uploading files.
</p>
<div class="not-prose">
	<CodeBlock
		language="svelte"
		{code}
		showHeader={true}
		showLineNumbers={false}
		headerText="File Upload"
	/>
</div>
<h4>Form submission at Server Side <code>+page.server.ts</code> File</h4>
<div class="not-prose">
	<CodeBlock
		language="ts"
		code={servercode}
		showHeader={true}
		showLineNumbers={false}
		headerText="Upload File Server Side"
	/>
</div>
