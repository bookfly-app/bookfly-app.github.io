<script lang="ts">
	import { goto } from "$app/navigation";
	import { post, type PostType } from "../../../api/postapi";
	import Background from "../../../components/Background.svelte";
	import Page from "../../../components/Page.svelte";
	import Footer from "../../../components/Footer.svelte";
	import theme from "../../../themes/theme.svelte";
	import { searchBooks, type Book } from "../../../api/bookapi";
	import BookListing from "../../../components/BookListing.svelte";
	import { user } from "../../../backend/auth.svelte";

	let { data }: { data: { type: PostType } } = $props();
	let { type } = data;

	let bodyName = {
		general: "Post Body",
		rating: "Review (Optional)",
		update: "Comments",
		reply: null!,
	}[type];

	let body: string;

	let searchResults: Book[] = $state([]);
	let searchText: string;

	async function search() {
		searchResults = await searchBooks(searchText);
		console.log($state.snapshot(searchResults));
	}

	function checkSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			search();
		}
	}

	function upload() {
		post({ type, body });
	}
</script>

<Background />
<Page class="new-post-page">
	{#if type === "rating"}
		<h1 style:color={theme().textDull}>Choose a book to rate</h1>
		<input
			type="text"
			bind:value={searchText}
			style:background={theme().backgroundDark}
			onkeyup={checkSearch}
			style:color={theme().text}
		/>
		<div class="search-results">
			{#each searchResults as book}
				<BookListing {book} rating={0} user={user()!} />
			{/each}
		</div>
	{/if}

	<h2 style:color={theme().textDull}>{bodyName}</h2>
	<textarea
		bind:value={body}
		style:color={theme().text}
		style:background={theme().backgroundDark}
	></textarea>

	<button
		onclick={() => {
			upload();
			goto("/profile");
		}}
		class="post-button"
		style:color={theme().background}
		style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}
	>
		Post
	</button>

	<Footer selected="profile" />
</Page>

<style>
	.search-results {
		height: 20rem;
	}

	.post-button {
		width: fit-content;
		padding-left: 3rem;
		padding-right: 3rem;
		font-size: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 100vmax;
		margin-left: auto;
		margin-right: auto;
		margin-top: 3rem;
		box-shadow: 0px 0px 10px black;
	}

	:global(.new-post-page) {
		padding-top: 2rem;
		padding-left: 2rem;
		padding-right: 2rem;
		display: flex;
		flex-direction: column;
	}

	textarea {
		border-radius: 0.75rem;
		width: 100%;
		height: 10rem;
		font-size: 0.85rem;
		padding: 0.5rem;
		resize: none;
	}

	h2 {
		font-weight: normal;
		font-size: 0.85rem;
		padding-bottom: 0.5rem;
	}
</style>
