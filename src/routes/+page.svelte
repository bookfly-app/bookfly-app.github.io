<script lang="ts">
	import { getFollowedPosts, getForYouPosts } from "../api/postapi";
	import CatIcon from "../assets/images/icons/CatIcon.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import New from "../components/New.svelte";
	import Page from "../components/Page.svelte";
	import AnyPost from "../components/posts/AnyPost.svelte";
	import Sidebar from "../components/Sidebar.svelte";
	import Wallflower from "../assets/images/icons/Wallflower.svelte";
	import { getFile } from "../api/storageapi";

	let view: "following" | "for you" = $state(user() ? "following" : "for you");

	let followedPosts = $derived(user() ? getFollowedPosts(user()!, true).then(posts => posts.toSorted((a, b) => b.timestamp - a.timestamp)) : Promise.resolve([]));
	let forYouPosts = getForYouPosts(user()!);

	let sidebar: Sidebar = $state(null!);
	let spinLogo = $state(false);

	function spin() {
		if (!spinLogo) {
			spinLogo = true;
			setTimeout(() => spinLogo = false, 2000);
		}
	}
</script>

<Page bind:sidebar type="home">
	<nav>
		<div class="banner">
			<button onclick={() => sidebar.show()} aria-label="Open sidebar">
				{#if user()}
					{#await getFile(user()!.picture) then pfp}
						<img alt="Your profile" src={pfp} class="profile-link" />
					{/await}
				{:else}
					<PersonIcon stroke="var(--overlay-1)" style="width: 2.5rem;" />
				{/if}
			</button>

			<button onclick={spin}>
				<Wallflower class={spinLogo ? "spin" : ""} style="width: 2rem; height: 2rem;" stroke="var(--overlay-1)" />
			</button>

			<a class="search" href="/search">
				<SearchIcon style="width: 2rem; height: 2rem;" stroke="var(--subtext-1)" />
			</a>
		</div>
	</nav>

	<section class="content">
		<div class="views">
			{#if user()}
				<button
					style:color={view === "following" ? "var(--lavender)" : "var(--overlay-1)"}
					style:border-bottom-color={view === "following" ? "var(--lavender)" : "transparent"}
					onclick={() => (view = "following")}
				>
					Following
				</button>
			{/if}
			<button
				style:color={view === "for you" ? "var(--lavender)" : "var(--overlay-1)"}
				style:border-bottom-color={view === "for you" ? "var(--lavender)" : "transparent"}
				onclick={() => (view = "for you")}
			>
				Discover
			</button>
		</div>

		{#if view === "following"}
			{#await followedPosts then followedPosts}
				{#if followedPosts.length === 0}
					<div class="nofollowing">
						<h1>You're not following anyone.</h1>
						<p>When you follow people, their posts will appear here.</p>
						<CatIcon style="width: 10rem;" stroke="var(--mantle)" />
					</div>
				{/if}
				{#each followedPosts as post}
					<AnyPost {post} />
				{/each}
			{/await}
		{:else if view === "for you"}
			{#await forYouPosts then forYouPosts}
				{#each forYouPosts as post}
					<AnyPost {post} />
				{/each}
			{/await}
		{/if}
		<div class="footer-padding"></div>
	</section>
	<New />
</Page>

<style>
	.nofollowing {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-top: 3rem;
		gap: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;

		h1 {
			font-size: 1.5rem;
			color: var(--text);
		}

		p {
			font-size: 0.85rem;
			color: var(--overlay-1);
		}
	}

	.footer-padding {
		height: 4rem;
	}

	.search {
		padding-bottom: 1rem;
	}

	@keyframes spin {
		from {
			rotate: 0deg;
		}

		to {
			rotate: 360deg;
		}
	}
	
	:global(.spin) {
		animation-name: spin;
		animation-duration: 2s;
	}

	.views {
		display: flex;
		padding-right: 1rem;
		background-color: var(--crust);
		padding-left: 1rem;

		&:not(:has(> *:nth-child(2))) {
			justify-content: center;
		}

		&:has(> *:nth-child(2)) {
			justify-content: space-between;
		}

		button {
			border-bottom-width: 2px;
			border-bottom-style: solid;
			padding-left: 3rem;
			padding-right: 3rem;
			font-weight: normal;
			font-size: 1rem;
			white-space: nowrap;
			padding-top: 0.5rem;
			padding-bottom: 1rem;
		}
	}

	.content {
		font-family: sans-serif;
		color: #c6d0f5;
	}

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		button {
			background-size: cover;
			background-position: center;
			overflow: hidden;

			img {
				border-radius: 50%;
				width: 3rem;
				height: 3rem;
			}
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--max-width);
		background: var(--crust);
	}
</style>
