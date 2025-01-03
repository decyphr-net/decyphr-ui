<script lang="ts">
  import { onMount } from "svelte";
  import type { SocketUpdateMessage } from "@/types/language_processing/types";
  import { get } from "svelte/store";
  import { processTextRequestsStore } from "@/language_processing/stores";
  import { clientInfoStore } from "../../routes/dashboard/store";
  import ProcessedTextCard from "@/components/language_processing/ProcessedTextCard.svelte";

  const clientInfo: ClientInfo = get(clientInfoStore);

  onMount(async () => {
      const ws = new WebSocket(`ws://localhost:8001/api/nlp/notifier/nlp/${clientInfo.clientId}`);
      const fileReader = new FileReader();
      ws.onmessage = (event: MessageEvent) => wsListener(event, fileReader);
    }
  )

  const readerListener = (_: Event, reader: FileReader) => {
    setTimeout(() => {
      const message: SocketUpdateMessage = JSON.parse(JSON.parse(reader.result as string));
      $processTextRequestsStore = $processTextRequestsStore.map(
      obj => (
        {
          ...obj,
          processed: message.message_type == "REQUEST_PROCESSED" ? true : obj.processed,
          received: message.message_type == "REQUEST_RECEIVED" ? true : obj.received,
          message: obj.message ? obj.message : message.process_request_tokens
        }
      )
    )
    }, 100);
  }

  const wsListener = (event: MessageEvent, reader: FileReader) => {
    reader.onload = (event: Event) => readerListener(event, reader);
    reader.readAsText(event.data)
  }
</script>

<div class="grid gap-6">
  {#if $processTextRequestsStore === undefined || $processTextRequestsStore === null || $processTextRequestsStore.length <= 0}
    <p>You processed text will appear here!</p>
  {:else}
    {#each $processTextRequestsStore as item}
      <ProcessedTextCard request={item} />
    {/each}
  {/if}
</div>
