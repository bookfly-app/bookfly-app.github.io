<script lang="ts">
	import initializeFirebase, { getPosts } from "../backend/backend";
	import Post from "../components/Post.svelte";
	import logo from "../assets/images/logo.svg";
	import search from "../assets/images/search.svg";
	import Sidebar, { showSidebar } from "../components/Sidebar.svelte";
	import { getUser } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	initializeFirebase();

	let view: "following" | "for you" = $state("following");
</script>

<nav>
	<div class="banner">
		<img
			src={getUser()?.picture ?? ""}
			onclick={showSidebar}
			style="cursor: pointer;"
		/>
		<img src={logo} />
		<img src={search} />
	</div>
</nav>

<main>
	<div style:background-color={theme().backgroundDark} class="views">
		<button
			style:color={view === "following"
				? theme().textBright
				: theme().textDull}
			style:border-bottom-color={view === "following"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "following")}
		>
			Following
		</button>
		<button
			style:color={view === "for you"
				? theme().textBright
				: theme().textDull}
			style:border-bottom-color={view === "for you"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "for you")}
		>
			For You
		</button>
	</div>
</main>

<Sidebar />

<style>
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

	main {
		background-color: #1e1e2e;
		font-family: sans-serif;
		color: #c6d0f5;
	}
	nav {
		display: flex;
		flex-direction: column;
		background-color: #11111b;
	}

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		img {
			height: 3rem;
			width: 3rem;

			&:first-child {
				border-radius: 50%;
			}

			&:last-child {
				height: 2rem;
				width: 2rem;
			}
		}
	}
</style>
