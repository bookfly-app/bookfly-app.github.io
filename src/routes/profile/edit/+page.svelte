<script lang="ts">
	import { goto } from "$app/navigation";
	import { getFile } from "../../../api/storageapi";
	import { awaitUser, usernameErrors } from "../../../api/userapi";
	import EditIcon from "../../../assets/images/icons/EditIcon.svelte";
	import { updateUser, usernameIsTaken } from "../../../backend/auth.svelte";
	import BackButton from "../../../components/BackButton.svelte";
	import ImagePicker from "../../../components/ImagePicker.svelte";
	import Page from "../../../components/Page.svelte";
	import RadioInput from "../../../components/RadioInput.svelte";

	awaitUser.then(user => {
		displayName = user.displayName;
		username = user.username;
		bio = user.bio;
		pronouns = user.pronouns;
		picture = user.picture;
		banner = user.banner;
	});

	let displayName = $state("");
	let banner = $state("");
	let username = $state("");
	let bio = $state("");
	let pronouns = $state("");
	let picture = $state("")

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

		if (username !== (await awaitUser).username && (await usernameIsTaken(username))) {
			usernameTaken = true;
			return;
		}

		await updateUser({ displayName, bio, username, pronouns, picture, banner });
		await goto("/profile");
		location.reload();
	}
</script>

<Page type="profile">
	<BackButton style="position: absolute; top: 0.5rem; left: 0.5rem;"/>
	{#await awaitUser then currentUser}
		<!-- Banner -->
		{#await getFile(banner) then bnr}
			<label for="set-banner" class="banner" style:background-image="url('{bnr}')">
				<div class="overlay"></div>
				<EditIcon
					stroke="#CCCCFF"
					style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 3rem; height: 3rem; z-index: 4;"
				/>
			</label>
		{/await}
		<ImagePicker circular id="set-banner" bind:imageId={banner} aspectRatio={3 / 1} />

		<div class="profile">
			<div>
				<!-- Profile Picture -->
				{#await getFile(picture) then pfp}
					<label for="set-profile-picture" class="profile-picture" style:background-image="url('{pfp}')">
						<div class="overlay"></div>
						<EditIcon
							stroke="#CCCCFF"
							style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 2rem; height: 2rem; z-index: 4;"
						/>
					</label>
				{/await}
				<ImagePicker id="set-profile-picture" bind:imageId={picture} aspectRatio={1 / 1} />

				<button class="save" onclick={update}>Save</button>
			</div>

			<label for="display-name">Display Name</label>
			<input enterkeyhint="done" type="text" id="display-name" bind:value={displayName} />

			<label for="username">Username</label>
			<div
				style:outline={usernameTaken || usernameErrorList.length > 0 ? "2px solid indianred" : "none"}
				class="username" 
			>
				<span class="at">@</span>
				<input
					type="text"
					id="username"
					enterkeyhint="done"
					oninput={onInput}
					bind:value={username}
					bind:this={usernameInput}
				/>
			</div>
				{#each usernameErrorList as usernameError}
					<span class="error">{usernameError}</span>
				{/each}
			{#if usernameTaken}
				<span class="error">Username already taken</span>
			{/if}

			<!-- Pronouns -->

			<hr />

			<label for="pronouns">Pronouns</label>
			<input enterkeyhint="done" type="text" id="pronouns" bind:value={pronouns} />

			<span class="radio-input">
				<label for="display-pronouns">Display pronouns on your profile</label>
				<RadioInput id="display-pronouns" size={0.7} />
			</span>

			<span class="radio-input">
				<label for="display-post-pronouns">Display pronouns on your posts</label>
				<RadioInput id="display-post-pronouns" size={0.7} />
			</span>

			<!-- Bio -->

			<hr />

			<label for="bio">Bio</label>
			<textarea enterkeyhint="done" class="bio" id="bio" bind:value={bio}>
				{currentUser.bio}
			</textarea>

			<hr />

			<h2>Badges</h2>
			{#if currentUser.tags.includes("dev")}
				<span class="badge-line">
					Show developer badge
					<RadioInput size={0.6} />
				</span>
			{/if}
			{#if currentUser.tags.includes("mod")}
				<span class="badge-line">
					Show moderator badge
					<RadioInput size={0.6} />
				</span>
			{/if}
			{#if currentUser.tags.includes("developer")}
				<span class="badge-line">
					Show moderator badge
					<RadioInput size={0.6} />
				</span>
			{/if}
		</div>
	{/await}

	<button class="save-bottom" onclick={update}>Save</button>
</Page>

<style>
	.username {
		width: calc(100% - 4rem);
		display: flex;
		align-items: center;
		margin-left: 2rem;
		padding-left: 0.5rem;
		border-radius: 0.5rem;
		margin-right: 2rem;
		background-color: var(--crust);
	}

	.badge-line {
		display :flex;
		margin-left: 2rem;
		align-items: center;
		justify-content: space-between;
		margin-right: 2rem;
		font-size: 0.85rem;
	}

	span {
		color: var(--overlay-1);
	}

	h2 {
		color: var(--subtext-1);
		font-weight: normal;
		margin-left: 2rem;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.at {
		font-size: 0.85rem;
		height: 100%;
		color: var(--subtext-1);
	}

	hr {
		height: 1px;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		background-color: var(--surface-0);
	}

	.radio-input {
		display: flex;
		justify-content: space-between;
		padding-right: 2rem;
	}

	.banner {
		display: block;
		width: 100%;
		aspect-ratio: 3 / 1;
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.error {
		font-size: 0.85rem;
		color: indianred;
		margin-left: 2rem;
		margin-right: 2rem;
	}

	input, textarea {
		background: var(--crust);
		color: var(--subtext-1);
	}

	.save {
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 100vmax;
		font-size: 0.85rem;
		box-shadow: 0px 0px 0.5rem black;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: 2rem;
		margin-bottom: -1rem;
		margin-top: -1rem;
		background: linear-gradient(to bottom right, var(--lavender), var(--blue));
	}

	.save-bottom {
		padding-left: 4rem;
		padding-right: 4rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 100vmax;
		font-size: 0.85rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
		box-shadow: 0px 0px 0.5rem black;
		background: linear-gradient(to bottom right, var(--lavender), var(--blue));
	}

	input:not(#username),
	textarea,
	label:not(.banner),
	.profile-picture {
		margin-left: 2rem;
		font-size: 0.85rem;
	}

	input {
		margin-right: 2rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	label {
		color: var(--overlay-1);
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
		position: relative;
	}

	.overlay {
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	.profile-picture {
		border-radius: 50%;
		border: 0.5rem solid var(--base);
		width: 5rem;
		height: 5rem;
		z-index: 2;
		background-size: cover;
		margin-top: -2.5rem;
		background-position: center;
		overflow: hidden;
		position: relative;
		display: block;
	}
</style>
