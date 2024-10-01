<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '@/components/navigation/navigation.svelte';
</script>

<ModeWatcher />
<Navigation />
<slot></slot>
