<script lang="ts">
	import initializeFirebase from "../backend/backend";
	import logo from "../assets/images/logo.svg";
	import Sidebar, { showSidebar } from "../components/Sidebar.svelte";
	import { getUser } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import Footer from "../components/Footer.svelte";

	initializeFirebase();

	let view: "following" | "for you" = $state("following");
</script>

<nav style:background={theme().backgroundDark}>
	<div class="banner">
		<button
			style:background-image={`url("${getUser()?.picture ?? ""}")`}
			onclick={showSidebar}
			aria-label="Open sidebar"
		></button>
		<button
			style:background-image={`url("${logo}")`}
			onclick={showSidebar}
			aria-label="Open sidebar"
		></button>
		<SearchIcon
			style="width: 2rem; height: 2rem;"
			stroke={theme().textBright}
		/>
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

<Footer selected="home" />

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

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		button {
			height: 3rem;
			width: 3rem;
			border-radius: 50%;
			background-size: cover;
			background-position: center;
		}
	}

	nav {
		display: flex;
		flex-direction: column;

		h1 {
			font-size: 1rem;
		}

		h2 {
			font-size: 1rem;
		}
	}
</style>
