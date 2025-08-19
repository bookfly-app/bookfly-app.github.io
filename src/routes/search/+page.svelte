<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { searchBooks, type Book } from "../../api/bookapi";
	import { searchPosts, type InternalPost} from "../../api/postapi";
	import { searchUsers, type User } from "../../api/userapi";
	import Loading from "../../components/Loading.svelte";
	import Page from "../../components/Page.svelte";
	import AnyPost from "../../components/posts/AnyPost.svelte";
	import UserListing from "../../components/UserListing.svelte";
	import theme from "../../themes/theme.svelte";
	import { getFile } from "../../api/storageapi";
	import { user } from "../../backend/auth.svelte";
	import SearchIcon from "../../assets/images/icons/SearchIcon.svelte";
	import Wallflower from "../../assets/images/icons/Wallflower.svelte";
	import PersonIcon from "../../assets/images/icons/PersonIcon.svelte";
	import Sidebar from "../../components/Sidebar.svelte";
	import BookCover from "../../components/BookCover.svelte";

	type View = "posts" | "books" | "people" | "authors";

	let sidebar: Sidebar = $state(null!);

	let view: View = $state(new URLSearchParams(window.location.search).get("view") as View ?? "posts");

	let searchTerm: string = $state("");

	async function search() {
		if (searchTimeout) clearTimeout(searchTimeout)
		searchTimeout = null;

		searchTerm = searchTerm.trim();

		const params = new URLSearchParams({ term: searchTerm, view });
		goto(`/search?${params}`);

		if (view === "posts") posts = searchPosts(searchTerm);
		if (view === "books") books = searchBooks(searchTerm);
		if (view === "people") users = searchUsers(searchTerm);
	}

	onMount(() => {
		if (searchTerm) search();
	});

	let searchTimeout: number | null = $state(null);

	function handleSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			search();
		} else {
			if (searchTimeout) clearTimeout(searchTimeout)
			searchTimeout = setTimeout(search, 3000) as unknown as number;
		}
	}

	let posts: Promise<InternalPost[]> = $state(Promise.resolve([]));
	let books: Promise<Promise<Book>[]> = $state(Promise.resolve([]));
	let users: Promise<User[]> = $state(Promise.resolve([]));

	function setView(viewName: View) {
		return function() {
			const params = new URLSearchParams({ view: viewName });
			if (searchTerm) params.set("term", searchTerm);
			goto(`/search?${params}`);
			view = viewName;
			search();
		}
	}
</script>

<Page bind:sidebar type="search">
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

			<button>
				<Wallflower style="width: 2rem; height: 2rem;" stroke="var(--overlay-1)" />
			</button>

			<a class="search" href="/search">
				<SearchIcon style="width: 2rem; height: 2rem;" stroke="var(--subtext-1)" />
			</a>
		</div>
	</nav>
	<section>
		<input
			type="text"
			bind:value={searchTerm}
			onkeyup={handleSearch}
			onblur={search}
			placeholder={{
				books: "Enter a title or ISBN",
				posts: "Enter some keywords",
				authors: "Enter an author's name",
				people: "Enter a username"
			}[view]}
		/>

		<div class="views" style:border-color={theme().textDark}>
			<button class={view === "posts" ? "selected" : ""} onclick={setView("posts")}>Posts</button>
			<button class={view === "books" ? "selected" : ""} onclick={setView("books")}>Books</button>
			<button class={view === "authors" ? "selected" : ""} onclick={setView("authors")}>Authors</button>
			<button class={view === "people" ? "selected" : ""} onclick={setView("people")}>Users</button>
		</div>
	</section>
	{#if view === "posts"}
		{#await posts}
			<div class="loading">
				<h1 style:color={theme().text}>Loading posts...</h1>
				<p style:color={theme().textDull}>We promise Wallflower will be faster soon.</p>
				<Loading />
			</div>
		{:then posts}
			{#if searchTerm == ""}
				<div class="loading">
					<h1 style:color={theme().text}>Search for a post</h1>
					<p style:color={theme().textDull}>
						Enter your search term to find relevant posts.
					</p>
				</div>
			{:else if posts.length === 0}
				<div class="loading">
					<h1 style:color={theme().text}>No posts found</h1>
					<p style:color={theme().textDull}>
						No posts were found relating to your search term. Make sure you spelled everything right!
					</p>
				</div>
			{/if}
			{#each posts as post}
				<AnyPost {post} />
			{/each}
		{/await}
	{:else if view === "books"}
		{#await books}
			<div class="loading">
				<h1 style:color={theme().text}>Loading books...</h1>
				<p style:color={theme().textDull}>We promise Wallflower will be faster soon.</p>
				<Loading />
			</div>
		{:then books}
			{#if searchTerm == ""}
				<div class="loading">
					<h1 style:color={theme().text}>Search for a book</h1>
					<p style:color={theme().textDull}>
						Enter your search term to find relevant books.
					</p>
				</div>
			{:else if books.length === 0}
				<div class="loading">
					<h1 style:color={theme().text}>No books found</h1>
					<p style:color={theme().textDull}>
						No books were found relating to your search term. Make sure you spelled everything right!
					</p>
				</div>
			{/if}
			<div class="books">
				{#each books as book}
					{#await book}
						<div class="book" style:border-color={theme().textDark}>
							<div class="book-info">
								<div class="loading-title"></div>
								<div class="loading-authors"></div>
							</div>
							<div class="loading-cover"></div>
						</div>
					{:then book}
						<a href={`/book/${book.isbn}`} class="book" style:border-color={theme().textDark}>
							<div class="book-info">
								<h1 style:color={theme().textBright}>
									{book.title}
								</h1>
								<h2 style:color={theme().textDim}>
									{book.authors.join(", ")}
								</h2>
							</div>
							{#if book.cover}
								<BookCover {book} style="width: 3.5rem; margin-left: auto;" />
							{:else}
								<div
									class="nocover"
									style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}
									style:color={theme().backgroundDark}
								>
									?
								</div>
							{/if}
						</a>
					{/await}
				{/each}
			</div>
		{/await}
	{:else if view === "people"}
		{#await users}
			<div class="loading">
				<h1 style:color={theme().text}>Loading accounts...</h1>
				<p style:color={theme().textDull}>We promise Wallflower will be faster soon.</p>
			</div>
		{:then users}
			{#if searchTerm == ""}
				<div class="loading">
					<h1 style:color={theme().text}>Search for a user</h1>
					<p style:color={theme().textDull}>
						Enter your search term to find relevant users.
					</p>
				</div>
			{:else if users.length === 0}
				<div class="loading">
					<h1 style:color={theme().text}>No users found</h1>
					<p style:color={theme().textDull}>
						No users were found relating to your search term. Make sure you spelled everything right!
					</p>
				</div>
			{/if}
			<div class="people">
				{#each users as user}
					<UserListing {user} />
				{/each}
			</div>
		{/await}
	{/if}
</Page>

<style>
	section {
		padding-top: 1rem;
		background-color: var(--crust);
		margin-top: 4.5rem;
	}

	.loading {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding-left: 3rem;
		padding-right: 3rem;
		text-align: center;

		h1 {
			font-size: 1.5rem;
		}

		p {
			font-size: 0.85rem;
		}
	}

	a {
		text-decoration: none;
	}

	.book {
		display: flex;
		padding-left: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-right: 2rem;
		border-bottom-width: 1px;
		border-bottom-style: solid;

		.nocover {
			width: 3.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-weight: bold;
		}

		.loading-cover {
			width: 3.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-weight: bold;
			background: var(--surface-0);
			margin-left: auto;
			aspect-ratio: 1 / 1.5;
			border-radius: 0.25rem;
		}

		.book-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.25rem;

			.loading-title {
				background-color: var(--surface-2);
				width: 10rem;
				height: 1rem;
				border-radius: 100vmax;
			}

			.loading-authors {
				background-color: var(--surface-0);
				width: 5rem;
				height: 1rem;
				border-radius: 100vmax;
			}

			h1 {
				color: var(--text);
			}

			h2 {
				color: var(--overlay-1);
				font-size: 0.85rem;
			}
		}

		.nocover {
			margin-left: auto;
			height: 5rem;
		}
	}

	.books {
		display: flex;
		flex-direction: column;

		h1,
		h2 {
			font-weight: normal;
			font-size: 1rem;
		}
	}

	.views {
		display: flex;
		justify-content: space-between;
		padding-top: 2rem;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		padding-left: 1rem;
		padding-right: 1rem;

		> * {
			padding-bottom: 0.75rem;
			border-color: var(--lavender);
			color: var(--overlay-1);
			padding-left: 1rem;
			padding-right: 1rem;

			&.selected {
				color: var(--text);
				border-bottom: 3px solid var(--lavender);
			}
		}
	}

	input {
		margin-left: 2rem;
		border-radius: 100vmax;
		width: calc(100% - 4rem);
		padding-left: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		background-color: var(--base);
		color: var(--subtext-1);
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
		position: fixed;
		top: 0px;
	}
</style>
