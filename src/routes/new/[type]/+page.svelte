<script lang="ts">
	import { goto } from "$app/navigation";
	import { post, type PostType } from "../../../api/postapi";
	import Background from "../../../components/Background.svelte";
	import Page from "../../../components/Page.svelte";
	import Footer from "../../../components/Footer.svelte";
	import theme from "../../../themes/theme.svelte";
	import { searchBooks, type Book } from "../../../api/bookapi";
	import Select from "../../../components/Select.svelte";
	import BackButton from "../../../components/BackButton.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";

	let { data }: { data: { type: PostType } } = $props();
	let { type } = data;

	let bodyName = {
		general: "Post Body",
		rating: "Review (Optional)",
		update: "Comments (Optional)",
		reply: null!,
	}[type];

	let body: string = $state("");
	let rating: string | null = $state(null);
	let updateType = $state("start");
	let chosenBooks: Book[] = $state([]);

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

	let bodyError = $state("");

	function validateBody() {
		if (type === "general" && body.trim().length === 0) {
			bodyError = "Body cannot be empty";
		} else {
			bodyError = "";
		}
	}

	function upload() {
		if (type === "rating") validateRating();
		if (type === "rating" || type === "update") validateBook();
		if (type === "general") validateBody();

		if (ratingError || bookError || bodyError) return;

		let object = { type, body, books: chosenBooks.map(book => book.isbn) };
		if (rating !== null) object = Object.assign(object, { rating: Number(rating) });
		if (type === "update") object = Object.assign(object, { updateType });

		post(object);

		goto("/profile");
	}

	function chooseBook(book: Book) {
		return function() {
			chosenBooks.push(book);
			validateBook();
		}
	}

	function removeBook(book: Book) {
		return function() {
			chosenBooks = chosenBooks.filter(other => other.isbn !== book.isbn);
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
		if (type === "rating" && chosenBooks.length === 0) {
			bookError = "Choose a book to rate.";
		} else {
			bookError = "";
		}
	}
</script>

{#snippet bookSearch(title: string = "Add a book")}
	<h2 style:color={theme().textDull} class="body-name">{title}</h2>

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
		{#each searchResults as book}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="book search-book" onclick={chooseBook(book)}>
				<img alt="{book.title} cover" src={book.cover} />
				<div class="info">
					<span class="title" style:color={theme().text}>{book.title}</span>
					<span class="authors" style:color={theme().textDull}>{book.authors.join(",")}</span>
				</div>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet chosenBookList()}
	<div class="books">
		{#each chosenBooks as book (book.isbn) }
			<div class="book">
				<img alt="{book.title} cover" src={book.cover} />
				<div class="info">
					<span class="title" style:color={theme().text}>{book.title}</span>
					<span class="authors" style:color={theme().textDull}>{book.authors.join(",")}</span>
				</div>
				<button class="close" onclick={removeBook(book)}>
					<TrashIcon stroke="#f38ba8" style="width: 1.25rem; height: 1.25rem;" />
				</button>
			</div>
		{/each}
	</div>
{/snippet}

<Background />
<Page class="new-post-page">

	<span>
		<BackButton />
		<h1 style:color={theme().text}>New {type} Post</h1>
	</span>

	{#if type === "rating"}
		{#if chosenBooks.length === 0}
			{@render bookSearch("Choose a book")}
		{:else}
			{@render chosenBookList()}
		{/if}

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

		{#if chosenBooks.length === 0}
			{@render bookSearch("Choose a book")}
		{:else}
			{@render chosenBookList()}
		{/if}
	{/if}

	<h2 class="body-name" style:color={theme().textDull}>{bodyName}</h2>
	<textarea
		id="body"
		bind:value={body}
		style:color={theme().text}
		style:background={theme().backgroundDark}
	></textarea>



	{#if type !== "rating" && type !== "update"}
		{@render bookSearch()}
	{/if}

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
	span:has(> h1) {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.search-book {
		cursor: pointer;
	}

	h1 {
		text-transform: capitalize;
		font-weight: normal;
		font-size: 1.5rem;
	}

	.book {
		display: flex;	
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		gap: 1rem;

		&:first-child {
			margin-top: 0.5rem;
		}

		.info {
			display: flex;
			flex-direction: column;
			padding-right: 2rem;
		}

		img {
			width: 10%;
			aspect-ratio: 1 / 1.5;
		}

		.authors {
			font-size: 0.85rem;
		}

		.close {
			margin-left: auto;
		}
	}

	.body-name {
		margin-top: 1rem;
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
		flex-shrink: 0;
	}

	h2 {
		font-weight: normal;
		font-size: 0.85rem;
		padding-bottom: 0.5rem;
	}
</style>
