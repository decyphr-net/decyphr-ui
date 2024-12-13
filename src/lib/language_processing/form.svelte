<script lang="ts">
  import * as Form from "$lib/components/ui/form";
	import * as Select from "@/components/ui/select";
  import { Textarea } from "$lib/components/ui/textarea";
  import { formSchema, type FormSchema } from "./schema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { Toaster, toast } from "svelte-sonner";
  import { get } from "svelte/store";
  import { clientInfoStore } from "../../routes/dashboard/store";

  let clientInfo = get(clientInfoStore);

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Please fix the errors in the form.");
      }
    }
  });

  const { form: formData, enhance } = form;

  $: selectedNlpLanguage = $formData.language
    ? {
      label: $formData.language,
      value: $formData.language
    }
    : undefined;

  $: selectedNlpProcessor = $formData.processor
    ? {
      label: $formData.processor,
      value: $formData.processor
    }
    : undefined;

</script>

<form method="POST" use:enhance class="grid w-full items-start gap-6">
  <fieldset class="grid gap-6 rounded-lg border p-4">
    <legend class="-ml-1 px-1 text-sm font-medium"> Text Breakdown </legend>
    <div class="grid gap-3">
      <Form.Field {form} name="language">
        <Form.Control let:attrs>
          <Form.Label>Language of text to process</Form.Label>
          <Select.Root
            selected={selectedNlpLanguage}
            onSelectedChange={(v) => {
              v && ($formData.from_language = v.value)
              selectedNlpLanguage = v?.label
            }}>
            <Select.Trigger {...attrs}>
              <Select.Value placeholder="Select the language of the text" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="en" label="English">English</Select.Item>
            </Select.Content>
          </Select.Root>
          <input hidden bind:value={$formData.from_language} name={attrs.name} />
        </Form.Control>
      </Form.Field>

      <Form.Field {form} name="processor">
        <Form.Control let:attrs>
          <Form.Label>Part of Speech Tagger</Form.Label>
          <Select.Root
            selected={selectedNlpProcessor}
            onSelectedChange={(v) => {
              v && ($formData.part_of_speech_tagger = v.value)
              selectedNlpProcessor = v?.label
            }}>
            <Select.Trigger {...attrs}>
              <Select.Value placeholder="Select the processor to use" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="decyphr" label="Decyphr">Decyphr</Select.Item>
              <Select.Item value="aws" label="AWS Comprehend">AWS Comprehend</Select.Item>
            </Select.Content>
          </Select.Root>
          <input hidden bind:value={$formData.part_of_speech_tagger} name={attrs.name} />
        </Form.Control>
      </Form.Field>
    </div>
  </fieldset>

  <fieldset class="grid gap-6 rounded-lg border p-4">
    <legend class="-ml-1 px-1 text-sm font-medium"> Text To Decyphr </legend>
    <div class="grid gap-3">
      <Form.Field {form} name="text">
        <Form.Control let:attrs>
          <Form.Label>Text</Form.Label>
          <Textarea
            {...attrs}
            placeholder="Text that you want to process"
            class="resize-none min-h-[9.5rem]"
            bind:value={$formData.text}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field {form} name="client_id">
        <Form.Control let:attrs>
          <input hidden bind:value={clientInfo.clientId} name={attrs.name} />
        </Form.Control>
      </Form.Field>
    </div>
  </fieldset>
  <Form.Button class="w-full">Submit</Form.Button>


</form>

<Toaster />

