<script lang="ts">
  import { base } from '$app/paths';
	import About from "@/components/About.svelte";
	import Features from "@/components/Features.svelte";
  import Hero from "@/components/Hero.svelte";
	import HowItWorks from "@/components/HowItWorks.svelte";
	import Services from "@/components/Services.svelte";
	import Sponsors from "@/components/Sponsors.svelte";
  // import type { PageData } from "./$types";
  // import SettingsForm from "../lib/nlp/form.svelte";
  // import { message } from "../lib/nlp/stores";
  // export let data: PageData;

  // function updateStore(value) {
  //   $message = [...$message, value]
  // }

  // // $: webSocketMessageData = [];

  // $: messageData = [];

  // const ws = new WebSocket("ws://localhost:8001/api/nlp/notifier/nlp/14807eb6-ad8c-4e75-a1e5-5d436d30da68")

  // ws.addEventListener("message", (message: any) => {
  //   const reader = new FileReader()
  //   reader.onload = function(e) {
  //     let receivedMessage = JSON.parse(reader.result)
  //     updateStore(JSON.parse(receivedMessage))
  //     console.log(messageData)
  //   }

  //   reader.readAsText(message.data)
  //   console.log(messageData)
  //   // webSocketMessageData.push(messageData)
  // })

  // if (messageData) {
  //   for (const item of messageData) {
  //     console.log(item)
  //   }
  // }


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

<!-- <SettingsForm data={data.form} />

{#each $message as item}
  {#if item.message_type !== "REQUEST_RECEIVED"}
    <p>{item.message_type}</p>
    <p>{item.syntax_tokens.id}</p>
  {/if}
{/each} -->

