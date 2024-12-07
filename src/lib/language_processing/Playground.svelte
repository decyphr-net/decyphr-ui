<script lang="ts">
  import CornerDownLeft from "lucide-svelte/icons/corner-down-left";
  import Mic from "lucide-svelte/icons/mic";
  import Paperclip from "lucide-svelte/icons/paperclip";

  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import TextProcessingForm from "$lib/nlp/form.svelte";

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
