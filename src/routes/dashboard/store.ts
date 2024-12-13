import { persisted, type Persisted } from 'svelte-persisted-store'

export let clientInfoStore: Persisted<any>  = persisted('clientInfo', {});
