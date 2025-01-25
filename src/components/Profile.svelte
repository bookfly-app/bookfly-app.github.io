<script lang="ts">
	import { goto } from "$app/navigation";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import { getUser } from "../backend/auth.svelte";
	import Post from "./Post.svelte";
	import theme from "../themes/theme.svelte";
	import Rating from "./Rating.svelte";
	import type { User } from "../backend/backend";
	import BookIcon from "../assets/images/icons/BookIcon.svelte";
	import LocationIcon from "../assets/images/icons/LocationIcon.svelte";
	import BirthdayIcon from "../assets/images/icons/BirthdayIcon.svelte";
	import StarIcon from "../assets/images/icons/Star.svelte";
	import { getBook } from "../api/api";
	import ClockIcon from "../assets/images/icons/ClockIcon.svelte";
	import SortIcon from "../assets/images/icons/SortIcon.svelte";
	import ReadingListItem from "./ReadingListItem.svelte";

	let { user }: { user: User } = $props();

	let view = $state("ratings");

	let books = $derived(user.books.toSorted((a, b) => b.rating - a.rating));
	let favorite = $state("");
	let current = $state("");

	let isCurrentUser = $derived(getUser()?.id === user.id);

	(async () => {
		favorite = (await getBook(books[0].isbn)).title;
		current = (await getBook(user.currentBook)).title;
	})();
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

		<!-- Line 3: Profile stats -->
		<div class="profile-line-2">
			<span>
				<StarIcon
					stroke={theme().textDull}
					style="width: 1.25rem; height: 1.25rem;"
				/>
				<span class="truncate" style:color={theme().textDull}
					>{favorite}</span
				>
			</span>
			<span>
				<ClockIcon
					stroke={theme().textDull}
					style="width: 1.25rem; height: 1.25rem;"
				/>
				<span class="truncate" style:color={theme().textDull}
					>{current}</span
				>
			</span>
			<span>
				<BookIcon
					stroke={theme().textDull}
					style="width: 1.25rem; height: 1.25rem;"
				/>
				<span style:color={theme().textDull}>{books.length}</span>
			</span>
		</div>

		<!-- Line 4: Views (all, discussion, ratings, list) -->
		<div class="views">
			<button
				style:color={view === "all" ? theme().text : theme().textDim}
				style:border-bottom={view === "all"
					? `3px solid ${theme().accent}`
					: "3px solid transparent"}
				onclick={() => (view = "all")}>All</button
			>
			<button
				style:color={view === "discussion"
					? theme().text
					: theme().textDim}
				style:border-bottom={view === "discussion"
					? `3px solid ${theme().accent}`
					: "3px solid transparent"}
				onclick={() => (view = "discussion")}>Discussion</button
			>
			<button
				style:color={view === "ratings"
					? theme().text
					: theme().textDim}
				style:border-bottom={view === "ratings"
					? `3px solid ${theme().accent}`
					: "3px solid transparent"}
				onclick={() => (view = "ratings")}>Ratings</button
			>
			<button
				style:color={view === "list" ? theme().text : theme().textDim}
				style:border-bottom={view === "list"
					? `3px solid ${theme().accent}`
					: "3px solid transparent"}
				onclick={() => (view = "list")}>List</button
			>
		</div>
	</div>

	{#if view === "discussion"}
		{#each user.posts as post}
			<Post {post} />
		{/each}
	{:else if view === "ratings"}
		<div class="ratings">
			<span style:color={theme().text} class="rating-sort">
				<SortIcon
					stroke={theme().text}
					style="width: 1.75rem; height: 1.75rem;"
				/>
				Best
			</span>
			{#each books as book}
				<Rating
					isbn={book.isbn}
					rating={book.rating}
					review={book.review}
					{user}
				/>
			{/each}
		</div>
	{:else if view === "list"}
		{#each user.readingList as isbn}
			<ReadingListItem {isbn} {user} />
		{/each}
	{/if}
</main>

<style>
	main {
		min-height: 100%;
		position: relative;
	}

	.truncate {
		max-width: 8rem;
		text-overflow: ellipsis;
		display: inline-block;
		overflow-x: hidden;
	}

	.ratings {
		position: relative;
	}

	.rating-sort {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
		gap: 0.3rem;
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
		justify-content: space-between;
		padding-right: 2rem;
		padding-left: 1rem;

		button {
			font-size: 1rem;
			white-space: nowrap;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
		}
	}

	.bio {
		color: var(--text);
	}

	.profile {
		margin-left: 1rem;
		border-bottom: 1px solid var(--surface-0);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.profile-line-2 {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;

		> span {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			white-space: nowrap;
		}
	}

	.profile-line-1 {
		display: flex;

		h2 {
			color: var(--surface-2);
			font-weight: normal;
		}

		.edit-profile {
			position: absolute;
			right: 0px;
			top: 8.5rem;
			width: 7rem;
			height: 2rem;
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
