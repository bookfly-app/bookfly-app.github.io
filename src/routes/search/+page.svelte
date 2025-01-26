<script lang="ts">
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import theme from "../../themes/theme.svelte";
	import { searchPosts } from "../../api/postapi";
	import AnyPost from "../../components/posts/AnyPost.svelte";
	import { searchBooks, type Book, type Post } from "../../api/bookapi";
	import { searchUsers, type User } from "../../api/userapi";
	import UserListing from "../../components/UserListing.svelte";

	let search;

	let { data }: { data: { searchTerm: string } } = $props();
	let { searchTerm } = data;

	let view: "posts" | "books" | "people" = $state("posts");

	let posts: Post[] = $state([]);
	let books: Book[] = $state([]);
	let users: User[] = $state([]);
	if (searchTerm) {
		(async () => {
			posts = await searchPosts(searchTerm.replace("+", " "));
		})();
		(async () => {
			books = await searchBooks(searchTerm);
		})();
		(async () => {
			users = await searchUsers(searchTerm.replace("+", " "));
		})();
	}
</script>

<Background />
<main>
	<input
		style:background={theme().backgroundDark}
		style:color={theme().textBright}
		type="text"
		bind:this={search}
	/>

	<div class="views" style:border-color={theme().textDark}>
		<button
			style:color={view === "posts"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "posts")}
		>
			Posts
		</button>
		<button
			style:color={view === "books"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "books")}
		>
			Books
		</button>
		<button
			style:color={view === "people"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "people")}
		>
			People
		</button>
	</div>

	{#if view === "posts"}
		{#each posts as post}
			<AnyPost {post} />
		{/each}
	{:else if view === "books"}
		<div class="books">
			{#each books as book}
				<a
					href={`book/${book.isbn}`}
					class="book"
					style:border-color={theme().textDark}
				>
					<div class="book-info">
						<h1 style:color={theme().textBright}>{book.title}</h1>
						<h2 style:color={theme().textDim}>
							{book.authors.join(", ")}
						</h2>
					</div>
					{#if book.cover}
						<img class="cover" src={book.cover} />
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
	{:else if view === "people"}
		<div class="people">
			{#each users as user}
				<UserListing {user} />
			{/each}
		</div>
	{/if}
</main>
<Footer selected="search" />

<style>
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

	main {
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
