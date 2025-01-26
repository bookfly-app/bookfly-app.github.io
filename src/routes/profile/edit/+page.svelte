<script lang="ts">
	import { goto } from "$app/navigation";
	import EditIcon from "../../../assets/images/icons/EditIcon.svelte";
	import { getUser, updateUser } from "../../../backend/auth.svelte";

	let displayName: string;
	let bio: string;

	function update() {
		updateUser({ displayName, bio });
		goto("/profile");
	}
</script>

<main>
	{#if getUser()}
		<img
			class="banner"
			src={getUser()!.banner}
			alt={`${getUser()!.displayName} banner`}
		/>
		<div class="profile">
			<img
				class="profile-picture"
				src={getUser()!.picture}
				alt={`${getUser()!.displayName} profile picture`}
			/>
			<div class="overlay"></div>
			<EditIcon
				stroke="#CCCCFF"
				style="width: 3rem; height: 3rem; transform: translate(1rem, -165%); z-index: 2"
			/>
			<div class="profile-line-1">
				<span class="name">
					<h1>{getUser()!.displayName}</h1>
					<h2>@{getUser()!.username}</h2>
					<span>Dev</span>
				</span>
				<button onclick={update}>Save</button>
			</div>

			<label for="display-name">Display Name</label>
			<input
				type="text"
				id="display-name"
				placeholder={getUser()!.displayName}
				bind:value={displayName}
			/>
			<label for="bio">Bio</label>
			<textarea class="bio" id="bio" bind:value={bio}
				>{getUser()!.bio}</textarea
			>
		</div>
	{/if}
</main>

<style>
	main {
		background-color: #1e1e2e;
		min-height: 100%;
		position: relative;
	}

	label {
		color: var(--text);
	}

	.banner {
		width: 100%;
		height: 7.5rem;
		position: absolute;
	}

	.views {
		color: var(--surface-2);
		display: flex;
		gap: 5rem;
		padding-left: 2rem;

		button {
			font-size: 1.25rem;
		}
	}

	input {
		background-color: var(--crust);
		margin-right: 2rem;
		color: var(--text);
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.bio {
		color: var(--text);
		background-color: var(--crust);
		margin-right: 2rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
		height: 10rem;
		resize: none;
	}

	.profile {
		margin-left: 2rem;
		border-bottom: 1px solid var(--surface-0);
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.profile-line-1 {
		display: flex;

		h2 {
			color: var(--surface-2);
			font-weight: normal;
		}

		> *:last-child {
			margin-left: auto;
			margin-right: 1rem;
			background-image: linear-gradient(
				to bottom right,
				#b4befe,
				#89b4fa
			);
			color: var(--base);
			padding-left: 1rem;
			padding-right: 1rem;
			border-radius: 100vmax;
			font-weight: bold;
		}
	}

	.profile-picture {
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		margin-top: 5rem;
		z-index: 2;
		filter: brightness(0.25);
	}

	.name {
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 1rem;

		span {
			background-image: linear-gradient(
				to bottom right,
				#94e2d5,
				#b4befe
			);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}
	}
</style>
