<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '@/components/navigation/navigation.svelte';
</script>

<div class="flex min-h-screen w-full flex-col">
	<ModeWatcher />
	<Navigation />
	<main
  class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
>
	<slot></slot>
	</main>
</div>