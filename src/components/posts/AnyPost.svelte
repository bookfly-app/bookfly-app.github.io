<script lang="ts">
	import theme from "../../themes/theme.svelte";
	import Rating from "./Rating.svelte";
	import Discussion from "./Discussion.svelte";
	import BookUpdate from "./BookUpdate.svelte";
	import { getUser } from "../../backend/auth.svelte";
	import DotMenuIcon from "../../assets/images/icons/DotMenuIcon.svelte";
	import EyeIcon from "../../assets/images/icons/EyeIcon.svelte";
	import HeartIcon from "../../assets/images/icons/HeartIcon.svelte";
	import type { Post } from "../../api/postapi";
	import ShareIcon from "../../assets/images/icons/ShareIcon.svelte";
	import CommentIcon from "../../assets/images/icons/CommentIcon.svelte";
	import { goto } from "$app/navigation";

	let { post }: { post: Post } = $props();

	let elapsedSeconds = (Date.now() - post.timestamp) / 1000;

	let elapsedTime = $state("");
	let timeFormat: "relative" | "absolute" = "relative";

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

	function toggleTimeFormat() {
		if (timeFormat == "relative") {
			let date = new Date(post.timestamp);
			elapsedTime = `${date.toLocaleDateString()} @ ${date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")}`;
			timeFormat = "absolute";
		} else {
			if (elapsedSeconds < 60) {
				elapsedTime = `${Math.floor(elapsedSeconds)}s ago`;
			} else if (elapsedSeconds < 60 * 60) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60)}m ago`;
			} else if (elapsedSeconds < 60 * 60 * 24) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60)}h ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 7) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 24)}d ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 30) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 7)}w ago`;
			} else if (elapsedSeconds < 60 * 60 * 24 * 365) {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 30)}m ago`;
			} else {
				elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 365)}y ago`;
			}
			timeFormat = "relative";
		}
	}

	let isCurrentUser = $derived(getUser()?.id === post.poster.id);
</script>

<section style:border-bottom={`1px solid ${theme().textDark}`}>
	<button onclick={() => goto(`/post/${post.id}`)} class="profile">
		<a
			style:background-image={`url("${post.poster.picture}")`}
			href={`/profile/${post.poster.username}`}
		></a>
	</button>

	<div class="content-outer">
		<span class="user">
			<h2 style:color={theme().textBright}>{post.poster.displayName}</h2>
			<h3 style:color={theme().textDim}>{`@${post.poster.username}`}</h3>
			<h3
				class="timestamp"
				onclick={toggleTimeFormat}
				style:color={theme().textDim}
			>
				{elapsedTime}
			</h3>
		</span>
		{#if post.type === "rating"}
			<Rating
				isbn={post.books[0].isbn}
				rating={post.rating}
				review={post.body}
				user={post.poster}
			/>
		{:else if post.type === "general"}
			<Discussion body={post.body} images={post.pictures} />
		{:else if post.type === "update"}
			<BookUpdate
				body={post.body}
				isbn={post.books[0].isbn}
				user={post.poster}
			/>
		{/if}
		<div class="stats">
			<span style:color={theme().textDim}>
				<EyeIcon stroke={theme().textDim} style="width: 1rem;" />
				{post.views.length}
			</span>
			<button style:color={theme().textDim}>
				<HeartIcon stroke={theme().textDim} style="width: 1rem;" />
				{post.likes.length}
			</button>
			<button style:color={theme().textDim}>
				<CommentIcon stroke={theme().textDim} style="width: 1rem;" />
				{post.comments.length}
			</button>
			<button
				onclick={() =>
					navigator.clipboard.writeText(
						`bookfly.com/post/${post.id}`,
					)}
			>
				<ShareIcon stroke={theme().textDim} style="width: 1rem;" />
			</button>
			<button>
				<DotMenuIcon
					stroke={theme().textDull}
					style="width: 1.25rem;"
				/>
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
		}
	}

	section {
		padding-top: 1rem;
		padding-right: 1rem;
		padding-bottom: 0.5rem;
		display: flex;
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
			margin-bottom: 4rem;
			background-size: cover;
		}
	}

	.user {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		h2 {
			font-size: 1rem;
		}

		h3 {
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
