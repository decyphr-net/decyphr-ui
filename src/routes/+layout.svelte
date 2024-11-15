<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '@/components/navigation/navigation.svelte';
</script>

<div class="flex min-h-screen w-full flex-col">
	<ModeWatcher />
	<Navigation />
	<slot></slot>
</div>