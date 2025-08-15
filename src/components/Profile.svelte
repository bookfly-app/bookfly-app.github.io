<script lang="ts">
	import { goto } from "$app/navigation";
	import { getBook } from "../api/bookapi";
	import { format, type Post } from "../api/postapi";
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
	import theme, { accentGradient } from "../themes/theme.svelte";
	import Badges from "./Badges.svelte";
	import BookListing from "./BookListing.svelte";
	import ContextMenu from "./ContextMenu.svelte";
	import AnyPost from "./posts/AnyPost.svelte";
	import RadioInput from "./RadioInput.svelte";

	let props = $props();
	let profileUser: User = props.user;

	let view: "all" | "books" | "discussion" | "activity" = $state(new URLSearchParams(window.location.search).get("view") as any ?? "all");

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

	let showFullReviews = $state(false);
	let ratingSortMenu: ContextMenu;

	let ratingSort: "best" | "recent" = $state("best");
	let ratingSortName = $derived({ best: "Highest Rated", recent: "Recently Finished" }[ratingSort]);
	let ratings = $derived(
		posts.then(posts =>
			posts
				.filter(post => post.type === "rating")
				.toSorted(
					{
						best: (a: Post, b: Post) => b.rating - a.rating,
						recent: (a: Post, b: Post) => a.timestamp - b.timestamp,
					}[ratingSort],
				),
		),
	);

	function sortRatingsBy(sorter: "best" | "recent") {
		return () => {
			ratingSort = sorter;
			ratingSortMenu.close();
		};
	}

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

	function gotoView(viewName: string) {
		return function() {
			goto(`${window.location.origin}${window.location.pathname}?${new URLSearchParams({ view: viewName })}`);
			view = viewName as any;
		}
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
				<!-- Username -->
				<h1 style:color={theme().textBright}>{profileUser.displayName}</h1>
				<h2 style:color={theme().textDim}>@{profileUser.username}</h2>

				<!-- Badges -->
				<Badges forUser={profileUser} size={1} />

				<div class="dot" style:background={theme().textDim}></div>
				<h2 class="pronouns" style:color={theme().textDim}>{profileUser.pronouns}</h2>
			</span>

			<!-- Edit profile button -->
			{#if isCurrentUser}
				<button
					style:color={theme().background}
					style:background={accentGradient()}
					class="edit-profile"
					onclick={() => goto("/profile/edit")}
				>
					Edit Profile
				</button>
			{:else}
				<!-- Profile actions -->
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

		{#await format(profileUser.bio) then bio}
			<p style:color={theme().text} class="bio">{@html bio}</p>
		{/await}

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
				onclick={gotoView("all")}
			>
				All
			</button>
			<button
				style:color={view === "discussion" ? theme().text : theme().textDim}
				style:border-bottom={view === "discussion" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={gotoView("discussion")}
			>
				Discussion
			</button>
			<button
				style:color={view === "books" ? theme().text : theme().textDim}
				style:border-bottom={view === "books" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={gotoView("books")}
			>
				Books
			</button>
			<button
				style:color={view === "activity" ? theme().text : theme().textDim}
				style:border-bottom={view === "activity" ? `3px solid ${theme().accent}` : "3px solid transparent"}
				onclick={gotoView("activity")}
			>
				Activity
			</button>
		</div>
	</div>

	{#await posts}
		<div class="loading">
			<h1 style:color={theme().text}>Loading posts...</h1>
			<p style:color={theme().textDull}>We promise Bookfly will be faster soon.</p>
		</div>
	{:then posts}
		{#if view === "discussion"}
			{#each posts.filter(post => post.type === "general") as post}
				<AnyPost {post} />
			{/each}
		{:else if view === "books"}
			<div class="ratings">
						<div class="rating-options" style:border-color={theme().textDark}>
							<span style:color={theme().textDull}>
								<label for="show-full-reviews">Show full reviews</label>
								<RadioInput id="show-full-reviews" size={0.5} bind:on={showFullReviews} />
							</span>
							<span style:color={theme().textDull}>
								<label for="change-rating-sort">{ratingSortName}</label>
								<button onclick={event => ratingSortMenu.open(event)} id="change-rating-sort">
									<SortIcon stroke={theme().textDull} style="width: 1.5rem;" />
								</button>
							</span>
							<ContextMenu bind:this={ratingSortMenu}>
								<button onclick={sortRatingsBy("best")} style:color={theme().text} style:background={theme().backgroundDim}>
									Highest Rated
								</button>
								<button onclick={sortRatingsBy("recent")} style:color={theme().text} style:background={theme().backgroundDim}>
									Recently Finished
								</button>
							</ContextMenu>
						</div>
				{#await ratings then ratings}
					{#each ratings as post}
						{#if showFullReviews}
							<AnyPost {post} />
						{:else}
							<BookListing book={post.books[0]} rating={post.rating} user={profileUser} />
						{/if}
					{/each}
				{/await}
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
	.pronouns {
		display: flex;
		align-items: center;
	}

	.rating-options {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;

		> * {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}

	.dot {
		content: "";
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 50%;
	}

	.loading {
		padding-top: 2rem;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-size: 1.5rem;
		}

		p {
			font-size: 0.85rem;
		}
	}

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
		max-width: 100%;
		text-overflow: ellipsis;
		text-wrap: nowrap;
		display: inline-block;
		overflow-x: hidden;
		font-size: 0.85rem;
	}

	.ratings {
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
		gap: 1.0rem;
		padding-bottom: 0.5rem;
		margin-left: 1rem;

		> a, > span {
			display: flex;
			gap: 0.5em;
			align-items: center;
			max-width: 30%;
		}
	}

	.profile-line-1 {
		display: flex;
		margin-left: 1rem;

		h1 {
			font-size: 1.25rem;
		}

		h2 {
			font-size: 1rem;
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
			font-weight: 500;
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
	}
</style>
