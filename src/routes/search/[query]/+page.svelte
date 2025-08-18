<script lang="ts">
	import { goto } from "$app/navigation";
	import { searchBooks } from "../../../api/bookapi";
	import { searchPosts } from "../../../api/postapi";
	import { searchUsers } from "../../../api/userapi";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import AnyPost from "../../../components/posts/AnyPost.svelte";
	import UserListing from "../../../components/UserListing.svelte";
	import theme from "../../../themes/theme.svelte";

	function toUrl(text: string): string {
		return text.replace(" ", "+");
	}

	function fromUrl(text: string): string {
		return text.replace("+", " ");
	}

	let search;

	let { data }: { data: { query: string } } = $props();
	let { query } = $derived(data);

	let view: "posts" | "books" | "people" = $state("posts");

	let posts = $derived(searchPosts(query.replace("+", " ")));
	let books = $derived(searchBooks(query));
	let users = $derived(searchUsers(query.replace("+", " ")));

	// svelte-ignore non_reactive_update
	// svelte-ignore state_referenced_locally
	let searchTerm: string = fromUrl(query);

	function handleSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			goto(`/search/${searchTerm.replace(" ", "+")}`);
		}
	}
</script>

<Background />

<Page>
	<section>
		<div class="wrapper" style:background={theme().backgroundDark}>
			<input
				style:background={theme().background}
				style:color={theme().textBright}
				type="text"
				bind:this={search}
				bind:value={searchTerm}
				onkeyup={handleSearch}
			/>

			<div class="views">
				<button
					style:color={view === "posts" ? theme().textBright : theme().textDull}
					style:border-color={view === "posts" ? theme().accent : "transparent"}
					onclick={() => (view = "posts")}
				>
					Posts
				</button>
				<button
					style:color={view === "books" ? theme().textBright : theme().textDull}
					style:border-color={view === "books" ? theme().accent : "transparent"}
					onclick={() => (view = "books")}
				>
					Books
				</button>
				<button
					style:color={view === "people" ? theme().textBright : theme().textDull}
					style:border-color={view === "people" ? theme().accent : "transparent"}
					onclick={() => (view = "people")}
				>
					People
				</button>
			</div>
		</div>

		{#if view === "posts"}
			{#await posts}
				<div class="loading">
					<h1 style:color={theme().text}>Loading posts...</h1>
					<p style:color={theme().textDull}>We promise Wallflower will be faster soon.</p>
				</div>
			{:then posts}
				{#if posts.length === 0}
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
				</div>
			{:then books}
				{#if books.length === 0}
					<div class="loading">
						<h1 style:color={theme().text}>No books found</h1>
						<p style:color={theme().textDull}>
							No books were found relating to your search term. Make sure you spelled everything right!
						</p>
					</div>
				{/if}
				<div class="books">
					{#each books as book}
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
								<img alt={`Cover for ${book.title}`} class="cover" src={book.cover} />
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
				{#if users.length === 0}
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
	</section>
	<Footer selected="search" />
</Page>

<style>
	.loading {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
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

		.book-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.cover,
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

	.wrapper {
		padding-top: 1rem;
	}

	.views {
		display: flex;
		justify-content: space-between;
		padding-top: 2rem;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		padding-left: 2rem;
		padding-right: 2rem;

		> * {
			padding-bottom: 0.75rem;
			border-bottom-style: solid;
			border-bottom-width: 3px;
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	input {
		margin-left: 2rem;
		border-radius: 100vmax;
		width: calc(100% - 4rem);
		padding-left: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
</style>
