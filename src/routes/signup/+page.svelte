<script lang="ts">
	import { goto } from "$app/navigation";
	import { usernameErrors } from "../../api/userapi";
	import { emailIsTaken, passwordErrors, signUp, user, usernameIsTaken } from "../../backend/auth.svelte";
	import Background from "../../components/Background.svelte";
	import theme from "../../themes/theme.svelte";

	let email: string;
	let password: string;
	let password2: string;
	let username: string;

	let usernameInput: HTMLInputElement;
	let emailInput: HTMLInputElement;
	let passwordInput: HTMLInputElement;
	let passwordInput2: HTMLInputElement;

	let passwordErrorList: string[] = $state([]);
	let usernameErrorList: string[] = $state([]);
	let emailErrorList: string[] = $state([]);
	let passwordMatchError = $state(false);

	let usernameValid = $state(true);
	let passwordValid = $state(true);
	let password2Valid = $state(true);

	let valid = $derived(usernameValid && passwordValid && password2Valid);

	function checkUsername() {
		usernameErrorList = usernameErrors(username);
		if (usernameErrorList.length > 0) {
			usernameValid = false;
			usernameInput.style.outline = "2px solid indianred";
		} else {
			usernameValid = true;
			usernameInput.style.outline = "none";
		}
	}

	async function checkEmail() {
		emailErrorList = [];
		emailInput.style.outline = "none";
	}

	function checkPassword() {
		passwordErrorList = passwordErrors(password);
		if (passwordErrorList.length > 0) {
			passwordInput.style.outline = "2px solid indianred";
			passwordValid = false;
		} else {
			passwordValid = true;
			passwordInput.style.outline = "none";
		}
	}

	function checkPasswordRetype() {
		if (password !== password2) {
			passwordValid = false;
			passwordInput2.style.outline = "2px solid indianred";
			passwordMatchError = true;
		} else {
			passwordValid = true;
			passwordInput2.style.outline = "none";
			passwordMatchError = false;
		}
	}

	async function createAccount() {
		if (!valid) {
			return;
		}

		if (await usernameIsTaken(username)) {
			usernameInput.style.outline = "2px solid indianred";
			usernameErrorList.push("Username already taken");
			return;
		}

		if (await emailIsTaken(email)) {
			emailInput.style.outline = "2px solid indianred";
			emailErrorList.push("Email already in use");
			return;
		}

		let error = await signUp(email, password, username);
		if (error) {
		} else {
			goto("/profile");
		}
	}

	$effect(() => {
		if (user()) {
			goto("/profile");
		}
	});
</script>

<Background />
<main>
	<h1 style:color={theme().textBright}>Create Account</h1>
	<div>
		<div class="section">
			<p style:color={theme().textDull}>Username</p>
			<input
				bind:this={usernameInput}
				oninput={checkUsername}
				style:color={theme().text}
				style:background={theme().backgroundDark}
				type="text"
				placeholder="Username"
				bind:value={username}
			/>
			{#each usernameErrorList as error}
				<span class="error">{error}</span>
			{/each}
		</div>

		<div class="section">
			<p style:color={theme().textDull}>Email</p>
			<input
				type="text"
				bind:this={emailInput}
				oninput={checkEmail}
				style:color={theme().text}
				style:background={theme().backgroundDark}
				placeholder="example@website.com"
				bind:value={email}
			/>
			{#each emailErrorList as error}
				<span class="error">{error}</span>
			{/each}
		</div>
		<div class="section">
			<p style:color={theme().textDull}>Password</p>
			<input
				style:color={theme().text}
				style:background={theme().backgroundDark}
				type="password"
				placeholder="sUp3rS3cr37!"
				oninput={checkPassword}
				bind:value={password}
				bind:this={passwordInput}
			/>
			{#each passwordErrorList as error}
				<span class="error">{error}</span>
			{/each}
		</div>
		<div class="section">
			<p style:color={theme().textDull}>Retype Password</p>
			<input
				style:color={theme().text}
				style:background={theme().backgroundDark}
				type="password"
				oninput={checkPasswordRetype}
				placeholder="sUp3rS3cr37!"
				bind:value={password2}
				bind:this={passwordInput2}
			/>
			{#if passwordMatchError}
				<span class="error">Passwords much match</span>
			{/if}
		</div>
	</div>
	<button
		style:color={theme().background}
		style:background={valid ? `linear-gradient(${theme().accent}, ${theme().accent2})` : theme().backgroundDark}
		onclick={createAccount}
	>
		Create Account
	</button>
</main>

<style>
	.error {
		font-size: 0.8rem;
		color: indianred;
	}

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
			width: 50%;

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
		}
	}
</style>
