
<script>
	import BackButton from "../../../../components/BackButton.svelte";
	import Page from "../../../../components/Page.svelte";
</script>

<Page class="about">
	<span class="heading">
		<BackButton style="position: absolute; left: 0px;" />
		<h1>Become a Developer</h1>
	</span>

	<!-- Technical Details -->
	<h2>Technical Details</h2>
	<p>
		On the front end, Wallflower is written using
		<a href="https://svelte.dev/">Svelte</a>
		and
		<a href="https://svelte.dev/docs/kit/introduction">Sveltekit</a>
		for the web (flavored with
		<a href="https://www.typescriptlang.org/">TypeScript</a>
		and bundled with
		<a href="https://bun.sh/">Bun</a>
		), and ported to mobile with
		<a href="https://v2.tauri.app/">Tauri</a>
		.
	</p>
	<p>
		In the back, Wallflower uses <a href="https://firebase.google.com/">Firebase</a>
		to store data and manage authentication.
	</p>
	<p>
		This stack was chosen by
		<a href="/profile/vi">@vi</a>
		in the very beginning, somewhat arbitrarily and based on limited experience. The goal was a simple but powerful stack that allowed seamless porting
		between platforms.
	</p>
	Legal
</Page>

<style>
	:global(.about) {
		padding: 2rem;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		a {
			text-decoration: none;
			color: cornflowerblue;
		}

		p {
			color: var(--overlay-1);
		}
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
		justify-content: center;
	}

	.definition {
		margin-top: 0.5rem;
		padding-top: 1rem;
		color: var(--overlay-1);
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--overlay-1);
		border-top: 1px solid var(--overlay-1);
		padding-bottom: 1rem;

		span {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		h2, h2 > i {
			color: var(--subtext-1);
			font-family: "Garamond";
		}

		.body {
			padding-top: 0.5rem;

			i {
				color: var(--surface-2);
			}
		}
	}

	h2:not(.wallflower) {
		color: var(--subtext-1);
		margin-bottom: -0.5rem;
		margin-top: 0.5rem;
	}
</style>
