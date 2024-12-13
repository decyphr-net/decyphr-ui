import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { ProcessedMessage } from "$lib/language_processing/types"

export let processTextMessagesStore:Writable<ProcessedMessage[]> = writable([]);
