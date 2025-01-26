<script lang="ts">
	import { goto } from "$app/navigation";
	import {
		getUser,
		updateUser,
		updateOtherUser,
	} from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";
	import { getFavoriteBook, getUserPosts, type User } from "../api/userapi";
	import BookIcon from "../assets/images/icons/BookIcon.svelte";
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import ClockIcon from "../assets/images/icons/ClockIcon.svelte";
	import SortIcon from "../assets/images/icons/SortIcon.svelte";
	import ReadingListItem from "./ReadingListItem.svelte";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import AnyPost from "./posts/AnyPost.svelte";
	import { getBook, type Post } from "../api/bookapi";
	import Background from "./Background.svelte";
	import MessageIcon from "../assets/images/icons/MessageIcon.svelte";
	import AddIcon from "../assets/images/icons/AddIcon.svelte";
	import CheckIcon from "../assets/images/icons/CheckIcon.svelte";

	let { user }: { user: User } = $props();

	let posts: Post[] = $state([]);

	let view = $state("all");

	let favorite = $state("");
	let booksRead = $state(0);
	let current: string | null = $state("");

	let isCurrentUser = $derived(getUser()?.id === user.id);

	(async () => {
		favorite = (await getFavoriteBook(user))?.title ?? "";
		current = user.currentBook
			? (await getBook(user.currentBook)).title
			: null;
		let allPosts = await getUserPosts(user);
		posts = allPosts.toSorted((a, b) => b.timestamp - a.timestamp);
		booksRead = posts.filter((post) => post.type === "rating").length;
	})();

	let followingOverride: boolean | null = $state(null);
	let following = $derived(
		getUser()?.following.some((following) => following.id === user.id) ??
			false,
	);

	function follow() {
		followingOverride = true;
		updateUser({
			following: [
				...new Set([
					...getUser()!.following.map((user) => user.id),
					user.id,
				]),
			] as unknown as User[],
		});
		updateOtherUser(user, {
			followers: [
				...new Set([
					...user.followers.map((user) => user.id),
					getUser()!.id,
				]),
			] as unknown as User[],
		});
	}

	function unfollow() {
		followingOverride = false;
		updateUser({
			following: getUser()!
				.following.map((user) => user.id)
				.filter((id) => id !== user.id) as unknown as User[],
		});
		updateOtherUser(user, {
			followers: user.followers
				.map((user) => user.id)
				.filter((id) => id !== getUser()!.id) as unknown as User[],
		});
	}
</script>

<Background />
<main>
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
				<h1 style:color={theme().textBright}>{user.displayName}</h1>
				<h2 style:color={theme().textDim}>@{user.username}</h2>
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
			{:else}
				<div class="profile-actions">
					<button
						style:border-color={theme().textDull}
						class="profile-action-follow"
					>
						{#if followingOverride || (following && followingOverride !== false)}
							<CheckIcon
								stroke={theme().textDull}
								style="width: 2rem;"
								onclick={unfollow}
							/>
						{:else}
							<AddIcon
								stroke={theme().textDull}
								style="width: 2rem;"
								onclick={follow}
							/>
						{/if}
					</button>
					<button
						style:border-color={theme().textDull}
						class="profile-action"
					>
						<MessageIcon
							stroke={theme().textDull}
							style="width: 1rem;"
						/>
					</button>
				</div>
			{/if}
		</div>
		<p style:color={theme().text} class="bio">{user.bio}</p>

		<!-- Line 2: Profile stats -->
		<div class="profile-line-2">
			<span
				title={`${user.displayName}'s highest rated book is ${favorite}`}
			>
				<StarIcon
					stroke={theme().textDull}
					style="width: 1.25rem; height: 1.25rem;"
				/>
				<span class="truncate" style:color={theme().textDull}
					>{favorite}</span
				>
			</span>
			{#if current}
				<span
					title={`${user.displayName} is currently reading ${current}`}
				>
					<ClockIcon
						stroke={theme().textDull}
						style="width: 1.25rem; height: 1.25rem;"
					/>
					<span class="truncate" style:color={theme().textDull}
						>{current}</span
					>
				</span>
			{/if}
			<span
				title={`${user.displayName} has read ${booksRead} book${booksRead === 1 ? "" : "s"}`}
			>
				<BookIcon
					stroke={theme().textDull}
					style="width: 1.25rem; height: 1.25rem;"
				/>
				<span style:color={theme().textDull}>{booksRead}</span>
			</span>
		</div>
		<a
			style:border-color={theme().textDull}
			style:color={theme().textDull}
			class="follows"
			href={`/profile/${getUser()!.username}/follows`}
		>
			<span>
				{user.followers.length} Followers
			</span>
			<span>
				{user.following.length} Following
			</span>
		</a>

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
				onclick={() => (view = "ratings")}>Reviews</button
			>
			<button
				style:color={view === "list" ? theme().text : theme().textDim}
				style:border-bottom={view === "list"
					? `3px solid ${theme().accent}`
					: "3px solid transparent"}
				onclick={() => (view = "list")}>Reading List</button
			>
		</div>
	</div>

	{#if view === "discussion"}
		{#each posts.filter((post) => post.type === "general") as post}
			<AnyPost {post} />
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
			{#each posts.filter((post) => post.type === "rating") as post}
				<AnyPost {post} />
			{/each}
		</div>
	{:else if view === "list"}
		{#each user.readingList as isbn}
			<ReadingListItem {isbn} {user} />
		{/each}
	{:else if view === "all"}
		{#each posts as post}
			<AnyPost {post} />
		{/each}
	{/if}
</main>

<style>
	main {
		min-height: 100%;
		position: relative;
	}

	.follows {
		border-radius: 100vmax;
		font-size: 0.8rem;
		text-decoration: none;
		display: flex;
		padding-left: 1rem;
		gap: 1rem;
	}

	.profile-action {
		border-style: solid;
		border-width: 2px;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profile-action-follow {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profile-actions {
		display: flex;
		margin-left: auto;
		margin-right: 1rem;
		gap: 0.5rem;
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
		display: flex;
		width: 100%;
		overflow-x: auto;

		button {
			font-size: 0.8.80.80.80.80.80.80.85rem;
			white-space: nowrap;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	.bio {
		padding-left: 1rem;
		font-size: 0.85rem;
	}

	.profile {
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
		margin-left: 1rem;

		> span {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			white-space: nowrap;
			font-size: 0.85rem;
		}
	}

	.profile-line-1 {
		display: flex;
		margin-left: 1rem;

		h1 {
			font-size: 1.25rem;
		}

		h2 {
			font-size: 1.25rem;
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
		margin-left: 1rem;
		border-radius: 50%;
		width: 6rem;
		height: 6rem;
		margin-top: 4.7rem;
		z-index: 2;
		border: 0.5rem solid var(--base);
	}

	.name {
		flex-grow: 1;
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
			font-size: 0.85rem;
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
