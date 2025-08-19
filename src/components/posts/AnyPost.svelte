<script lang="ts">
	import { goto } from "$app/navigation";
	import { getBook } from "../../api/bookapi";
	import {
		deletePost,
		didComment,
		didLike,
		didShare,
		getLikes,
		getPostFromId,
		getPostViews,
		getReplies,
		getShares,
		likePost,
		sharePost,
		unlikePost,
		type InternalPost,
	} from "../../api/postapi";
	import { getFile } from "../../api/storageapi";
	import { getUserFromId } from "../../api/userapi";
	import CommentIcon from "../../assets/images/icons/CommentIcon.svelte";
	import DotMenuIcon from "../../assets/images/icons/DotMenuIcon.svelte";
	import EyeIcon from "../../assets/images/icons/EyeIcon.svelte";
	import HeartIcon from "../../assets/images/icons/HeartIcon.svelte";
	import ShareIcon from "../../assets/images/icons/ShareIcon.svelte";
	import { user } from "../../backend/auth.svelte";
	import theme from "../../themes/theme.svelte";
	import Badges from "../Badges.svelte";
	import ContextMenu from "../ContextMenu.svelte";
	import Notification from "../Notification.svelte";
	import BookUpdate from "./BookUpdate.svelte";
	import Discussion from "./Discussion.svelte";
	import Rating from "./Rating.svelte";
	import Reply from "./Reply.svelte";

	let { post, postpage }: { post: InternalPost; postpage?: boolean; } = $props();

	/**
	 * The context menu that appears when clicking the post actions button, which
	 * allows things like deleting the post (if you're the poster), reporting the
	 * post, etc.
	 */
	let actionsMenu: ContextMenu;

	/**
	 * The amount of seconds that have elapsed since the post was posted.
	 */
	let elapsedSeconds = (Date.now() - post.timestamp) / 1000;

	/**
	 * The timestamp on the post as a string. This will either be a relative
	 * timestamp (such as `3h ago`) or an absolute timestamp (such as
	 * `1/30/2025 @ 10:25AM`); The specific format is determined by `timeFormat`
	 * and toggled with `toggleTimeFormat()` below.
	 */
	let elapsedTime = $state("");

	/**
	 * The format of the posting time shown on the post, either:
	 *
	 * - `"relative"`: Such as "3h ago"
	 * - `"absolute"`: Such as `1/30/2025 @ 10:22AM`
	 *
	 * The time format is switched in `toggleTimeFormat()` when the post's timestamp is
	 * clicked. The default is `"relative"`, but the timestamp UI element starts empty, (see
	 * `elapsedTime` above), so we set this to `"absolute"` and call `toggleTimeFormat()` once
	 * to get the initial relative text.
	 */
	let timeFormat: "relative" | "absolute" = "absolute";

	/**
	 * Switches the timestamp on the post between relative time (like "3h ago") and
	 * absolute time (like "1/29/2025 @ 5:00PM"). The result is stored in `elapsedTime`
	 * and the UI is automatically refreshed to show the new time display.
	 */
	function toggleTimeFormat() {
		// Switch from relative to absolute
		if (timeFormat == "relative") {
			let date = new Date(post.timestamp);
			elapsedTime = `${date.toLocaleDateString()} @ ${date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")}`;
			timeFormat = "absolute";
		}

		// Switch from absolute to relative
		else {
			if (elapsedSeconds < 60) {
				elapsedTime = `${Math.floor(elapsedSeconds)}s ago`;
			} else if (elapsedSeconds < 60 * 60) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60)}m ago`;
			} else if (elapsedSeconds < 60 * 60 * 24) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60)}h ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 7) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24)}d ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 30) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24 / 7)}w ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 365) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24 / 30)}mo ago`;
			} else {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24 / 365)}y ago`;
			}
			timeFormat = "relative";
		}
	}

	// Set the initial time to relative
	toggleTimeFormat();

	/** Whether this post was posted by the current user. */
	let isCurrentUser = $derived(user()?.id === post.poster);

	/**
	 * The "parent" of this post. If this post is a reply, this is the post being replied to.
	 * If this post isn't a reply, it's `null`.
	 */
	let parent = post.type === "reply" ? getPostFromId(post.parent) : Promise.resolve(null);

	/**
	 * Called when the post is clicked. If an interactible part of the post is clicked,
	 * such as a link or button, this will do nothing and let the link/button handle the
	 * interaction. If a non-interactible part of the post was clicked, such as plain text
	 * or empty space, this will open the post's page.
	 *
	 * @param event The click event fired from clicking the post.
	 *
	 * @returns A promise that resolves when the post page opens, if going to the post page.
	 */
	async function clickPost(event: MouseEvent) {
		if ((event.target as HTMLElement).closest("button") || (event.target as HTMLElement).closest("a")) {
			return;
		}

		await goToPost();
	}

	/**
	 * Called when the post is clicked on. This will open the post, or if it's a reply,
	 * open the parent post.
	 */
	async function goToPost() {
		if (post.type === "reply") {
			await goto(`/post/${(await parent)!.id}`);
		} else {
			await goto(`/post/${post.id}`);
		}
	}

	/** The number of views on the post */
	let views = getPostViews(post);
	/** The number of likes on the post */
	let likes = $state(getLikes(post).then(likes => likes.length));
	/** The number of replies on the post */
	let comments = $state(getReplies(post).then(replies => replies.length));
	/** The number of shares on the post */
	let shares = $state(getShares(post).then(shares => shares.length + ((!user() && didShare(post)) ? 1 : 0)));

	/** Whether the current user liked the post. */
	let liked = $state(didLike(post));
	/** Whether the current user shared the post. */
	let shared = $state(didShare(post));
	/** Whether the current user replied to the post. */
	let commented = $state(didComment(post));

	/**
	 * Toggles whether the user has liked this post. This is called when the user
	 * presses the like button on a post. The UI will be updated to reflect whether
	 * they have liked the post, and the database will be updated to reflect that.
	 *
	 * @returns A promise that resolves when the database is finished updating.
	 */
	async function toggleLike() {
		if (!user()) return;

		liked = !liked;

		// Liking the post
		if (liked) {
			likes = likes.then(likes => likes + 1);
			await likePost(post);
		}

		// Unliking the post
		else {
			likes = likes.then(likes => likes - 1);
			await unlikePost(post);
		}
	}

	/**
	 * Whether or not this post has been deleted. This is used to hide the post
	 * in the UI when it's deleted, since deleting it in the database won't immediately
	 * update the UI.
	 */
	let isDeleted = $state(false);

	/**
	 * Deletes this post. This deletes it internally in the database and
	 * updates the UI to hide the post.
	 */
	async function deleteAndUpdate() {
		isDeleted = true;
		await deletePost(post);
	}

	// svelte-ignore non_reactive_update
	let shareNotification: Notification;

	/**
	 * Called when the share button on a post is clicked.
	 *
	 * This does four things:
	 * - Copies the post link to the user's clipboard
	 * - Shows the share notification
	 * - Stores in the database that this user shared this post
	 * - Updates the UI to reflect the shared post
	 *
	 * @returns A promise that resolves when the database has been updated to
	 * reflect the shared post. The This needn't be awaited to update the UI.
	 */
	async function share() {
		navigator.clipboard.writeText(`https://wallflower.land/post/${post.id}`);
		shareNotification.show();
		if (!shared) shares = shares.then(shares => shares + 1);
		shared = true;

		if (!user()) {
			let shared = localStorage.getItem("shared-posts");
			if (!shared) shared = "[]";
			let sharedPosts: string[] = JSON.parse(shared);
			sharedPosts = Array.from(new Set([...sharedPosts, post.id]));
			localStorage.setItem("shared-posts", JSON.stringify(sharedPosts));
		}

		await sharePost(post);
	}

	const poster = getUserFromId(post.poster);
	const books = post.books.map(isbn => getBook(isbn));
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<section
	style:background={postpage ? "var(--crust)" : "var(--base)"}
	style:display={isDeleted ? "none" : "flex"}
	tabindex="0"
	role="link"
	onclick={clickPost}
	style:border={`1px solid ${theme().textDark}`}
>
	<!-- Poster's profile picture -->
	<div class="profile">
		{#await poster}
			<div class="no-picture"></div>
		{:then poster}
			{#await getFile(poster.picture)}
				<div class="no-picture"></div>
			{:then pfp}
				<a aria-label="Go to poster's profile" style:background-image={`url("${pfp}")`} href={`/profile/${poster.username}`}></a>
			{/await}
		{/await}
	</div>

	<div class="content-outer">
		<!-- User info: Display Name & Username -->
		{#await poster}
			<span class="user">
				<span class="missing-username" style:color={theme().textBright}></span>

				<button class="timestamp" onclick={toggleTimeFormat} style:color={theme().textDim}>
					{elapsedTime}
				</button>
			</span>
		{:then poster}
			<span class="user">
				<a href="/profile/{poster.username}" class="display-name" style:color={theme().textBright}>{poster.displayName}</a>
				<a href="/profile/{poster.username}" class="username" style:color={theme().textDim}>{`@${poster.username}`}</a>

				<Badges forUser={poster} size={0.7} />

				<button class="timestamp" onclick={toggleTimeFormat} style:color={theme().textDim}>
					{elapsedTime}
				</button>
			</span>
		{/await}

		<!-- Reply: Show "replying to @user" text -->
		{#if post.type === "reply"}
			<span style:color={theme().textDim} class="replying-to">
				Replying to
				{#await parent then parent}
					{#await getUserFromId(parent!.poster)}
						<div class="loading-replying"></div>
					{:then parentPoster}
						<a href="/profile/{parentPoster.username}">@{parentPoster.username}</a>
					{/await}
				{/await}
			</span>
		{/if}

		<!-- The post content itself -->
		{#if post.type === "rating"}
			{#await books[0] then book}
				<Rating isbn={book.isbn} rating={post.rating} review={post.body} user={post.poster} />
			{/await}
		{:else if post.type === "general"}
			<Discussion body={post.body} images={post.pictures} />
		{:else if post.type === "reply"}
			<Reply body={post.body} images={post.pictures} />
		{:else if post.type === "update"}
			{#await books[0] then book}
				<BookUpdate updateType={post.updateType} body={post.body} isbn={book.isbn} user={post.poster} />
			{/await}
		{/if}

		<!-- Post stats (views, likes, replies, etc.) -->
		<div class="stats">
			<!-- Views Button -->
			<span style:color="#88FFDD">
				<EyeIcon stroke="#88FFDD" style="width: 1rem;" />
				{#await views}
					0
				{:then views}
					{views}
				{/await}
			</span>

			<!-- Like Button -->
			<button onclick={toggleLike} style:color={liked ? "#FFAACC" : theme().textDim}>
				<HeartIcon fill={liked ? "#FFAACC" : "none"} stroke={liked ? "#FFAACC" : theme().textDim} style="width: 1rem;" />
				{#await likes}
					0
				{:then likes}
					{likes}
				{/await}
			</button>

			<!-- Reply Button -->
			{#await commented}
				<button onclick={goToPost} style:color="var(--overlay-1)">
					<CommentIcon stroke="var(--overlay-1)" style="width: 1rem;" />
					0
				</button>
			{:then commented}
				<button onclick={goToPost} style:color={commented ? "#99BBFF" : theme().textDim}>
					<CommentIcon stroke={commented ? "#99BBFF" : theme().textDim} style="width: 1rem;" />
					{#await comments}
						0
					{:then comments}
						{comments}
					{/await}
				</button>
			{/await}

			<!-- Share Button -->
				<button style:color={shared ? "#BB99FF" : theme().textDim} onclick={share}>
					<ShareIcon stroke={shared ? "#BB99FF" : theme().textDim} style="width: 0.85rem;" />
					{#await shares}
						0
					{:then shares}
						{shares}
					{/await}
					<Notification message="Link copied!" bind:this={shareNotification} />
				</button>

			<!-- Post Actions Button -->
			<button onclick={event => actionsMenu.open(event)}>
				<DotMenuIcon stroke={theme().textDull} style="width: 1.25rem;" />
				<ContextMenu bind:this={actionsMenu}>
					{#if isCurrentUser}
						<button onclick={deleteAndUpdate} style:background={theme().backgroundDim} style:color={theme().textBright}>
							Delete Post
						</button>
					{:else}
						<button style:background={theme().backgroundDim} style:color={theme().textBright}>Report</button>
					{/if}
				</ContextMenu>
			</button>
		</div>
	</div>
</section>

<style>
	.stats {
		display: flex;
		justify-content: space-between;
		padding-top: 1rem;
		padding-right: 1rem;
		align-items: center;

		> * {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.85rem;
			text-decoration: none;
		}
	}

	.replying-to {
		font-size: 0.85rem;
		display: flex;
		gap: 0.25rem;
		align-items: center;

		.loading-replying {
			height: 0.70rem;
			width: 4rem;
			border-radius: 100vmax;
			background-color: var(--surface-0);
		}

		a {
			text-decoration: none;
			color: cornflowerblue;
		}
	}

	section {
		padding-top: 1rem;
		padding-right: 1rem;
		padding-bottom: 0.5rem;
		display: flex;
		cursor: pointer;
		width: 100%;
		top: 0px;
	}

	.content-outer {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;

		.no-picture {
			background-color: var(--surface-2);
		}

		a, .no-picture {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			margin-right: 1rem;
			margin-left: 1rem;
			background-size: cover;
		}
	}

	.user {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		margin-bottom: 0.25rem;

		a {
			text-decoration: none;
		}

		.display-name {
			font-size: 1rem;
		}

		.username,
		button {
			font-weight: normal;
			font-size: 1rem;
		}

		.missing-username {
			height: 1.35rem;
			border-radius: 100vmax;
			width: 8rem;
			background-color: var(--surface-0);
		}

		.timestamp {
			font-size: 0.85rem;
			margin-left: auto;
			cursor: pointer;
		}
	}
</style>
