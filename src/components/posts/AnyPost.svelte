<script lang="ts">
	import { goto } from "$app/navigation";
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
		type Post,
	} from "../../api/postapi";
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

	let { post, postpage }: { post: Post; postpage?: boolean } = $props();

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
	let isCurrentUser = $derived(user()?.id === post.poster.id);

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
	let shares = $state(getShares(post).then(shares => shares.length));

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
		liked = liked.then(liked => !liked);

		// Liking the post
		if (await liked) {
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
		navigator.clipboard.writeText(`https://bookfly-app.github.io/post/${post.id}`);
		shareNotification.show();
		if (!(await shared)) shares = shares.then(shares => shares + 1);
		shared = Promise.resolve(true);
		await sharePost(post);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<section
	style:background={postpage ? theme().backgroundDark : "transparent"}
	style:display={isDeleted ? "none" : "flex"}
	tabindex="0"
	role="link"
	onclick={clickPost}
	style:border={`1px solid ${theme().textDark}`}
>
	<!-- Poster's profile picture -->
	<div class="profile">
		<a aria-label="Go to poster's profile" style:background-image={`url("${post.poster.picture}")`} href={`/profile/${post.poster.username}`}></a>
	</div>

	<div class="content-outer">
		<!-- User info: Display Name & Username -->
		<span class="user">
			<a href="/profile/{post.poster.username}" class="display-name" style:color={theme().textBright}>{post.poster.displayName}</a>
			<a href="/profile/{post.poster.username}" class="username" style:color={theme().textDim}>{`@${post.poster.username}`}</a>

			<Badges forUser={post.poster} size={0.7} />

			<button class="timestamp" onclick={toggleTimeFormat} style:color={theme().textDim}>
				{elapsedTime}
			</button>
		</span>

		<!-- Reply: Show "replying to @user" text -->
		{#if post.type === "reply"}
			{#await parent then parent}
				<span style:color={theme().textDim} class="replying-to">
					Replying to <a href="/profile/{parent!.poster.username}">@{parent!.poster.username}</a>
				</span>
			{/await}
		{/if}

		<!-- The post content itself -->
		{#if post.type === "rating"}
			<Rating isbn={post.books[0].isbn} rating={post.rating} review={post.body} user={post.poster} />
		{:else if post.type === "general"}
			<Discussion body={post.body} images={post.pictures} />
		{:else if post.type === "reply"}
			<Reply body={post.body} images={post.pictures} parent={post.parent} />
		{:else if post.type === "update"}
			<BookUpdate updateType={post.updateType} body={post.body} isbn={post.books[0].isbn} user={post.poster} />
		{/if}

		<!-- Post stats (views, likes, replies, etc.) -->
		<div class="stats">
			<!-- Views Button -->
			<span style:color="#88FFDD">
				<EyeIcon stroke="#88FFDD" style="width: 1rem;" />
				{#await views then views}
					{views}
				{/await}
			</span>

			<!-- Like Button -->
			{#await likes then likes}
				{#await liked then liked}
					<button onclick={toggleLike} style:color={liked ? "#FFAACC" : theme().textDim}>
						<HeartIcon fill={liked ? "#FFAACC" : "none"} stroke={liked ? "#FFAACC" : theme().textDim} style="width: 1rem;" />
						{likes}
					</button>
				{/await}
			{/await}

			<!-- Reply Button -->
			{#await commented then commented}
				{#await comments then comments}
					<button onclick={goToPost} style:color={commented ? "#99BBFF" : theme().textDim}>
						<CommentIcon stroke={commented ? "#99BBFF" : theme().textDim} style="width: 1rem;" />
						{comments}
					</button>
				{/await}
			{/await}

			<!-- Share Button -->
			{#await shares then shares}
				{#await shared then shared}
					<button style:color={shared ? "#BB99FF" : theme().textDim} onclick={share}>
						<ShareIcon stroke={shared ? "#BB99FF" : theme().textDim} style="width: 0.85rem;" />
						{shares}
						<Notification message="Link copied!" bind:this={shareNotification} />
					</button>
				{/await}
			{/await}

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
		padding-top: 0.5rem;
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

		a {
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

		.timestamp {
			font-size: 0.85rem;
			margin-left: auto;
			cursor: pointer;
		}
	}
</style>
