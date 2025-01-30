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
	import ContextMenu from "../ContextMenu.svelte";
	import Notification from "../Notification.svelte";
	import BookUpdate from "./BookUpdate.svelte";
	import Discussion from "./Discussion.svelte";
	import Rating from "./Rating.svelte";
	import Reply from "./Reply.svelte";

	let { post, postpage }: { post: Post; postpage?: boolean } = $props();

	let menu: ContextMenu;

	let elapsedSeconds = (Date.now() - post.timestamp) / 1000;
	let views = getPostViews(post);

	let elapsedTime = $state("");
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
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24 / 30)}m ago`;
			} else {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24 / 365)}y ago`;
			}
			timeFormat = "relative";
		}
	}

	// Set the initial time to relative
	toggleTimeFormat();

	let isCurrentUser = $derived(user()?.id === post.poster.id);
	let parent = post.type === "reply" ? getPostFromId(post.parent) : Promise.resolve(null);

	async function clickPost(event: MouseEvent) {
		if ((event.target as HTMLElement).closest("button") || (event.target as HTMLElement).closest("a")) {
			return;
		}

		await goToPost();
	}

	async function goToPost() {
		if (post.type === "reply") {
			goto(`/post/${(await parent)!.id}`);
		} else {
			goto(`/post/${post.id}`);
		}
	}

	/** The number of likes on the post */
	let likes = $state(getLikes(post).then(likes => likes.length));
	/** The number of replies on the post */
	let comments = $state(getReplies(post).then(replies => replies.length));
	/** The number of shares on the post */
	let shares = $state(getShares(post).then(shares => shares.length));

	let liked = $state(didLike(post));
	let shared = $state(didShare(post));
	let commented = $state(didComment(post));

	async function toggleLike() {
		liked = liked.then(liked => !liked);
		if (await liked) {
			likePost(post);
			likes = likes.then(likes => likes + 1);
		} else {
			unlikePost(post);
			likes = likes.then(likes => likes - 1);
		}
	}

	let isDeleted = $state(false);

	/**
	 * Deletes this post. This deletes it internally in the database and
	 * updates the UI to hide the post.
	 */
	async function deleteAndUpdate() {
		isDeleted = true;
		await deletePost(post);
	}

	let shareNotification: Notification;

	/**
	 * Called when the share button on a post is clicked.
	 *
	 * This does four things:
	 * - Copies the post link to the user's clipboard
	 * - Shows the share notification
	 * - Stores in the database that this user shared this post
	 * - Updates the UI to reflect the shared post
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
	style:border-bottom={`1px solid ${theme().textDark}`}
>
	<div class="profile">
		<a aria-label="Go to poster's profile" style:background-image={`url("${post.poster.picture}")`} href={`/profile/${post.poster.username}`}></a>
	</div>

	<div class="content-outer">
		<span class="user">
			<a href="/profile/{post.poster.username}" class="display-name" style:color={theme().textBright}>{post.poster.displayName}</a>
			<a href="/profile/{post.poster.username}" class="username" style:color={theme().textDim}>{`@${post.poster.username}`}</a>
			<button class="timestamp" onclick={toggleTimeFormat} style:color={theme().textDim}>
				{elapsedTime}
			</button>
		</span>
		{#if post.type === "reply"}
			{#await parent then parent}
				<span style:color={theme().textDim} class="replying-to">
					Replying to <a href="/profile/{parent!.poster.username}">@{parent!.poster.username}</a>
				</span>
			{/await}
		{/if}

		{#if post.type === "rating"}
			<Rating isbn={post.books[0].isbn} rating={post.rating} review={post.body} user={post.poster} />
		{:else if post.type === "general"}
			<Discussion body={post.body} images={post.pictures} />
		{:else if post.type === "reply"}
			<Reply body={post.body} images={post.pictures} parent={post.parent} />
		{:else if post.type === "update"}
			<BookUpdate body={post.body} isbn={post.books[0].isbn} user={post.poster} />
		{/if}
		<div class="stats">
			<span style:color="#88FFDD">
				<EyeIcon stroke="#88FFDD" style="width: 1rem;" />
				{#await views then views}
					{views}
				{/await}
			</span>
			{#await likes then likes}
				{#await liked then liked}
					<button onclick={toggleLike} style:color={liked ? "#FFAACC" : theme().textDim}>
						<HeartIcon fill={liked ? "#FFAACC" : "none"} stroke={liked ? "#FFAACC" : theme().textDim} style="width: 1rem;" />
						{likes}
					</button>
				{/await}
			{/await}
			{#await commented then commented}
				{#await comments then comments}
					<button onclick={goToPost} style:color={commented ? "#99BBFF" : theme().textDim}>
						<CommentIcon stroke={commented ? "#99BBFF" : theme().textDim} style="width: 1rem;" />
						{comments}
					</button>
				{/await}
			{/await}
			{#await shares then shares}
				{#await shared then shared}
					<button style:color={shared ? "#BB99FF" : theme().textDim} onclick={share}>
						<ShareIcon stroke={shared ? "#BB99FF" : theme().textDim} style="width: 0.85rem;" />
						{shares}
						<Notification message="Link copied!" bind:this={shareNotification} />
					</button>
				{/await}
			{/await}
			<button onclick={event => menu.open(event)}>
				<DotMenuIcon stroke={theme().textDull} style="width: 1.25rem;" />
				<ContextMenu bind:this={menu}>
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
