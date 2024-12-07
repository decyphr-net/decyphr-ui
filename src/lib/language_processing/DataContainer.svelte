<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { message } from "$lib/nlp/stores";
  import { onMount } from "svelte";

  function updateStore(value) {
    $message = [...$message, value]
  }

  // Temporarily hard-code identifier
  let clientId = "14807eb6-ad8c-4e75-a1e5-5d436d30da68";

  onMount(async () => {
      const ws = new WebSocket(`ws://localhost:8001/api/nlp/notifier/nlp/${clientId}`)

      ws.addEventListener("message", async (message: any) => {
        const reader = new FileReader()
        reader.onload = function(e) {
          let receivedMessage = JSON.parse(reader.result)
          updateStore(JSON.parse(receivedMessage))
        }

        reader.readAsText(message.data)
      })
    }
  )
</script>

<div class="grid gap-6">
  {#each $message as item}
    {#if item.message_type === "REQUEST_PROCESSED"}
      <Card.Root>
        <Card.Header>
          <Card.Title class="mb-1 text-xl">{item.process_request_tokens.analysis.text}</Card.Title>
          <Card.Description>
            <Badge variant="{item.process_request_tokens.analysis.mood}" class="text-md w-1/7 inline-block">Mood: {item.process_request_tokens.analysis.mood}</Badge>
            <Badge class="text-md w-1/7 inline-block">Bias: {item.process_request_tokens.analysis.bias}</Badge>
          </Card.Description>
        </Card.Header>
        <Card.Content>
          {#each item.process_request_tokens.tokens as token}
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
                    <p class="text-sm"><span class="font-semibold">Type:&nbsp;</span>{token.display_name}</p>
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>
          {/each}
        </Card.Content>
      </Card.Root>
    {/if}
  {/each}
</div>
