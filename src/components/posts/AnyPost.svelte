<script lang="ts">
	import type { Post } from "../../api/bookapi";
	import theme from "../../themes/theme.svelte";
	import Rating from "./Rating.svelte";
	import Discussion from "./Discussion.svelte";
	import { goto } from "$app/navigation";
	import BookUpdate from "./BookUpdate.svelte";

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
</script>

<section style:border-bottom={`1px solid ${theme().textDark}`}>
	<div class="profile">
		<a
			style:background-image={`url("${post.poster.picture}")`}
			href={`/profile/${post.poster.username}`}
		></a>
	</div>

	<div class="content-outer">
		<span class="user">
			<h2 style:color={theme().textBright}>{post.poster.displayName}</h2>
			<h3 style:color={theme().textDim}>{`@${post.poster.username}`}</h3>
			<h3 onclick={toggleTimeFormat} style:color={theme().textDim}>
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
	</div>
</section>

<style>
	section {
		padding-top: 1rem;
		padding-right: 1rem;
		padding-bottom: 2rem;
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

		> *:last-child {
			margin-left: auto;
			cursor: pointer;
			font-size: 0.85rem;
		}
	}
</style>
