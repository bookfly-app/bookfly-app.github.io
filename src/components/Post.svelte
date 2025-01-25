<script lang="ts">
	import { goto } from "$app/navigation";
	import BookIcon from "../assets/images/icons/BookIcon.svelte";
	import CommentIcon from "../assets/images/icons/CommentIcon.svelte";
	import EyeIcon from "../assets/images/icons/EyeIcon.svelte";
	import FilledHeartIcon from "../assets/images/icons/FilledHeartIcon.svelte";
	import HeartIcon from "../assets/images/icons/HeartIcon.svelte";
	import RepostIcon from "../assets/images/icons/RepostIcon.svelte";
	import ShareIcon from "../assets/images/icons/ShareIcon.svelte";
	import Star from "../assets/images/icons/Star.svelte";
	import theme from "../themes/theme.svelte";

	let { post } = $props();

	let elapsedSeconds = (Date.now() - post.date) / 1000;

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
		elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 7)}w ago`;
	} else if (elapsedSeconds < 60 * 60 * 24 * 365) {
		elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 30)}m ago`;
	} else {
		elapsedTime = `${Math.floor(elapsedSeconds / 60 / 60 / 365)}y ago`;
	}

	function toggleTimeFormat() {
		if (timeFormat == "relative") {
			let date = new Date(post.date);
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

	let liked = $state(post.author.likes.includes(post.id));
	let likes = $state(post.likes);

	function toggleLike() {
		liked = !liked;
		if (liked) {
			likes += 1;
		} else {
			likes -= 1;
		}
	}
</script>

<!-- Main content -->
<section>
	<div class="profile">
		<button
			style:background-image={`url("${post.author.picture}")`}
			onclick={() => goto(`/profile/${post.author.username}`)}
		></button>
	</div>
	<div class="post">
		<!-- Username, timestamp -->
		<span class="user">
			<h2 style:color={theme().textBright}>{post.author.displayName}</h2>
			<h3 style:color={theme().textDim}>{`@${post.author.username}`}</h3>
			<h4
				style="cursor: default;"
				onmouseenter={toggleTimeFormat}
				onmouseleave={toggleTimeFormat}
				style:color={theme().textDim}
			>
				{elapsedTime}
			</h4>
		</span>

		<!-- Post Body -->
		<p style:color={theme().text}>{post.body}</p>

		<!-- Post Image -->
		<div class="image">
			<button class="book-info" style:background={theme().backgroundDark}>
				<span>
					<BookIcon
						stroke="#AAAADD"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<!-- {book.title} by {book.author} -->
				</span>
				<span>
					<Star
						stroke="#AAAADD"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<!-- {book.rating} -->
				</span>
			</button>
			<div
				class="image-content"
				style:background-image={`url("${post.pictures[0]}")`}
			></div>
		</div>

		<!-- Post Statistics (views, likes, etc.) -->
		<div class="post-info">
			<span>
				<EyeIcon
					stroke="#777799"
					style="width: 1.3rem; height: 1.3rem;"
				/>
				{post.views}
			</span>
			<span style:color={liked ? "#FF88AA" : theme().textDim}>
				{#if liked}
					<FilledHeartIcon
						stroke="#FF88AA"
						style="width: 1.3rem; height: 1.3rem; cursor: pointer;"
						onclick={toggleLike}
					/>
				{:else}
					<HeartIcon
						stroke={theme().textDim}
						style="width: 1.3rem; height: 1.3rem; cursor: pointer;"
						onclick={toggleLike}
					/>
				{/if}
				{likes}
			</span>
			<span>
				<CommentIcon
					stroke={theme().textDim}
					style="width: 1.1rem; height: 1.1rem;"
				/>
				{post.comments}
			</span>
			<span>
				<RepostIcon
					stroke={theme().textDim}
					style="width: 1.5rem; height: 1.5rem;"
				/>
				{post.reposts}
			</span>
			<span>
				<ShareIcon
					stroke="#777799"
					style="width: 1.1rem; height: 1.1rem;"
				/>
				{post.shares}
			</span>
		</div>
	</div>
</section>

<style>
	.post-info {
		display: flex;
		justify-content: space-between;

		span {
			display: flex;
			gap: 0.3rem;
			align-items: center;
		}
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;

		button {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin-right: 1rem;
			margin-left: 1rem;
			margin-bottom: 4rem;
			background-size: cover;
		}
	}

	section {
		padding-top: 2rem;
		padding-right: 2rem;
		display: flex;
		border-bottom: 1px solid var(--surface-0);
		padding-bottom: 1rem;
	}

	.post {
		display: flex;
		flex-direction: column;
	}

	.user {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		h2 {
			font-size: 1.25rem;
		}

		h3,
		h4 {
			font-weight: normal;
		}

		h4 {
			font-size: 1rem;
		}

		*:last-child {
			margin-left: auto;
		}
	}

	.image {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		width: 75vw;
		border-radius: 1rem;
		height: 15rem;
		overflow: hidden;

		.book-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 3rem;
			padding-left: 1rem;
			padding-right: 1rem;

			span {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}

		.image-content {
			width: 100%;
			height: calc(100% - 3rem);
			background-size: cover;
			background-position: center;
		}
	}
</style>
