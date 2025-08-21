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
	import Sidebar from "../../components/Sidebar.svelte";
	import BookCover from "../../components/BookCover.svelte";
	import Header from "../../components/Header.svelte";

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
		else if (view === "books") books = searchBooks(searchTerm);
		else if (view === "people") users = searchUsers(searchTerm);
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
	<Header title="Search" />
	<section>
		<input
			type="text"
			bind:value={searchTerm}
			onkeyup={handleSearch}
			onblur={search}
			enterkeyhint="search"
			placeholder={{
				books: "Enter a title or ISBN",
				posts: "Enter some keywords",
				authors: "Enter an author's name",
				people: "Enter a username"
			}[view]}
		/>

		<div class="views">
			<button class={view === "posts" ? "selected" : ""} onclick={setView("posts")}>Posts</button>
			<button class={view === "books" ? "selected" : ""} onclick={setView("books")}>Books</button>
			<button class={view === "authors" ? "selected" : ""} onclick={setView("authors")}>Authors</button>
			<button class={view === "people" ? "selected" : ""} onclick={setView("people")}>Users</button>
		</div>
	</section>
	{#if view === "posts"}
		{#await posts}
			<div class="loading">
				<h1>Loading posts...</h1>
				<p>We promise Wallflower will be faster soon.</p>
				<Loading />
			</div>
		{:then posts}
			{#if searchTerm == ""}
				<div class="loading">
					<h1>Search for a post</h1>
					<p>
						Enter your search term to find relevant posts.
					</p>
				</div>
			{:else if posts.length === 0}
				<div class="loading">
					<h1>No posts found</h1>
					<p>
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
				<h1>Loading books...</h1>
				<p>We promise Wallflower will be faster soon.</p>
				<Loading />
			</div>
		{:then books}
			{#if searchTerm == ""}
				<div class="loading">
					<h1>Search for a book</h1>
					<p>
						Enter your search term to find relevant books.
					</p>
				</div>
			{:else if books.length === 0}
				<div class="loading">
					<h1>No books found</h1>
					<p>
						No books were found relating to your search term. Make sure you spelled everything right!
					</p>
				</div>
			{/if}
			<div class="books">
				{#each books as book}
					{#await book}
						<div class="book">
							<div class="book-info">
								<div class="loading-title"></div>
								<div class="loading-authors"></div>
							</div>
							<div class="loading-cover"></div>
						</div>
					{:then book}
						<a href={`/book/${book.isbn}`} class="book">
							<div class="book-info">
								<h1>
									{book.title}
								</h1>
								<h2>
									{book.authors.join(", ")}
								</h2>
							</div>
							{#if book.cover}
								<BookCover {book} style="width: 3.5rem; margin-left: auto;" />
							{:else}
								<div class="loading-cover"></div>
							{/if}
						</a>
					{/await}
				{/each}
			</div>
		{/await}
	{:else if view === "people"}
		{#await users}
			<div class="loading">
				<h1>Loading accounts...</h1>
				<p>We promise Wallflower will be faster soon.</p>
			</div>
		{:then users}
			{#if searchTerm == ""}
				<div class="loading">
					<h1>Search for a user</h1>
					<p>
						Enter your search term to find relevant users.
					</p>
				</div>
			{:else if users.length === 0}
				<div class="loading">
					<h1>No users found</h1>
					<p>
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
		margin-top: 2.5rem;
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
			color: var(--subtext-1);
		}

		p {
			font-size: 0.85rem;
			color: var(--overlay-1);
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
		border-bottom-width: 1px solid var(--surface-0);

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
		padding-top: 1.25rem;
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
				border-bottom: 2px solid var(--lavender);
			}
		}
	}

	input {
		margin-left: 2rem;
		border-radius: 100vmax;
		width: calc(100% - 4rem);
		padding-left: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		background-color: var(--base);
		font-size: 1rem;
		color: var(--subtext-1);
	}
</style>
