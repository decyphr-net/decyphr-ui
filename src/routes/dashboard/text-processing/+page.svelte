<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import Playground from "@/language_processing/Playground.svelte";
</script>

<Playground form={data.form}></Playground>