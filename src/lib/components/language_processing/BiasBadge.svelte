<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as HoverCard from "$lib/components/ui/hover-card";
  import CircleHelp from "lucide-svelte/icons/circle-help";
  export let bias: string;
</script>

<Badge variant="{bias}" class="text-md w-1/7 inline-block">
  <span>Bias: {bias}</span>

  <HoverCard.Root>
    <HoverCard.Trigger>
      <CircleHelp size={18} class="inline-block" />
    </HoverCard.Trigger>
    <HoverCard.Content>
      A piece of text can have 2 different biases. Subjective or objective
    </HoverCard.Content>
  </HoverCard.Root>
</Badge>