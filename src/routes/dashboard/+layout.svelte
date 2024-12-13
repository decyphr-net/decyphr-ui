<script>
	import { Button } from "@/components/ui/button";
	import * as Tooltip from "@/components/ui/tooltip";
	import { Book, Bot, LifeBuoy, Settings2, SquareTerminal, SquareUser, Triangle } from "lucide-svelte";
	import Bird from "lucide-svelte/icons/bird";
	import CodeXML from "lucide-svelte/icons/code-xml";
	import Rabbit from "lucide-svelte/icons/rabbit";
	import Settings from "lucide-svelte/icons/settings";
	import Share from "lucide-svelte/icons/share";
	import Turtle from "lucide-svelte/icons/turtle";

  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { v4 as uuidv4 } from 'uuid'
  import { clientInfoStore } from "./store";
  import { get } from "svelte/store";

  let clientInfo = get(clientInfoStore);

  if (clientInfo?.clientId === undefined) {
    clientInfoStore.set({'clientId': uuidv4()})
  }


</script>

<div class="grid h-screen w-full pl-[53px]">
  <aside class="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
    <div class="border-b p-2">
      <Button variant="outline" size="icon" aria-label="Home">
        <Triangle class="fill-foreground size-5" />
      </Button>
    </div>
    <nav class="grid gap-1 p-2">
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="bg-muted rounded-lg"
            aria-label="Playground"
            builders={[builder]}
          >
            <SquareTerminal class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Playground</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Models"
            builders={[builder]}
          >
            <Bot class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Models</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="API"
            builders={[builder]}
          >
            <CodeXML class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>API</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Documentation"
            builders={[builder]}
          >
            <Book class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Documentation</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-lg"
            aria-label="Settings"
            builders={[builder]}
          >
            <Settings2 class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Settings</Tooltip.Content>
      </Tooltip.Root>
    </nav>

    <nav class="mt-auto grid gap-1 p-2">
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="mt-auto rounded-lg"
            aria-label="Help"
            builders={[builder]}
          >
            <LifeBuoy class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="icon"
            class="mt-auto rounded-lg"
            aria-label="Account"
            builders={[builder]}
          >
            <SquareUser class="size-5" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
      </Tooltip.Root>
    </nav>
  </aside>
  <div class="flex flex-col">
    <header
      class="bg-background sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b px-4"
    >
      <h1 class="text-xl font-semibold">Playground</h1>
      <Drawer.Root>
        <Drawer.Trigger asChild let:builder>
          <Button builders={[builder]} variant="ghost" size="icon" class="md:hidden">
            <Settings class="size-4" />
            <span class="sr-only">Settings</span>
          </Button>
        </Drawer.Trigger>
        <Drawer.Content class="max-h-[80vh]">
          <Drawer.Header>
            <Drawer.Title>Configuration</Drawer.Title>
            <Drawer.Description>
              Configure the settings for the model and messages.
            </Drawer.Description>
          </Drawer.Header>
          <form class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
            <fieldset class="grid gap-6 rounded-lg border p-4">
              <legend class="-ml-1 px-1 text-sm font-medium"> Settings </legend>
              <div class="grid gap-3">
                <Label for="model">Model</Label>
                <Select.Root>
                  <Select.Trigger
                    id="model"
                    class="items-start [&_[data-description]]:hidden"
                  >
                    <Select.Value placeholder="Select a model" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="genesis" label="Neural Genesis">
                      <div
                        class="text-muted-foreground flex items-start gap-3"
                      >
                        <Rabbit class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Genesis
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            Our fastest model for general use cases.
                          </p>
                        </div>
                      </div>
                    </Select.Item>
                    <Select.Item value="explorer" label="Neural Explorer">
                      <div
                        class="text-muted-foreground flex items-start gap-3"
                      >
                        <Bird class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Explorer
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            Performance and speed for efficiency.
                          </p>
                        </div>
                      </div>
                    </Select.Item>
                    <Select.Item value="quantum" label="Neural Quantum">
                      <div
                        class="text-muted-foreground flex items-start gap-3"
                      >
                        <Turtle class="size-5" />
                        <div class="grid gap-0.5">
                          <p>
                            Neural
                            <span class="text-foreground font-medium">
                              Quantum
                            </span>
                          </p>
                          <p class="text-xs" data-description>
                            The most powerful model for complex
                            computations.
                          </p>
                        </div>
                      </div>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <div class="grid gap-3">
                <Label for="temperature">Temperature</Label>
                <Input id="temperature" type="number" placeholder="0.4" />
              </div>
              <div class="grid gap-3">
                <Label for="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>
              <div class="grid gap-3">
                <Label for="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </fieldset>
            <fieldset class="grid gap-6 rounded-lg border p-4">
              <legend class="-ml-1 px-1 text-sm font-medium"> Messages </legend>
              <div class="grid gap-3">
                <Label for="role">Role</Label>
                <Select.Root selected={{ value: "system", label: "System" }}>
                  <Select.Trigger>
                    <Select.Value placeholder="Select a role" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="system">System</Select.Item>
                    <Select.Item value="user">User</Select.Item>
                    <Select.Item value="assistant">Assistant</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <div class="grid gap-3">
                <Label for="content">Content</Label>
                <Textarea id="content" placeholder="You are a..." />
              </div>
            </fieldset>
          </form>
        </Drawer.Content>
      </Drawer.Root>
      <Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
        <Share class="size-3.5" />
        Share
      </Button>
    </header>
    <main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <slot></slot>
    </main>
  </div>
</div>
