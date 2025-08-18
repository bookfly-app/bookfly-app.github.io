<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { getBook } from "../api/bookapi";
	import { format, type Post } from "../api/postapi";
	import { getFavoriteBook, getFollowers, getUserPosts, type User } from "../api/userapi";
	import AddIcon from "../assets/images/icons/AddIcon.svelte";
	import BookIcon from "../assets/images/icons/BookIcon.svelte";
	import CheckIcon from "../assets/images/icons/CheckIcon.svelte";
	import ClockIcon from "../assets/images/icons/ClockIcon.svelte";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import MessageIcon from "../assets/images/icons/MessageIcon.svelte";
	import SortIcon from "../assets/images/icons/SortIcon.svelte";
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import { updateOtherUser, updateUser, user } from "../backend/auth.svelte";
	import Badges from "./Badges.svelte";
	import BookListing from "./BookListing.svelte";
	import ContextMenu from "./ContextMenu.svelte";
	import AnyPost from "./posts/AnyPost.svelte";
	import RadioInput from "./RadioInput.svelte";
	import { cssVar } from "../api/themes.svelte";
	import { getFile } from "../api/storageapi";
	import Sidebar from "./Sidebar.svelte";

	let props = $props();
	let profileUser: User = props.user;
	let sidebar: Sidebar = props.sidebar;

	let view: "all" | "books" | "discussion" | "activity" | "list" = $state(new URLSearchParams(window.location.search).get("view") as any ?? "all");

	/** This user's highest rated book */
	let favoriteBook = getFavoriteBook(profileUser);

	let readingList = Promise.all(profileUser.readingList.map(isbn => getBook(isbn)));

	let followers = getFollowers(profileUser);

	/** This user's posts */
	let posts = getUserPosts(profileUser);

	/** Whether the profile being viewed is of the currently logged in user. */
	let isCurrentUser = $derived(user()?.id === profileUser.id);

	/** The title of the book that the user is currently reading (or null if they aren't) */
	let currentlyReading = profileUser.currentBook ? getBook(profileUser.currentBook) : Promise.resolve(null);

	/** The total number of books this user has read */
	let booksRead = posts.then(posts => posts.filter(post => post.type === "rating").length);

	let showFullReviews = $state(false);
	let ratingSortMenu: ContextMenu = $state(null!);

	let ratingSort: "best" | "recent" = $state("best");
	let ratingSortName = $derived({ best: "Highest Rated", recent: "Recently Finished" }[ratingSort]);
	let ratings = $derived.by(async () => {
		ratingSort;

		return posts.then(posts => {
			return posts
				.filter(post => post.type === "rating")
				.toSorted({
					best: (a: Post, b: Post) => b.rating - a.rating,
					recent: (a: Post, b: Post) => b.timestamp - a.timestamp,
				}[ratingSort]);
		});
	});

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

	let ratingOptions: HTMLElement | null = $state(null);

	function hexToRgb(hex: string) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		};
	}


	function lerp(start: string, stop: string, percent: number) {
		percent = Math.min(Math.max(percent, 0), 1)
		const rgbA = hexToRgb(start);
		const rgbB = hexToRgb(stop);
		const colorVal = (prop: "r" | "g" | "b") => Math.round(rgbA[prop] * (1 - percent) + rgbB[prop] * percent);
		return {
			r: colorVal('r'),
			g: colorVal('g'),
			b: colorVal('b'),
		}
	}

	onMount(() => {
		document.addEventListener("scroll", () => {
			ratingSortMenu?.close();

			if (ratingOptions) {
				const top = ratingOptions.getBoundingClientRect().top;
				const percent = top / 100;

				const { r, g, b } = lerp(cssVar("crust"), cssVar("base"), percent);
				ratingOptions.style.background = `rgb(${r}, ${g}, ${b})`
			}
		}, true); // me when true
	})
</script>

<section>
	{#await getFile(profileUser.banner) then bnr}
		<div class="banner" style:background-image={`url("${bnr}")`}></div>
	{/await}
	<button class="back-arrow" onclick={() => sidebar.show()}>
		<LeftArrowIcon stroke="#FFFFFF" style="width: 1.5rem; height: 1.5rem;" />
	</button>
	<div class="profile">
		{#await getFile(profileUser.picture) then pfp}
			<img
				class="profile-picture"
				src={pfp}
				alt={`${profileUser.displayName} profile picture`}
			/>
		{/await}
		<div class="profile-line-1">
			<span class="name">
				<!-- Username -->
				<h1>{profileUser.displayName}</h1>
				<h2>@{profileUser.username}</h2>

				<!-- Badges -->
				<Badges forUser={profileUser} size={1} />

				<div class="dot"></div>
				<h2 class="pronouns">{profileUser.pronouns}</h2>
			</span>

			<!-- Edit profile button -->
			{#if isCurrentUser}
				<button class="edit-profile" onclick={() => goto("/profile/edit")}>
					Edit Profile
				</button>
			{:else if user()}
				<!-- Profile actions -->
				<div class="profile-actions">
					<button class="profile-action-follow">
						{#if following}
							<CheckIcon stroke="var(--overlay-1)" style="width: 2rem;" onclick={unfollow} />
						{:else}
							<AddIcon stroke="var(--overlay-1)" style="width: 2rem;" onclick={follow} />
						{/if}
					</button>
					<button class="profile-action">
						<MessageIcon stroke="var(--overlay-1)" style="width: 1rem;" />
					</button>
				</div>
			{/if}
		</div>

		{#await format(profileUser.bio) then bio}
			<p class="bio">{@html bio}</p>
		{/await}

		<!-- Line 2: Profile stats -->
		<div class="profile-line-2">
			<span class="profile-books">
				<!-- Favorite Book -->
				{#await favoriteBook then favorite}
					{#if favorite}
						<a href={`/book/${favorite.isbn}`} title={`${profileUser.displayName}'s highest rated book is ${favorite.title}`}>
							<StarIcon stroke="var(--overlay-1)" style="width: 1rem; height: 1rem; flex-shrink: 0;" />
							<span class="truncate">{favorite.title}</span>
						</a>
					{/if}
				{/await}

				<!-- Current book -->
				{#await currentlyReading then current}
					{#if current}
						<a href="/book/{current.isbn}" title={`${profileUser.displayName} is currently reading ${current.title}`}>
							<ClockIcon stroke="var(--overlay-1)" style="width: 1rem; height: 1rem; flex-shrink: 0;" />
							<span class="truncate">{current.title}</span>
						</a>
					{/if}
				{/await}
			</span>

			<!-- Number of books read -->
			{#await booksRead then booksRead}
				<a onclick={() => view = "books"} href="/profile/{profileUser.username}?view=books" title="{profileUser.displayName} has read {booksRead} book{booksRead === 1 ? '' : 's'}">
					<BookIcon stroke="var(--overlay-1)" style="width: 1rem; height: 1rem;" />
					<span>{booksRead}</span>
				</a>
			{/await}
		</div>
		<a class="follows" href={`/profile/${profileUser.username}/follows`}>
			{#await followers then followers}
				<span>
					{followers.length} Followers
				</span>
			{/await}
			<span>
				{profileUser.following.length} Following
			</span>
		</a>

		<!-- Line 4: Views (all, discussion, ratings, list) -->
		<div class="views">
			<button
				style:color={view === "all" ? "var(--subtext-1)" : "var(--overlay-1)"}
				style:border-bottom={view === "all" ? `3px solid var(--lavender)` : "3px solid transparent"}
				onclick={gotoView("all")}
			>
				All
			</button>
			<button
				style:color={view === "books" ? "var(--subtext-1)" : "var(--overlay-1)"}
				style:border-bottom={view === "books" ? `3px solid var(--lavender)` : "3px solid transparent"}
				onclick={gotoView("books")}
			>
				Books
			</button>
			<button
				style:color={view === "activity" ? "var(--subtext-1)" : "var(--overlay-1)"}
				style:border-bottom={view === "activity" ? `3px solid var(--lavender)` : "3px solid transparent"}
				onclick={gotoView("activity")}
			>
				Activity
			</button>
			<button
				style:color={view === "list" ? "var(--subtext-1)" : "var(--overlay-1)"}
				style:border-bottom={view === "list" ? `3px solid var(--lavender)` : "3px solid transparent"}
				onclick={gotoView("list")}
			>
				List
			</button>
			<button
				style:color={view === "discussion" ? "var(--subtext-1)" : "var(--overlay-1)"}
				style:border-bottom={view === "discussion" ? `3px solid var(--lavender)` : "3px solid transparent"}
				onclick={gotoView("discussion")}
			>
				Discussion
			</button>
		</div>
	</div>

	{#await posts}
		<div class="loading">
			<h1>Loading posts...</h1>
			<p>We promise Wallflower will be faster soon.</p>
		</div>
	{:then posts}
		{#if view === "discussion"}
			{#each posts.filter(post => post.type === "general") as post}
				<AnyPost {post} />
			{/each}
		{:else if view === "books"}
			<div class="ratings">
				<div bind:this={ratingOptions} class="rating-options">
					<span style:color="var(--overlay-1)">
						<label for="show-full-reviews">Show full reviews</label>
						<RadioInput id="show-full-reviews" size={0.5} bind:on={showFullReviews} />
					</span>
					<span style:color="var(--overlay-1)">
						<label for="change-rating-sort">{ratingSortName}</label>
						<button onclick={event => ratingSortMenu.open(event)} id="change-rating-sort">
							<SortIcon stroke="var(--overlay-1)" style="width: 1.5rem; height: 1.5rem;" />
						</button>
					</span>
					<ContextMenu bind:this={ratingSortMenu}>
						<button onclick={sortRatingsBy("best")}>
							Highest Rated
						</button>
						<button onclick={sortRatingsBy("recent")}>
							Recently Finished
						</button>
					</ContextMenu>
				</div>
				{#await ratings then ratings}
					{#each ratings as post (post.id)}
						{#if showFullReviews}
							<AnyPost {post} />
						{:else}
							<BookListing book={post.books[0]} rating={post.rating} user={profileUser} onclick={() => goto(`/post/${post.id}`)} />
						{/if}
					{/each}
				{/await}
			</div>
		{:else if view === "activity"}
			{#each posts.filter(post => post.type === "update") as post}
				<AnyPost {post} />
			{/each}
		{:else if view === "list"}
			<div class="ratings">
				{#await readingList then readingList}
					{#each readingList as book}
						<BookListing {book} user={profileUser} />
					{/each}
				{/await}
			</div>
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
		color: var(--surface-2);
	}

	.rating-options {
		background: var(--base);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid var(--surface-0);
		position: sticky;
		top: 0px;
		z-index: 9999;

		label {
			font-size: 0.85rem;
		}

		> * {
			display: flex;
			align-items: center;
			gap: 1rem;

			button {
				height: 1.5rem;
			}
		}
	}

	.dot {
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 50%;
		background-color: var(--surface-2);
	}

	.loading {
		padding-top: 2rem;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-size: 1.5rem;
			color: var(--subtext-1);
		}

		p {
			font-size: 0.85rem;
			color: var(--overlay-1);
		}
	}

	section {
		min-height: 100%;
		position: relative;
		background-color: var(--crust);
	}

	.follows {
		border-radius: 100vmax;
		font-size: 0.8rem;
		text-decoration: none;
		display: flex;
		padding-left: 1rem;
		gap: 1rem;
		color: var(--overlay-1);
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
		color: var(--overlay-1);

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

		> a {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			margin-right: 1rem;
			color: var(--overlay-1);
			text-decoration: none;
		}
	}

	.profile-books {
		display: grid;
		grid-template-columns: 50% 50%;
		overflow: hidden;
		gap: 1rem;

		> a {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: var(--overlay-1);
			text-decoration: none;
		}
	}

	.profile-line-1 {
		display: flex;
		margin-left: 1rem;

		h1 {
			font-size: 1.25rem;
			color: var(--text);
		}

		h2 {
			font-size: 1rem;
			font-weight: normal;
			color: var(--surface-2);
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
			background-image: linear-gradient(to bottom right, var(--lavender), var(--blue));
			color: var(--crust);
		}
	}

	.profile-picture {
		margin-left: 1rem;
		border-radius: 50%;
		width: 6rem;
		height: 6rem;
		margin-top: 4.7rem;
		z-index: 2;
		border: 0.5rem solid var(--crust);
	}

	.name {
		flex-grow: 1;
		color: var(--subtext-1);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: -0.5rem;
	}
</style>
