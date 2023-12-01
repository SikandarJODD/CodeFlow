<script>
	import Codecopy from '$lib/learnings/vector/Codecopy.svelte';
	import VectorPlay from '$lib/learnings/vector/VectorPlay.svelte';
	import AllQuestion from '$lib/learnings/vector/allQuestion.svelte';
	let allcodes = [
		{
			name: 'Initializing a Vector',
			code: 'vector<int>v;\nv.push_back(10);\nv.push_back(20);\n\nfor(auto it:v) {\n cout<< it <<" ";\n}'
		},
		{
			name: 'Sort a Vector',
			code: `sort(v.begin(),v.end());`
		},
		{
			name: 'Minimum Element in Vector',
			code: '*min_element(v.begin(), v.end());'
		},
		{
			name: 'Maximum Element in Vector',
			code: '*max_element(v.begin(), v.end());'
		},
		{
			name: 'Sum of all Numbers in Vector',
			code: 'accumulate(v.begin(), v.end(), 0); '
		},
		{
			name: 'Reverse a Vector',
			code: 'reverse(v.begin(),v.end());'
		}
	];
</script>

<div class="">
	<h1>Vector in C++</h1>
	<ol class="text-left">
		<li>
			Vectors are the same as dynamic arrays with the ability to resize itself automatically when an
			element is inserted or deleted, with their storage being handled automatically by the
			container.
		</li>
		<li>
			Vector elements are placed in contiguous storage so that they can be accessed and traversed
			using iterators.
		</li>
	</ol>
	<div class="flex justify-center not-prose">
		<VectorPlay />
	</div>
	<div>
		<h2>Code</h2>
		<ol>
			<Codecopy {allcodes} />
		</ol>
	</div>
	<div class="mt-10">
		<h3>Solve Questions</h3>
		<AllQuestion />
	</div>
</div>
