<script lang="ts">
  import type { PageData } from "./$types";
  import * as Card from "$lib/components/ui/card/index.js";
  import PreferencesForm from "$lib/preferences/form.svelte";

  export let data: PageData;
</script>

<div class="flex min-h-screen w-full flex-col">

  <main
    class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">Settings</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav
        class="text-muted-foreground grid gap-4 text-sm"
        data-x-chunk-name="dashboard-04-chunk-0"
        data-x-chunk-description="A sidebar navigation with links to Language Processing Global Settings, security, integrations, support, organizations, and advanced settings."
        data-x-chunk-container="chunk-container after:right-0"
      >
        <a href="##" class="text-primary font-semibold">Language Processing Global Settings</a>
        <a href="##">Security</a>
        <a href="##">Integrations</a>
        <a href="##">Support</a>
        <a href="##">Organizations</a>
        <a href="##">Advanced</a>
      </nav>
      <div class="grid gap-6">
        <Card.Root
          data-x-chunk-name="dashboard-04-chunk-1"
          data-x-chunk-description="A form to update the store name."
        >
          <Card.Header>
            <Card.Title>Language Processing Global Settings</Card.Title>
            <Card.Description>
              Used to configure the default settings for processing text
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <PreferencesForm data={data.form} />
          </Card.Content>
        </Card.Root>
      </div>
    </div>
  </main>
</div>