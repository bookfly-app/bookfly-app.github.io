
<script>
	import DeveloperIcon from "../../../../assets/images/icons/DeveloperIcon.svelte";
	import ExternalLink from "../../../../components/ExternalLink.svelte";
	import Header from "../../../../components/Header.svelte";
	import Page from "../../../../components/Page.svelte";
</script>

<Page class="about">
	<Header title="Become a developer" />

	<div class="icon">
		<DeveloperIcon stroke="var(--crust)" style="width: 3rem; height: 3rem;" />
	</div>

	<h2>Becoming a Developer</h2>

	<p>
		If you're interested in becoming a developer for wallflower.land, reach out
		to <a href="/@vi">@vi</a> at <ExternalLink href="mailto:vi@wallflower.land">vi@wallflower.land</ExternalLink>,
		or the whole staff team at
		<ExternalLink href="mailto:staff@wallflower.land">staff@wallflower.land</ExternalLink>.
		I'll try get in touch with you soon after.
	</p>

	<!-- Technical Details -->
	<h2>Development Details</h2>
	<p>
		On the front end, Wallflower is written using
		<ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>
		and
		<ExternalLink href="https://svelte.dev/docs/kit/introduction">Sveltekit</ExternalLink>
		for the web (flavored with
		<ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>, 
		and ported to mobile with
		<ExternalLink href="https://v2.tauri.app/">Tauri</ExternalLink>
		.
	</p>
	<p>
		In the back, Wallflower uses <ExternalLink href="https://firebase.google.com/">Firebase</ExternalLink>
		to store data and manage authentication.
	</p>
	<p>
		This stack was chosen by
		<a href="/profile/vi">@vi</a>
		in the very beginning. The goal was a simple but powerful stack that allowed seamless porting
		between platforms.
	</p>
</Page>

<style>
	:global(.about) {
		padding: 2rem;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 4.5rem;

		a {
			text-decoration: none;
			color: var(--blue);
			
			&:hover {
				text-decoration: underline;
			}
		}

		p {
			color: var(--overlay-1);
		}
	}

	.icon {
		background-image: linear-gradient(to bottom right, var(--green), var(--teal));
		padding: 1rem;
		width: fit-content;
		border-radius: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	h2:not(.wallflower) {
		color: var(--subtext-1);
		margin-bottom: -0.5rem;
		margin-top: 0.5rem;
	}
</style>
