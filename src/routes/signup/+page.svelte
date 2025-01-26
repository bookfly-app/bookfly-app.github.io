<script lang="ts">
	import { goto } from "$app/navigation";
	import { signUp } from "../../backend/auth.svelte";

	let email: string;
	let password: string;
	let username: string;

	async function createAccount() {
		let error = await signUp(email, password, username);
		if (error) {
		} else {
			goto("/profile");
		}
	}
</script>

<main>
	<h1>Create Account</h1>
	<div>
		<input type="text" placeholder="Username" bind:value={username} />
		<input type="text" placeholder="Email" bind:value={email} />
		<input type="password" placeholder="Password" bind:value={password} />
	</div>
	<button onclick={createAccount}>Log In</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(#1e1e2e, #181825);
		color: var(--text);
		gap: 5rem;
		height: 100%;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			input {
				background: var(--crust);
				padding: 1rem;
				border-radius: 1rem;
				width: 15rem;
			}
		}

		button {
			background-image: linear-gradient(#b4befe, #89b4fa);
			color: var(--base);
			padding: 1rem;
			width: 15rem;
			border-radius: 1rem;
			font-weight: bold;
		}
	}
</style>
