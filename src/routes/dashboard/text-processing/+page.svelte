<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import Playground from "@/language_processing/Playground.svelte";
</script>

<main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
  <Playground form={data.form}></Playground>
</main>