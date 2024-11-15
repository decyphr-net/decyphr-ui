<script lang="ts">
  import type { PageData } from "./$types";
  import * as Card from "$lib/components/ui/card/index.js";
  import TextProcessingForm from "$lib/nlp/form.svelte";
	import DataContainer from "./DataContainer.svelte";

  export let data: PageData;

</script>

<main
  class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
>
  <div class="grid gap-6">
    <Card.Root
      data-x-chunk-name="dashboard-04-chunk-1"
      data-x-chunk-description="A form to update the store name."
    >
      <Card.Header>
        <Card.Title>Process your text</Card.Title>
        <Card.Description>
          Used to identify your store in the marketplace.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <TextProcessingForm data={data.form} />
      </Card.Content>
    </Card.Root>
    <Card.Root
      data-x-chunk-name="dashboard-04-chunk-2"
      data-x-chunk-description="A form to update the plugins directory with a checkbox to allow administrators to change the directory."
    >
      <Card.Header>
        <Card.Title>Processed Text</Card.Title>
        <Card.Description>
          The text that you've already processed
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <DataContainer />
      </Card.Content>
    </Card.Root>
  </div>
</main>
