<script lang="ts">
	import { goto } from "$app/navigation";
	import { getBook } from "../api/bookapi";
	import { format } from "../api/postapi";
	import { getFavoriteBook, getUserPosts, type User } from "../api/userapi";
	import AddIcon from "../assets/images/icons/AddIcon.svelte";
	import BookIcon from "../assets/images/icons/BookIcon.svelte";
	import CheckIcon from "../assets/images/icons/CheckIcon.svelte";
	import ClockIcon from "../assets/images/icons/ClockIcon.svelte";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import MessageIcon from "../assets/images/icons/MessageIcon.svelte";
	import SortIcon from "../assets/images/icons/SortIcon.svelte";
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import { updateOtherUser, updateUser, user } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";
	import AnyPost from "./posts/AnyPost.svelte";

	let props = $props();
	let profileUser: User = props.user;

	let view: "all" | "ratings" | "discussion" | "activity" = $state("all");

	/** This user's highest rated book */
	let favoriteBook = getFavoriteBook(profileUser);

	/** This user's posts */
	let posts = getUserPosts(profileUser);

	/** Whether the profile being viewed is of the currently logged in user. */
	let isCurrentUser = $derived(user()?.id === profileUser.id);

	/** The title of the book that the user is currently reading (or null if they aren't) */
	let currentlyReading = profileUser.currentBook ? getBook(profileUser.currentBook) : Promise.resolve(null);

	/** The total number of books this user has read */
	let booksRead = posts.then(posts => posts.filter(post => post.type === "rating").length);

	let followingOverride: boolean | null = $state(null);

	/** Whether the current user is following this profile's user */
	let following = $derived(
		followingOverride || ((user()?.following.some(following => following === profileUser.id) ?? false) && followingOverride === null),
	);

	/** Follows this user. */
	function follow() {
		followingOverride = true;
		updateUser({
			following: [...new Set([...user()!.following, profileUser.id])],
		});
		updateOtherUser(profileUser, {
			followers: [...new Set([...profileUser.followers, user()!.id])],
		});
	}

	/** Unfollows this user. */
	function unfollow() {
		followingOverride = false;
		updateUser({
			following: user()!.following.filter(id => id !== profileUser.id),
		});
		updateOtherUser(profileUser, {
			followers: profileUser.followers.filter(id => id !== user()!.id),
		});
	}
</script>

<section>
	<div class="banner" style:background-image={`url("${profileUser.banner}")`}></div>
	<button class="back-arrow" onclick={() => goto("/")}>
		<LeftArrowIcon stroke="#FFFFFF" style="width: 1.5rem; height: 1.5rem;" />
	</button>
	<div class="profile" style:background={theme().backgroundDark}>
		<img
			class="profile-picture"
			src={profileUser.picture}
			alt={`${profileUser.displayName} profile picture`}
			style:border-color={theme().backgroundDark}
		/>
		<div class="profile-line-1">
			<span class="name">
				<h1 style:color={theme().textBright}>{profileUser.displayName}</h1>
				<h2 style:color={theme().textDim}>@{profileUser.username}</h2>
				{#if profileUser.tags.includes("dev")}
					<span class="dev">Dev</span>
				{/if}
				{#if profileUser.tags.includes("author")}
					<span class="author">Author</span>
				{/if}
				{#if profileUser.tags.includes("mod")}
					<span class="mod">Moderator</span>
				{/if}
			</span>
			{#if isCurrentUser}
				<button
					style:color={theme().background}
					style:background="linear-gradient({theme().accent}, {theme().accent2})"
					class="edit-profile"
					onclick={() => goto("/profile/edit")}
				>
					Edit Profile
				</button>
			{:else}
				<div class="profile-actions">
					<button style:border-color={theme().textDull} class="profile-action-follow">
						{#if following}
							<CheckIcon stroke={theme().textDull} style="width: 2rem;" onclick={unfollow} />
						{:else}
							<AddIcon stroke={theme().textDull} style="width: 2rem;" onclick={follow} />
						{/if}
					</button>
					<button style:border-color={theme().textDull} class="profile-action">
						<MessageIcon stroke={theme().textDull} style="width: 1rem;" />
					</button>
				</div>
			{/if}
		</div>
		<p style:color={theme().text} class="bio">{@html format(profileUser.bio)}</p>

		<!-- Line 2: Profile stats -->
		<div class="profile-line-2">
			<!-- Favorite Book -->
			{#await favoriteBook then favorite}
				{#if favorite}
					<a href={`/book/${favorite.isbn}`} title={`${profileUser.displayName}'s highest rated book is ${favorite.title}`}>
						<StarIcon stroke={theme().textDull} style="width: 1rem; height: 1rem;" />
						<span class="truncate" style:color={theme().textDull}>{favorite.title}</span>
					</a>
				{/if}
			{/await}

			<!-- Current book -->
			{#await currentlyReading then current}
				{#if current}
					<a href="/book/{current.isbn}" title={`${profileUser.displayName} is currently reading ${current.title}`}>
						<ClockIcon stroke={theme().textDull} style="width: 1rem; height: 1rem;" />
						<span class="truncate" style:color={theme().textDull}>{current.title}</span>
					</a>
				{/if}
			{/await}

			<!-- Number of books read -->
			{#await booksRead then booksRead}
				<span title="{profileUser.displayName} has read {booksRead} book{booksRead === 1 ? '' : 's'}">
					<BookIcon stroke={theme().textDull} style="width: 1.25rem; height: 1.25rem;" />
					<span style:color={theme().textDull}>{booksRead}</span>
				</span>
			{/await}
		</div>
		<a style:border-color={theme().textDull} style:color={theme().textDull} class="follows" href={`/profile/${profileUser.username}/follows`}>
			<span>
				{profileUser.followers.length} Followers
			</span>
			<span>
				{profileUser.following.length} Following
			</span>
		</a>

		<!-- Line 4: Views (all, discussion, ratings, list) -->
		<div class="views">
			<button
				style:color={view === "all" ? theme().text : theme().textDim}
				style:border-bottom={view === "all" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={() => (view = "all")}
			>
				All
			</button>
			<button
				style:color={view === "discussion" ? theme().text : theme().textDim}
				style:border-bottom={view === "discussion" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={() => (view = "discussion")}
			>
				Discussion
			</button>
			<button
				style:color={view === "ratings" ? theme().text : theme().textDim}
				style:border-bottom={view === "ratings" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={() => (view = "ratings")}
			>
				Reviews
			</button>
			<button
				style:color={view === "activity" ? theme().text : theme().textDim}
				style:border-bottom={view === "activity" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={() => (view = "activity")}
			>
				Activity
			</button>
		</div>
	</div>

	{#await posts then posts}
		{#if view === "discussion"}
			{#each posts.filter(post => post.type === "general") as post}
				<AnyPost {post} />
			{/each}
		{:else if view === "ratings"}
			<div class="ratings">
				<span style:color={theme().text} class="rating-sort">
					<SortIcon stroke={theme().text} style="width: 1.75rem; height: 1.75rem;" />
					Best
				</span>
				{#each posts.filter(post => post.type === "rating") as post}
					<AnyPost {post} />
				{/each}
			</div>
		{:else if view === "activity"}
			{#each posts.filter(post => post.type === "update") as post}
				<AnyPost {post} />
			{/each}
		{:else if view === "all"}
			{#each posts as post}
				<AnyPost {post} />
			{/each}
		{/if}
	{/await}
</section>

<style>
	section {
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
		max-width: 10rem;
		text-overflow: ellipsis;
		display: inline-block;
		overflow-x: hidden;
		font-size: 0.85rem;
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
		display: flex;
		align-items: center;
		justify-content: center;
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
		white-space: pre-wrap;

		:global(a) {
			color: cornflowerblue;
		}
	}

	.profile {
		border-bottom-width: 1px;
		border-bottom-style: solid;
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
			padding-left: 1rem;
			padding-right: 1rem;
			border-radius: 100vmax;
			font-weight: 600;
		}
	}

	.profile-picture {
		margin-left: 1rem;
		border-radius: 50%;
		width: 6rem;
		height: 6rem;
		margin-top: 4.7rem;
		z-index: 2;
		border-width: 0.5rem;
		border-style: solid;
	}

	.name {
		flex-grow: 1;
		color: var(--text);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: -0.5rem;

		.dev {
			background-image: linear-gradient(to bottom right, #94e2d5, #89b4fa, #b4befe);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
			font-size: 0.85rem;
		}

		.author {
			background-image: linear-gradient(to bottom right, #fab387, #f38ba8);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}

		.mod {
			background-image: linear-gradient(to bottom right, #f5c2e7, #cba6f7);
			color: var(--base);
			padding: 0.3rem;
			border-radius: 0.5rem;
			font-weight: 500;
		}
	}
</style>
