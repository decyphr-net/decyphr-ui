<script lang="ts">
  import * as Popover from "$lib/components/ui/popover/index.js";
  import type { Token } from "@/types/language_processing/types";
  import { Button } from "$lib/components/ui/button/index.js";

  export let token: Token;
</script>

<Popover.Root portal={null}>
  <Popover.Trigger asChild let:builder>
    <Button builders={[builder]} variant="{token.tag.toLowerCase()}" class="my-1">
      {token.text}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-80">
    <div class="flex justify-between space-x-4">
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">{token.text}</h4>
        <hr />
        <p class="text-sm">
          <span class="font-semibold">Type:&nbsp;</span>
          {token.display_name}
        </p>
      </div>
    </div>
  </Popover.Content>
</Popover.Root>