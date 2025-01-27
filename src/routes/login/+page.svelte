<script lang="ts">
	import { goto } from "$app/navigation";
	import { getUser, logIn } from "../../backend/auth.svelte";
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import theme from "../../themes/theme.svelte";

	let email: string;
	let password: string;

	async function signIn() {
		let error = await logIn(email, password);
		if (error) {
		} else {
			goto("/profile");
		}
	}

	$effect(() => {
		if (getUser()!) {
			goto("/profile");
		}
	});
</script>

<Background />
<main>
	<h1 style:color={theme().textBright}>Log In</h1>
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
		</div>
	</div>
	<button style:background={`linear-gradient(${theme().accent}, ${theme().accent2})`} onclick={signIn}>Log In</button>
</main>
<Footer selected="profile" />

<style>
	.section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		p {
			font-size: 0.85rem;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5rem;
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
			padding: 1rem;
			width: 15rem;
			border-radius: 1rem;
			font-weight: bold;
			box-shadow: 0px 0px 10px black;
		}
	}
</style>
