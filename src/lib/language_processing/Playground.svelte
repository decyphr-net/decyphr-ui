<script lang="ts">
  import TextProcessingForm from "@/language_processing/form.svelte";

  import type { PageData } from "./$types";
	import DataContainer from "./DataContainer.svelte";

  export let data: PageData;
</script>

<div class="relative hidden flex-col items-start gap-8 md:flex">
  <TextProcessingForm data={data.form} />
</div>
<div
  class="bg-muted/50 relative flex h-full min-h-[50vh] flex-col rounded-xl p-4 lg:col-span-2"
>
  <div class="flex-1">
    <DataContainer />
  </div>
</div>
