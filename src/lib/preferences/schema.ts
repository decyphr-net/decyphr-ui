import { z } from "zod"

export const formSchema = z.object({
  to_language: z.string({ required_error: "Please select a language"}),
  from_language: z.string({ required_error: "Please select a language"}),
  part_of_speech_tagger: z.string(
    { required_error: "Please select a provider to process the text" }),
  client_id: z.string()
})

export type FormSchema = typeof formSchema
