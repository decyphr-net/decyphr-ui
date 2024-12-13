<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as HoverCard from "$lib/components/ui/hover-card";
  import CircleHelp from "lucide-svelte/icons/circle-help";
  export let mood: string;
</script>

<Badge
  variant="{mood}"
  class="text-md w-1/7 inline-block"
>
  <span>Mood: {mood}</span>

  <HoverCard.Root>
    <HoverCard.Trigger>
      <CircleHelp size={18} class="inline-block" />
    </HoverCard.Trigger>
    <HoverCard.Content>
      A piece of text can have 3 different moods. Positive, neutral, or negative
    </HoverCard.Content>
  </HoverCard.Root>
</Badge>