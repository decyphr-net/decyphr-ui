<script lang="ts">
	import { base } from '$app/paths';
	import * as Card from '$lib/components/ui/card';

	import type { Component } from 'svelte';

	const cubeLeg = `${base}/cube-leg.png`;

	interface ServiceProps {
		title: string;
		description: string;
		icon: string;
	}

	const serviceList: ServiceProps[] = [
		{
			title: 'Code Collaboration',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: "ChartIcon"
		},
		{
			title: 'Project Management',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: "WalletIcon"
		},
		{
			title: 'Task Automation',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			icon: "MagnifierIcon"
		}
	];
</script>

<section class="container py-24 sm:py-32">
	<div class="grid place-items-center gap-8 lg:grid-cols-[1fr,1fr]">
		<div>
			<h2 class="text-3xl font-bold md:text-4xl">
				<span class="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
					Client-Centric{' '}
				</span>
				Services
			</h2>

			<p class="mb-8 mt-4 text-xl text-muted-foreground">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.
			</p>

			<div class="flex flex-col gap-8">
				{#each serviceList as { icon, title, description }}
					<Card.Root>
						<Card.Header class="mb-6 flex items-start justify-start gap-4 space-y-1 md:flex-row">
							<div class="mt-1 rounded-2xl bg-primary/20 p-1">
								<!-- <svelte:component this={icon} /> -->
							</div>
							<div>
								<Card.Title>{title}</Card.Title>
								<Card.Description class="text-md mt-2">
									{description}
								</Card.Description>
							</div>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</div>

		<img
			src={cubeLeg}
			class="w-[300px] object-contain md:w-[500px] lg:w-[600px]"
			alt="About services"
		/>
	</div>
</section>