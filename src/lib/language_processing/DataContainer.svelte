<script lang="ts">
  import { message } from "$lib/nlp/stores";
  import * as Table from "$lib/components/ui/table/index.js";

  function updateStore(value) {
    $message = [...$message, value]
  }

  // Temporarily hard-code identifier
  let clientId = "14807eb6-ad8c-4e75-a1e5-5d436d30da68";

  const ws = new WebSocket(`ws://localhost:8001/api/nlp/notifier/nlp/${clientId}`)

  ws.addEventListener("message", (message: any) => {
    const reader = new FileReader()
    reader.onload = function(e) {
      let receivedMessage = JSON.parse(reader.result)
      updateStore(JSON.parse(receivedMessage))
    }

    reader.readAsText(message.data)
  })
</script>

<div class="grid gap-6">
  <Table.Root class="mx-auto mt-8 w-3/4">
    <Table.Caption>A list of your recently processed text.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">ID</Table.Head>
        <Table.Head>Processor</Table.Head>
        <Table.Head>Language Code</Table.Head>
        <Table.Head class="text-right">Text</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each $message as item, i (i)}
        {#if item.message_type == "REQUEST_PROCESSED"}
          <Table.Row>
            <Table.Cell class="font-medium">{item.syntax_tokens.id}</Table.Cell>
            <Table.Cell>{item.syntax_tokens.process_request.processor}</Table.Cell>
            <Table.Cell>{item.syntax_tokens.process_request.language_code}</Table.Cell>
            <Table.Cell class="text-right">
              {#each item.syntax_tokens.tokens as token}
                <span class="{token.tag}">{token.word}</span>
              {/each}
            </Table.Cell>
          </Table.Row>
        {/if}
      {/each}
    </Table.Body>
  </Table.Root>
</div>
