<script lang="ts">
	import theme from "../themes/theme.svelte";
	import StarRating from "./StarRating.svelte";

	let { book, rating, user } = $props();
</script>

<a href="/book/{book.isbn}" style:border-color={theme().textDark}>
	<div class="book-info">
		<h1 style:color={theme().text}>{book.title}</h1>
		<h2 style:color={theme().textDull}>{book.authors.join(", ")}</h2>
	</div>

	<div class="rating">
		<span style:color={theme().text}>{user.displayName}'s rating:</span>
		<StarRating {rating} />
		<span style:color={theme().text}>{rating} / 10</span>
	</div>

	<img alt="{book.title} cover" src={book.cover} />
</a>

<style>
	a {
		text-decoration: none;
		display: flex;
		height: 8rem;
		padding: 1rem;
		padding-left: 2rem;
		align-items: center;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		justify-content: space-between;

		img {
			height: 100%;
		}
	}

	.rating {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
	}

	.book-info {
		display: flex;
		flex-direction: column;

		h1,
		h2 {
			font-weight: normal;
		}

		h1 {
			font-size: 1rem;
		}

		h2 {
			font-size: 0.85rem;
		}
	}
</style>
