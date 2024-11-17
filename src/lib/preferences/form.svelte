<script lang="ts">
  import * as Form from "$lib/components/ui/form";
	import * as Select from "@/components/ui/select";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { Toaster, toast } from "svelte-sonner";
  import { preferences } from "./stores";
	import { get } from "svelte/store";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        toast.success("Form successfully submitted!");
        preferences.set(f.data)
      } else {
        toast.error("Please fix the errors in the form.");
      }
    }
  });

  const { form: formData, enhance } = form;

  // Temporarily hard-code identifier
  let clientId = "14807eb6-ad8c-4e75-a1e5-5d436d30da68";

  $: selectedToLanguage = ""
  $: selectedFromLanguage = ""
  $: selectedPosTagger = ""

</script>

<form method="POST" use:enhance class="m-auto w-3/4">
  <Form.Field {form} name="from_language" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>From Language</Form.Label>
      <Select.Root
        selected={selectedFromLanguage}
        onSelectedChange={(v) => {
          v && ($formData.from_language = v.value)
          selectedFromLanguage = v?.label
        }}>
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select your primary language" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="en" label="English">English</Select.Item>
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.from_language} name={attrs.name} />
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="to_language" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>To Language</Form.Label>
      <Select.Root
        selected={selectedToLanguage}
        onSelectedChange={(v) => {
          v && ($formData.to_language = v.value)
          selectedToLanguage = v?.label
        }}>
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select the language that you want to translate text to" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="en" label="English">English</Select.Item>
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.to_language} name={attrs.name} />
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="part_of_speech_tagger" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>Part of Speech Tagger</Form.Label>
      <Select.Root
        selected={selectedPosTagger}
        onSelectedChange={(v) => {
          v && ($formData.part_of_speech_tagger = v.value)
          selectedPosTagger = v?.label
        }}>
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select the processor to use" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="aws" label="AWS Comprehend">AWS Comprehend</Select.Item>
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.part_of_speech_tagger} name={attrs.name} />
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="client_id" class="mt-3">
    <Form.Control let:attrs>
      <input hidden bind:value={clientId} name={attrs.name} />
    </Form.Control>
  </Form.Field>

  <Form.Button class="w-full mt-6">Submit</Form.Button>
</form>

<Toaster />
