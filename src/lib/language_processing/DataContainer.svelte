<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { processTextMessagesStore } from "@/nlp/stores";
  import { onMount } from "svelte";
  import type { ProcessedMessage } from "./types"
  import CircleHelp from "lucide-svelte/icons/circle-help"
  import * as HoverCard from "$lib/components/ui/hover-card"

  function updateStore(value: ProcessedMessage) {
    $processTextMessagesStore = [value, ...$processTextMessagesStore]
  }

  // Temporarily hard-code identifier
  let clientId = "14807eb6-ad8c-4e75-a1e5-5d436d30da68";

  const readerListener = (_: Event, reader: FileReader) => {
    let receivedMessage = JSON.parse(JSON.parse(reader.result as string))
    if (receivedMessage.message_type == "REQUEST_RECEIVED") {
      return;
    }
    updateStore(receivedMessage)
  }

  const wsListener = (event: MessageEvent, reader: FileReader) => {
    reader.onload = (event: Event) => readerListener(event, reader);
    reader.readAsText(event.data)
  }

  onMount(async () => {
      const ws = new WebSocket(`ws://localhost:8001/api/nlp/notifier/nlp/${clientId}`);
      const fileReader = new FileReader();
      ws.onmessage = (event: MessageEvent) => wsListener(event, fileReader);
    }
  )
</script>

<div class="grid gap-6">
  {#each $processTextMessagesStore as item: ProcessedMessage}
    <Card.Root>
      <Card.Header>
        <Card.Title class="mb-1 text-xl">
          {item.process_request_tokens.analysis.text}
        </Card.Title>
        <Card.Description>
          <Badge
            variant="{item.process_request_tokens.analysis.mood}"
            class="text-md w-1/7 inline-block"
          >
            <span> Mood: {item.process_request_tokens.analysis.mood }</span> 

            <HoverCard.Root>
              <HoverCard.Trigger>
                <CircleHelp size={18} class="inline-block" />
              </HoverCard.Trigger>
              <HoverCard.Content>
                A piece of text can have 3 different moods. Positive, neutral, or negative
              </HoverCard.Content>
            </HoverCard.Root>
          </Badge>
          <Badge class="text-md w-1/7 inline-block">
            <span>Bias: {item.process_request_tokens.analysis.bias}</span>

            <HoverCard.Root>
              <HoverCard.Trigger>
                <CircleHelp size={18} class="inline-block" />
              </HoverCard.Trigger>
              <HoverCard.Content>
                A piece of text can have 2 different biases. Subjective or objective
              </HoverCard.Content>
            </HoverCard.Root>
          </Badge>
        </Card.Description>
      </Card.Header>
      <Card.Content>
        {#each item.process_request_tokens.tokens as token: Token}
          <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
              <Button builders={[builder]} variant="{token.tag.toLowerCase()}" class="my-1">
                {token.text}
              </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80">
              <div class="flex justify-between space-x-4">
                <div class="space-y-1">
                  <h4 class="text-sm font-semibold">{token.text}</h4>
                  <hr />
                  <p class="text-sm">
                    <span class="font-semibold">Type:&nbsp;</span>
                    {token.display_name}
                  </p>
                </div>
              </div>
            </Popover.Content>
          </Popover.Root>
        {/each}
      </Card.Content>
    </Card.Root>
  {/each}
</div>
