<script>
	import VectorPlay from './VectorPlay.svelte';
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
</div>
