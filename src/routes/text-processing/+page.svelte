<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import LanguageProcessing from "@/language_processing/LanguageProcessing.svelte";
</script>

<LanguageProcessing data={data} />