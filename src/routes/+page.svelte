<script lang="ts">
	import initializeFirebase, { getPosts } from "../backend/backend";
	import Post from "../components/Post.svelte";
	import logo from "../assets/images/logo.svg";
	import search from "../assets/images/search.svg";
	import Sidebar, { showSidebar } from "../components/Sidebar.svelte";
	import { getUser } from "../backend/auth.svelte";
	import { getBook } from "../api/api";

	initializeFirebase();

	let posts = $state<any[]>([]);
	(async function () {
		posts = await getPosts();
		console.log(posts.length);
		console.log(await getBook("9781444758993"));
	})();
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
	<div>
		<button>Following</button>
		<button>Discover</button>
	</div>
</nav>

<main>
	{#each posts as post}
		<Post {post} />
	{/each}
</main>
<Sidebar />

<style>
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

	.views {
		display: flex;
		padding-left: 2rem;
		gap: 4rem;
		width: 100%;
		overflow-x: auto;

		button {
			padding: 1rem;
			color: #a6adc8;
			font-size: 1.25rem;
			font-weight: bold;

			&.selected {
				border-bottom: 3px solid #b4befe;
				color: #cdd6f4;
			}
		}
	}
</style>
