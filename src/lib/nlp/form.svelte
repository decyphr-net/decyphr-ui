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

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    onUpdated: ({ form: f }) => {
      if (f.valid) {
        toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
      } else {
        toast.error("Please fix the errors in the form.");
      }
    }
  });

  const { form: formData, enhance } = form;
  let clientId = "14807eb6-ad8c-4e75-a1e5-5d436d30da68";

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

<form method="POST" use:enhance class="m-auto w-3/4">
  <Form.Field {form} name="language" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>Language</Form.Label>
      <Select.Root
        selected={selectedNlpLanguage}
        onSelectedChange={(v) => {
          v && ($formData.language = v.value)
        }}>
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select the language of the text" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="en" label="English">English</Select.Item>
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.language} name={attrs.name} />
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="processor" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>Text Processing Provider</Form.Label>
      <Select.Root
        selected={selectedNlpProcessor}
        onSelectedChange={(v) => {
          v && ($formData.processor = v.value)
        }}>
        <Select.Trigger {...attrs}>
          <Select.Value placeholder="Select the processor to use" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="aws" label="AWS Comprehend">AWS Comprehend</Select.Item>
        </Select.Content>
      </Select.Root>
      <input hidden bind:value={$formData.processor} name={attrs.name} />
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="text" class="mt-3">
    <Form.Control let:attrs>
      <Form.Label>Text</Form.Label>
      <Textarea
        {...attrs}
        placeholder="Text that you want to process"
        class="resize-none"
        bind:value={$formData.text}
      />
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

