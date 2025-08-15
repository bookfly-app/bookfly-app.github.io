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
	import Select from "../../../components/Select.svelte";

	let { data }: { data: { type: PostType } } = $props();
	let { type } = data;

	let bodyName = {
		general: "Post Body",
		rating: "Review (Optional)",
		update: "Comments",
		reply: null!,
	}[type];

	let body: string;
	let chosenBook: Book | null = $state(null);
	let rating: string | null = $state(null);
	let updateType = $state("start");

	let searchResults: Book[] = $state([]);
	let searchText: string = $state("");

	async function search() {
		searchResults = await searchBooks(searchText);
	}

	function checkSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			search();
		}
	}

	function upload() {
		if (type === "rating") {
			validateRating();
			validateBook();
		}

		if (ratingError || bookError) return;

		let object = { type, body };
		if (chosenBook) object = Object.assign(object, { books: [chosenBook.isbn] });
		if (rating !== null) object = Object.assign(object, { rating: Number(rating) });
		if (type === "update") object = Object.assign(object, { updateType });

		post(object);

		goto("/profile");
	}

	function chooseBook(book: Book) {
		return function() {
			chosenBook = book;
			validateBook();
		}
	}

	let ratingError = $state("");
	let bookError = $state("");

	function validateRating() {
		if (type === "rating") {
			if (rating === null)  {
				ratingError = "Add a rating value.";
				return;
			}
			if (!/^\d(\.\d)?$/.test(rating!)) {
				ratingError = "Value must be between 0 and 10, to at most one decimal place.";
				return;
			}
		}

		ratingError = "";
	}

	function validateBook() {
		if (type === "rating" && !chosenBook) {
			bookError = "Choose a book to rate.";
		} else {
			bookError = "";
		}
	}
</script>


<Background />
<Page class="new-post-page">
	<h1 style:color={theme().text}>Choose a book</h1>

	<div class="book-search">
		<input
			id="search"
			type="text"
			bind:value={searchText}
			style:background={theme().backgroundDark}
			onkeyup={checkSearch}
			style:color={theme().text}
			style:outline={bookError ? `2px solid #f38ba8` : "none"}
		/>
		{#if bookError}
			<span class="error">{bookError}</span>
		{/if}
	</div>

	<div class="search-results">
		{#if chosenBook}
			<BookListing book={chosenBook} user={user()!} />
		{:else}
			{#each searchResults as book}
				<BookListing {book} user={user()!} onclick={chooseBook(book)} />
			{/each}
		{/if}
	</div>

	{#if type === "rating"}
		<h2 class="body-name" style:color={theme().textDull}>Rating</h2>
		<div class="stars">
			<input 
				bind:value={rating}
				id="rating"
				style:background={theme().backgroundDark}
				style:color={theme().text}
				oninput={validateRating}
				style:outline={ratingError ? `2px solid #f38ba8` : "none"}
			/>
			{#if ratingError}
				<span class="error">{ratingError}</span>
			{/if}
		</div>
	{/if}

	{#if type === "update"}
		<h2 class="body-name" style:color={theme().textDull}>Update Type</h2>
		<Select options={["start", "finish", "abandon"]} bind:value={updateType} />
	{/if}

	<h2 class="body-name" style:color={theme().textDull}>{bodyName}</h2>
	<textarea
		id="body"
		bind:value={body}
		style:color={theme().text}
		style:background={theme().backgroundDark}
	></textarea>

	<button
		onclick={upload}
		class="post-button"
		style:color={theme().background}
		style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}
	>
		Post
	</button>

	<Footer selected="profile" />
</Page>

<style>
	.body-name {
		margin-top: 1rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: normal;
		margin-bottom: 0.5rem;
	}

	.book-search {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.stars {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

	}

	.error {
		color: #f38ba8;
		font-size: 0.85rem;
	}

	#rating {
		width: 100%;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	#search {
		padding: 0.5rem;
		border-radius: 0.5rem;
	}

	.search-results {
		height: 20rem;
		overflow: auto;
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

	#body {
		padding: 0.5rem;
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
