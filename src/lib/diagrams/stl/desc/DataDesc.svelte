<script>
	import DataStructureLightImg from '$lib/images/allsvgs/ds-light.svg';
	export let structName = {
		name: 'A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.',
		img: DataStructureLightImg,
		smalltitle: 'Examples',
		examples: ['Array', 'Vector']
	};
</script>

<main class="px-2 mt-2 md:px-0">
	<p class="dark:text-gray-300">
		{@html structName.name}
	</p>
	<div class="my-4 border-2 border-primary/30 dark:border-none rounded-3xl overflow-hidden">
		<img src={structName.img} alt="" class="rounded-lg" />
	</div>
	<h3 class="text-xl my-2 font-semibold">{structName.smalltitle}</h3>
	<div class="md:px-6 px-5">
		<ol class="list-decimal">
			{#each structName.examples as item}
				<li>{item}</li>
			{/each}
		</ol>
	</div>
</main>
