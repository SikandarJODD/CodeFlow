<script>
	import FeaturesBentoGrid from '$lib/home/FeaturesBentoGrid.svelte';
	import GuideDev from '$lib/home/GuideDev.svelte';
	import Hero from '$lib/home/Hero.svelte';
	import AllFeature from '$lib/home/allFeature.svelte';
</script>

<svelte:head>
	<title>Code Flow</title>
	<meta property="og:title" content="Codeflow. Roadmap" />
	<meta property="description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:description" content="DSA Roadmap and List of Question with STL Diagrams" />
	<meta property="og:url" content="https://roadmap-flow.vercel.app" />
	<meta
		property="og:image"
		content="https://i.pinimg.com/736x/9e/be/8d/9ebe8db903a77a0a1fa5d2c575686f4e.jpg"
	/>

	<!-- Twitter  -->

	<meta property="twitter:title" content="Codeflow. Roadmap" />
	<meta property="twitter:description" content="Roadmap for Developers & Coders" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:image"
		content="https://i.pinimg.com/736x/9e/be/8d/9ebe8db903a77a0a1fa5d2c575686f4e.jpg"
	/>
</svelte:head>

<main class="dark:bg-gray-950/70 bg-sky-100">
	<Hero />
	<GuideDev />
	<FeaturesBentoGrid />
	<AllFeature />
</main>
