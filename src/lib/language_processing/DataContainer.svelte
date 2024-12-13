<script lang="ts">
  import { onMount } from "svelte";
  import type { ProcessedMessage } from "@/types/language_processing/types";
  import { get } from "svelte/store";
  import { processTextMessagesStore } from "@/language_processing/stores";
  import { clientInfoStore } from "../../routes/dashboard/store";
  import ProcessedTextCard from "@/components/language_processing/ProcessedTextCard.svelte";

  const clientInfo: ClientInfo = get(clientInfoStore);

  onMount(async () => {
      const ws = new WebSocket(`ws://localhost:8001/api/nlp/notifier/nlp/${clientInfo.clientId}`);
      const fileReader = new FileReader();
      ws.onmessage = (event: MessageEvent) => wsListener(event, fileReader);
    }
  )

  function updateStore(value: ProcessedMessage) {
    $processTextMessagesStore = [value, ...$processTextMessagesStore]
  }

  const readerListener = (_: Event, reader: FileReader) => {
    let receivedMessage = JSON.parse(JSON.parse(reader.result as string))
    if (receivedMessage.message_type == "REQUEST_RECEIVED") {
      return;
    }
    updateStore(receivedMessage);
  }

  const wsListener = (event: MessageEvent, reader: FileReader) => {
    reader.onload = (event: Event) => readerListener(event, reader);
    reader.readAsText(event.data)
  }
</script>

<div class="grid gap-6">
  {#each $processTextMessagesStore as item: ProcessedMessage}
    <ProcessedTextCard processedMessage={item} />
  {/each}
</div>
