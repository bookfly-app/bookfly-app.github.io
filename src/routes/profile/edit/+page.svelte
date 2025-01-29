<script lang="ts">
	import { goto } from "$app/navigation";
	import { usernameErrors } from "../../../api/userapi";
	import EditIcon from "../../../assets/images/icons/EditIcon.svelte";
	import { updateUser, user, usernameIsTaken } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import theme from "../../../themes/theme.svelte";

	let displayName = $state(user()?.displayName ?? "");
	let username = $state(user()?.username ?? "");
	let bio = $state(user()?.bio ?? "");

	let usernameErrorList = $derived(usernameErrors(username));

	// svelte-ignore non_reactive_update
	let usernameInput: HTMLInputElement;
	let usernameTaken = $state(false);

	function onInput() {
		usernameTaken = false;
	}

	async function update() {
		if (usernameErrorList.length > 0) {
			return;
		}

		if (username !== user()?.username && (await usernameIsTaken(username))) {
			usernameTaken = true;
			return;
		}

		await updateUser({ displayName, bio, username });
		await goto("/profile");
		location.reload();
	}
</script>

<Background />
<Page>
	{#if user()}
		<!-- Banner -->
		<button class="banner" style:background-image="url('{user()!.banner}')">
			<div class="overlay"></div>
			<EditIcon
				stroke="#CCCCFF"
				style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 3rem; height: 3rem; z-index: 4;"
			/>
		</button>

		<div class="profile">
			<div class="profile-top" style:background={theme().backgroundDark}>
				<!-- Profile Picture -->
				<button class="profile-picture" style:border-color={theme().backgroundDark} style:background-image="url('{user()!.picture}')">
					<div class="overlay"></div>
					<EditIcon
						stroke="#CCCCFF"
						style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 2rem; height: 2rem; z-index: 4;"
					/>
				</button>

				<button class="save" style:background="linear-gradient({theme().accent}, {theme().accent2})" onclick={update}>Save</button>
			</div>

			<label style:color={theme().textDull} for="display-name">Display Name</label>
			<input style:background={theme().backgroundDark} style:color={theme().text} type="text" id="display-name" bind:value={displayName} />

			<label style:color={theme().textDull} for="username">Username</label>
			<input
				style:outline={usernameTaken || usernameErrorList.length > 0 ? "2px solid indianred" : "none"}
				style:background={theme().backgroundDark}
				style:color={theme().text}
				type="text"
				id="username"
				oninput={onInput}
				bind:value={username}
				bind:this={usernameInput}
			/>
			{#each usernameErrorList as usernameError}
				<span class="error">{usernameError}</span>
			{/each}
			{#if usernameTaken}
				<span class="error">Username already taken</span>
			{/if}

			<label style:color={theme().textDull} for="bio">Bio</label>
			<textarea style:color={theme().text} style:background={theme().backgroundDark} class="bio" id="bio" bind:value={bio}>
				{user()!.bio}
			</textarea>
		</div>
	{/if}
	<Footer selected="profile" />
</Page>

<style>
	.banner {
		width: 100%;
		height: 7.5rem;
		position: absolute;
		background-size: cover;
		background-position: center;
	}

	.error {
		font-size: 0.85rem;
		color: indianred;
		margin-left: 2rem;
		margin-right: 2rem;
	}

	.save {
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 100vmax;
		font-weight: 600;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: 2rem;
	}

	input,
	textarea,
	label,
	.profile-picture {
		margin-left: 2rem;
	}

	input {
		margin-right: 2rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.bio {
		margin-right: 2rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
		height: 10rem;
		resize: none;
	}

	.profile {
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.overlay {
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	.profile-picture {
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		margin-top: 5rem;
		z-index: 2;
		background-size: cover;
		background-position: center;
		overflow: hidden;
		position: relative;
		border-width: 0.5rem;
		border-style: solid;
	}

	.profile-top {
		padding-bottom: 2rem;
	}
</style>
