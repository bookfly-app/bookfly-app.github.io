<script lang="ts">
	import { goto } from "$app/navigation";
	import { logIn, user } from "../../backend/auth.svelte";
	import theme from "../../themes/theme.svelte";
	import Page from "../../components/Page.svelte";
	import BackButton from "../../components/BackButton.svelte";

	let email: string = $state("");
	let password: string = $state("");

	async function signIn() {
		let error = await logIn(email, password);
		if (error) {
		} else {
			goto("/profile");
		}
	}

	$effect(() => {
		if (user()!) goto("/profile");
	});
</script>

<Page type="profile">
	<main>
		<BackButton style="position: absolute; top: 1rem; left: 1rem;"/>
		<h1>Log In</h1>
		<div class="section">
			<p>Don't have an account? <a href="/signup">Create one now.</a></p>
		</div>
		<div>
			<div class="section">
				<p style:color={theme().textDull}>Email</p>
				<input
					style:color={theme().text}
					style:background={theme().backgroundDark}
					type="text"
					placeholder="example@website.com"
					bind:value={email}
				/>
			</div>
			<div class="section">
				<p style:color={theme().textDull}>Password</p>
				<input
					style:color={theme().text}
					style:background={theme().backgroundDark}
					type="password"
					placeholder="s3cr3tp4zzc0d3"
					bind:value={password}
				/>
				<a href="/forgot-password">Forgot your password?</a>
			</div>

		</div>
		<button disabled={!email || !password} onclick={signIn}>Log In</button>
	</main>
</Page>

<style>
	.section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		a {
			color: var(--blue);
			text-decoration: none;
			font-size: 0.85rem;
		}

		p {
			color: var(--overlay-1);
			font-size: 0.85rem;
		}
	}

	h1 {
		font-weight: normal;
		color: var(--text);
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		height: 100%;

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			input {
				padding: 1rem;
				border-radius: 1rem;
				width: 15rem;
				font-size: 0.85rem;
			}
		}

		button {
			margin-top: 2rem;
			padding: 0.5rem;
			width: 15rem;
			border-radius: 100vmax;

			&[disabled] {
				color: var(--surface-0);
				background-color: var(--crust);
				cursor: default;
			}

			&:not([disabled]) {
				box-shadow: 0px 0px 0.5rem black;
				background-image: linear-gradient(var(--lavender), var(--blue));
				transition: scale 0.2s;

				&:hover {
					scale: 105%;
				}
			}
		}

	}
</style>
