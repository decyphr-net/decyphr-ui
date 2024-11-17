<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import LanguageProcessing from "@/language_processing/LanguageProcessing.svelte";
</script>

<div class="mx-auto grid w-full max-w-6xl gap-2">
  <h1 class="text-3xl font-semibold">Text processing</h1>
</div>
<div class="mx-auto grid w-full max-w-6xl items-start gap-6">
  <LanguageProcessing data={data} />
</div>