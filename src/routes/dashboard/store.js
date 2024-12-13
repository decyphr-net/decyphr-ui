import { persisted } from 'svelte-persisted-store'

export let clientInfoStore = persisted('clientInfo', {});
