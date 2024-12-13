<script lang="ts">
  import TextProcessingForm from "@/language_processing/form.svelte";
	import DataContainer from "./DataContainer.svelte";
	import type { Infer, SuperValidated } from "sveltekit-superforms";
	import type { FormSchema } from "./schema";

  export let form: SuperValidated<Infer<FormSchema>>;
</script>

<div class="relative hidden flex-col items-start gap-8 md:flex">
  <TextProcessingForm data={form} />
</div>
<div
  class="bg-muted/50 relative flex h-full min-h-[50vh] flex-col rounded-xl p-4 lg:col-span-2"
>
  <div class="flex-1">
    <DataContainer />
  </div>
</div>
