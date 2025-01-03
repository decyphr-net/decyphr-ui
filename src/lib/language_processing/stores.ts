import { writable, type Writable } from "svelte/store";
import type { Request } from "$lib/types/language_processing/types"

export let processTextRequestsStore: Writable<Request[]> = writable([]);
