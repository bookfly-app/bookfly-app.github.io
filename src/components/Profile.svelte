<script lang="ts">
	import { goto } from "$app/navigation";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import { getUser } from "../backend/auth.svelte";
	import Post from "./Post.svelte";
	import theme from "../themes/theme.svelte";

	let { user } = $props();

	let isCurrentUser = false;
</script>

<main style:background-color={theme().background}>
	<div class="banner" style:background-image={`url("${user.banner}")`}></div>
	<button class="back-arrow" onclick={() => goto("/")}>
		<LeftArrowIcon stroke="#FFFFFF" style="width: 2rem; height: 2rem;" />
	</button>
	<div class="profile">
		<img
			class="profile-picture"
			src={user.picture}
			alt={`${user.displayName} profile picture`}
		/>
		<div class="profile-line-1">
			<span class="name">
				<h1>{user.displayName}</h1>
				<h2>@{user.username}</h2>
				{#if user.tags.includes("dev")}
					<span class="dev">Dev</span>
				{/if}
				{#if user.tags.includes("author")}
					<span class="author">Author</span>
				{/if}
				{#if user.tags.includes("mod")}
					<span class="mod">Moderator</span>
				{/if}
			</span>
			{#if isCurrentUser}
				<button
					class="edit-profile"
					onclick={() => goto("/profile/edit")}>Edit Profile</button
				>
			{/if}
		</div>
		<p class="bio">{user.bio}</p>
		<div class="views">
			<button>Posts</button>
			<button>Ratings</button>
			<button>Reading List</button>
		</div>
	</div>

	{#each user.posts as post}
		<Post {post} />
	{/each}
</main>

<style>
	main {
		min-height: 100%;
		position: relative;
	}

	.back-arrow {
		width: 2rem;
		height: 2rem;
		position: absolute;
		background: rgba(0, 0, 0, 0.5);
		clip-path: circle();
		left: 1rem;
		top: 1rem;
	}

	.banner {
		width: 100%;
		height: 7.5rem;
		position: absolute;
		background-size: cover;
		background-position: center;
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

	.bio {
		color: var(--text);
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

		.edit-profile {
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
		width: 6rem;
		height: 6rem;
		margin-top: 4.7rem;
		z-index: 2;
		border: 0.5rem solid var(--base);
	}

	.name {
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: -0.5rem;

		.dev {
			background-image: linear-gradient(
				to bottom right,
				#94e2d5,
				#89b4fa,
				#b4befe
			);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}

		.author {
			background-image: linear-gradient(
				to bottom right,
				#fab387,
				#f38ba8
			);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}

		.mod {
			background-image: linear-gradient(
				to bottom right,
				#f5c2e7,
				#cba6f7
			);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}
	}
</style>
