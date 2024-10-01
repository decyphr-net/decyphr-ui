<script lang="ts">
  import { setMode, resetMode } from 'mode-watcher';
  import {
    Root,
    Trigger,
    Content,
    Item } from "$lib/components/ui/dropdown-menu"
  import { Button } from "$lib/components/ui/button"
  import { Sun, Moon, SunMoon } from "lucide-svelte"
</script>

<header class="bg-background sticky top-0 z-40 w-full border-b">
  <div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
    <div class="flex gap-6 md:gap-10">
      <a class="flex items-venter space-x-2" href="/">
        <span class="inline-block font-bold">Decyphr</span>
      </a>
      <nav class="flex gap-6">
        <a class="flex items-center text-sm font-medium text-muted-foreground" href="/">Home</a>
      </nav>
    </div>

    <div class="flex flex-1 items-center justify-end space-x-4">
      <nav class="flex items-center space-x-1">
        <Button>Sign in</Button>
        <Root>
          <Trigger asChild let:builder>
            <Button builders={[builder]} variant="ghost" size="icon">
              <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
            </Button>
          </Trigger>
          <Content align="en">
            <Item on:click={() => setMode('light')}>Light</Item>
            <Item on:click={() => setMode('dark')}>Dark</Item>
            <Item on:click={() => resetMode()}>System</Item>
          </Content>
        </Root>
      </nav>
    </div>
  </div>
</header>