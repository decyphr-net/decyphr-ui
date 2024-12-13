<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Request } from "@/types/language_processing/types";
	import MoodBadge from "./MoodBadge.svelte";
	import BiasBadge from "./BiasBadge.svelte";
	import TokenPopover from "./TokenPopover.svelte";

  export let request: Request;
</script>

<Card.Root>
  <Card.Header>
    <Card.Title class="mb-1 text-xl">
      {request.message?.analysis.text}
    </Card.Title>
    <Card.Description>
      <MoodBadge mood={request.message?.analysis.mood} />
      <BiasBadge bias={request.message?.analysis.mood} />
    </Card.Description>
  </Card.Header>
  <Card.Content>
    {#each request.message?.tokens as token: Token}
      <TokenPopover token={token} />
    {/each}
  </Card.Content>
</Card.Root>