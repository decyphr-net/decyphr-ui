<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { ProcessedMessage } from "@/types/language_processing/types";
	import MoodBadge from "./MoodBadge.svelte";
	import BiasBadge from "./BiasBadge.svelte";
	import TokenPopover from "./TokenPopover.svelte";

  export let processedMessage: ProcessedMessage;
</script>

<Card.Root>
  <Card.Header>
    <Card.Title class="mb-1 text-xl">
      {processedMessage.process_request_tokens.analysis.text}
    </Card.Title>
    <Card.Description>
      <MoodBadge mood={processedMessage.process_request_tokens.analysis.mood} />
      <BiasBadge bias={processedMessage.process_request_tokens.analysis.mood} />
    </Card.Description>
  </Card.Header>
  <Card.Content>
    {#each processedMessage.process_request_tokens.tokens as token: Token}
      <TokenPopover token={token} />
    {/each}
  </Card.Content>
</Card.Root>