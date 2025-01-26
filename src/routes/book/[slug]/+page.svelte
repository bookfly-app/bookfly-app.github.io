<script lang="ts">
	import SearchIcon from "../../../assets/images/icons/SearchIcon.svelte";
	import { getUser } from "../../../backend/auth.svelte";
	import Sidebar, { showSidebar } from "../../../components/Sidebar.svelte";
	import theme from "../../../themes/theme.svelte.js";
	import { getBookDiscussions, type Post } from "../../../api/bookapi";
	import AnyPost from "../../../components/posts/AnyPost.svelte";
	import Footer from "../../../components/Footer.svelte";

	let { data } = $props();
	let book = data.book;

	let view: "info" | "discussion" = $state("info");

	let discussions: Post[] = $state([]);
	(async () => {
		discussions = await getBookDiscussions(book.isbn);
		console.log($state.snapshot(discussions));
	})();
</script>

<nav style:background={theme().backgroundDark}>
	<div class="banner">
		<button
			style:background-image={`url("${getUser()?.picture ?? ""}")`}
			onclick={showSidebar}
			aria-label="Open sidebar"
		></button>
		<div class="book-name">
			<h1 style:color={theme().textBright}>{book.title}</h1>
			<h2 style:color={theme().textDim}>{book.authors.join(", ")}</h2>
		</div>
		<SearchIcon
			style="width: 2rem; height: 2rem;"
			stroke={theme().textBright}
		/>
	</div>
</nav>
<main style:background={theme().background}>
	<div style:background-color={theme().backgroundDark} class="views">
		<button
			style:color={view === "info"
				? theme().textBright
				: theme().textDull}
			style:border-bottom-color={view === "info"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "info")}
		>
			Info
		</button>
		<button
			style:color={view === "discussion"
				? theme().textBright
				: theme().textDull}
			style:border-bottom-color={view === "discussion"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "discussion")}
		>
			Discussion
		</button>
	</div>

	{#if view === "info"}
		<img alt={`${book.title} cover`} class="cover" src={book.cover} />
		<p class="description" style:color={theme().textDull}>
			{book.description}
		</p>
	{:else if view === "discussion"}
		{#each discussions as post}
			<AnyPost {post} />
		{/each}
	{/if}
</main>
<Footer selected="search" />
<Sidebar />

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.views {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-right: 2rem;
		padding-left: 2rem;

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

	.book-name {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.cover {
		width: 10rem;
	}

	h2 {
		font-weight: normal;
	}

	.description {
		padding: 1.5rem;
		max-height: 10rem;
		overflow-y: auto;
	}
</style>
