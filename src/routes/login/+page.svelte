<script lang="ts">
	import { goto } from "$app/navigation";
	import { logIn, user } from "../../backend/auth.svelte";
	import Page from "../../components/Page.svelte";
	import Header from "../../components/Header.svelte";

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
		<Header title="Log In" />
		<div>
			<div class="section">
				<p>Email</p>
				<input
					type="text"
					placeholder="example@website.com"
					bind:value={email}
				/>
			</div>
			<div class="section">
				<p>Password</p>
				<input
					type="password"
					placeholder="s3cr3tp4zzc0d3"
					bind:value={password}
				/>
				<a href="/forgot-password">Forgot your password?</a>
			</div>

		</div>
		<div class="bottom">
			<button disabled={!email || !password} onclick={signIn}>Log In</button>
			<p>Don't have an account? <a href="/signup">Create one now.</a></p>
		</div>
	</main>
</Page>

<style>
	a {
		color: var(--blue);
		text-decoration: none;
		font-size: 0.85rem;

	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	p {
		color: var(--overlay-1);
		font-size: 0.85rem;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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
				background-color: var(--crust);
				color: var(--subtext-1);
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
