import { z } from "zod"

export const formSchema = z.object({
  language: z.string({ required_error: "Please select a language"}),
  processor: z.string(
    { required_error: "Please select a provider to process the text" }),
  text: z.string(
    { required_error: "Please provide the text that you want to process"}
  ).min(1, "Text must be at least 1 character"),
  client_id: z.string(),
  request_uuid: z.string()
})

export type FormSchema = typeof formSchema
