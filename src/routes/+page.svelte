<script lang="ts">
  import { base } from '$app/paths';
	import About from "@/components/landing/About.svelte";
	import Features from "@/components/landing/Features.svelte";
  import Hero from "@/components/landing/Hero.svelte";
	import HowItWorks from "@/components/landing/HowItWorks.svelte";
	import Services from "@/components/landing/Services.svelte";
	import Sponsors from "@/components/landing/Sponsors.svelte";
</script>

<svelte:head>
	<title>Shadcn/Svelte - Landing template</title>
	<meta name="title" content="Shadcn/Svelte - Landing template" />
	<meta name="description" content="Free Shadcn landing page for Svelte developers" />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://github.com/babeard/shadcn-svelte-landing-page.git" />
	<meta property="og:title" content="Shadcn/Svelte - Landing template" />
	<meta property="og:description" content="Free Shadcn landing page for Svelte developers" />
	<meta property="og:image" content="{base}/meta-preview.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:url" content="https://github.com/babeard/shadcn-svelte-landing-page.git" />
	<meta name="twitter:title" content="Shadcn/Svelte - Landing template" />
	<meta name="twitter:description" content="Free Shadcn landing page for Svelte developers" />
	<meta name="twitter:image" content="{base}/meta-preview.jpg" />
</svelte:head>

<Hero />
<Sponsors />
<About />
<HowItWorks />
<Features />
<Services />
