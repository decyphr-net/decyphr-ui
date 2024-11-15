<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import { Check, Linkedin, GithubIcon } from 'lucide-svelte';
	// import LightBulbIcon from '$lib/components/icons/LightBulb.svelte';
</script>

<div class="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
	<!-- {/* Testimonial */} -->
	<Card.Root
		class="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10"
	>
		<Card.Header class="flex flex-row items-center gap-4">
			<Avatar.Root>
				<Avatar.Image alt="" src="https://github.com/shadcn.png" />
				<Avatar.Fallback>SH</Avatar.Fallback>
			</Avatar.Root>

			<div class="flex flex-col">
				<Card.Title class="text-lg">John Doe Svelte</Card.Title>
				<Card.Description>@john_doe</Card.Description>
			</div>
		</Card.Header>

		<Card.Content>This landing page is awesome!</Card.Content>
	</Card.Root>

	<!-- {/* Team */} -->
	<Card.Root
		class="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10"
	>
		<Card.Header class="mt-8 flex items-center justify-center">
			<img
				src="https://i.pravatar.cc/150?img=58"
				alt="user avatar"
				class="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
			/>
			<Card.Title class="text-center">Leo Miranda</Card.Title>
			<Card.Description class="font-normal text-primary">Frontend Developer</Card.Description>
		</Card.Header>

		<Card.Content class="pb-2 pt-2 text-center">
			<p>I really enjoy transforming ideas into functional software that exceeds expectations</p>
		</Card.Content>

		<Card.Footer>
			<div>
				<Button
					variant="ghost"
					size="sm"
					rel="noreferrer noopener"
					href="https://github.com/leoMirandaa"
					target="_blank"
				>
					<span class="sr-only">Github icon</span>
					<GithubIcon class="h-5 w-5" />
				</Button>

				<Button
					variant="ghost"
					size="sm"
					rel="noreferrer noopener"
					href="https://twitter.com/leo_mirand4"
					target="_blank"
				>
					<span class="sr-only">X icon</span>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 fill-foreground"
					>
						<title>X</title>
						<path
							d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
						/>
					</svg>
				</Button>
				<Button
					variant="ghost"
					size="sm"
					rel="noreferrer noopener"
					href="https://www.linkedin.com/in/leopoldo-miranda/"
					target="_blank"
				>
					<span class="sr-only">Linkedin icon</span>
					<Linkedin size="20" />
				</Button>
			</div>
		</Card.Footer>
	</Card.Root>

	<!-- {/* Pricing */} -->
	<Card.Root
		class="absolute left-[50px] top-[170px] w-72  shadow-black/10 drop-shadow-xl dark:shadow-white/10"
	>
		<Card.Header>
			<Card.Title class="item-center flex justify-between">
				Free
				<Badge variant="secondary" class="text-sm text-primary">Most popular</Badge>
			</Card.Title>
			<div>
				<span class="text-3xl font-bold">$0</span>
				<span class="text-muted-foreground"> /month</span>
			</div>

			<Card.Description>
				Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
			</Card.Description>
		</Card.Header>

		<Card.Content>
			<Button class="w-full">Start Free Trial</Button>
		</Card.Content>

		<hr class="m-auto mb-4 w-4/5" />

		<Card.Footer class="flex">
			<div class="space-y-4">
				{#each ['4 Team member', '4 GB Storage', 'Upto 6 pages'] as benefit}
					{#key benefit}
						<span class="flex">
							<Check class="text-green-500" />
							<h3 class="ml-2">{benefit}</h3>
						</span>
					{/key}
				{/each}
			</div>
		</Card.Footer>
	</Card.Root>

	<!-- {/* Service */} -->
	<Card.Root
		class="absolute -right-[10px] bottom-[35px] w-[350px]  shadow-black/10 drop-shadow-xl dark:shadow-white/10"
	>
		<Card.Header class="flex items-start justify-start gap-4 space-y-1 pb-6 md:flex-row">
			<div class="mt-1 rounded-2xl bg-primary/20 p-1">
				<!-- <LightBulbIcon /> -->
			</div>
			<div>
				<Card.Title class="text-2xl font-semibold leading-none tracking-tight"
					>Light & dark mode</Card.Title
				>
				<Card.Description class="text-md mt-2">
					Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur natusm.
				</Card.Description>
			</div>
		</Card.Header>
	</Card.Root>
</div>