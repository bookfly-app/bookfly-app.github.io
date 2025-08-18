<script lang="ts">
	import { getFollowedPosts } from "../api/postapi";
	import CatIcon from "../assets/images/icons/CatIcon.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import initializeFirebase from "../backend/backend";
	import Background from "../components/Background.svelte";
	import Footer from "../components/Footer.svelte";
	import New from "../components/New.svelte";
	import Page from "../components/Page.svelte";
	import AnyPost from "../components/posts/AnyPost.svelte";
	import Sidebar from "../components/Sidebar.svelte";
	import theme from "../themes/theme.svelte";
	import Wallflower from "../assets/images/icons/Wallflower.svelte";
	import { getFile } from "../api/storageapi";

	initializeFirebase();

	let view: "following" | "for you" = $state("following");

	let followedPosts = $derived(user() ? getFollowedPosts(user()!, true).then(posts => posts.toSorted((a, b) => b.timestamp - a.timestamp)) : Promise.resolve([]));

	let sidebar: Sidebar;
	let spinLogo = $state(false);

	function spin() {
		if (!spinLogo) {
			spinLogo = true;
			setTimeout(() => spinLogo = false, 2000);
		}
	}
</script>

<Background />

<Page>
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
		<div style:background-color={theme().backgroundDark} class="views">
			<button
				style:color={view === "following" ? theme().textBright : theme().textDull}
				style:border-bottom-color={view === "following" ? theme().accent : "transparent"}
				onclick={() => (view = "following")}
			>
				Following
			</button>
			<button
				style:color={view === "for you" ? theme().textBright : theme().textDull}
				style:border-bottom-color={view === "for you" ? theme().accent : "transparent"}
				onclick={() => (view = "for you")}
			>
				For You
			</button>
		</div>

		{#if view === "following"}
			{#await followedPosts then followedPosts}
				{#if followedPosts.length === 0}
					<div class="nofollowing">
						<h1 style:color={theme().textBright}>You're not following anyone.</h1>
						<p style:color={theme().textDull}>
							When you follow people, their posts will appear here.
						</p>
						<CatIcon style="width: 10rem;" stroke={theme().backgroundDim} />
					</div>
				{/if}
				{#each followedPosts as post}
					<AnyPost {post} />
				{/each}
			{/await}
		{:else if view === "for you"}
			<div class="nofollowing">
				<h1 style:color={theme().textBright}>We haven't figured you out yet.</h1>
				<p style:color={theme().textDull}>
					After enough interactions, we'll start suggesting things we think you'll like
					here.
				</p>
				<CatIcon style="width: 10rem;" stroke={theme().backgroundDim} />
			</div>
		{/if}
		<div class="footer-padding"></div>
	</section>

	<New />
	<Footer selected="home" />
	<Sidebar bind:this={sidebar}/>
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
		}

		p {
			font-size: 0.85rem;
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
		justify-content: space-between;
		padding-right: 2rem;
		padding-left: 1rem;

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
