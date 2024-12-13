<script lang="ts">
  import type { PageData } from "./$types";
  import * as Card from "$lib/components/ui/card/index.js";
  import TextProcessingForm from "@/language_processing/form.svelte";
	import DataContainer from "./DataContainer.svelte";

  export let data: PageData;

</script>

<div class="grid gap-6">
  <Card.Root
    data-x-chunk-name="dashboard-04-chunk-1"
    data-x-chunk-description="A form to update the store name."
  >
    <Card.Header>
      <Card.Title>Process your text</Card.Title>
      <Card.Description>
        Enter the text below that you work like us process for you!
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <TextProcessingForm data={data.form} />
    </Card.Content>
  </Card.Root>
  <Card.Root
    data-x-chunk-name="dashboard-04-chunk-2"
    data-x-chunk-description="A form to process your text."
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
