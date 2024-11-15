<script lang="ts">
	import { Radar } from 'lucide-svelte';

	interface SponsorProps {
		name: string;
	}

	const sponsors: SponsorProps[] = [
		{
			name: 'Sponsor 1'
		},
		{
			name: 'Sponsor 2'
		},
		{
			name: 'Sponsor 3'
		},
		{
			name: 'Sponsor 4'
		},
		{
			name: 'Sponsor 5'
		},
		{
			name: 'Sponsor 6'
		}
	];
</script>

<section id="sponsors" class="container pt-24 sm:py-32">
	<h2 class="text-md mb-8 text-center font-bold text-primary lg:text-xl">Investors and founders</h2>

	<div class="flex flex-wrap items-center justify-center gap-4 md:gap-8">
		{#each sponsors as { name }}
			<div class="flex items-center gap-1 text-muted-foreground/60">
				<span><Radar size={34} /></span>
				<h3 class="text-xl font-bold">{name}</h3>
			</div>
		{/each}
	</div>
</section>