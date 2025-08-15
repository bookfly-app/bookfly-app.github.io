<script lang="ts">
	import { getBook } from "../../api/bookapi";
	import { format } from "../../api/postapi";
	import theme from "../../themes/theme.svelte";
	import StarRating from "../StarRating.svelte";

	let { isbn, rating, review, user } = $props();

	let book = getBook(isbn);
</script>

<div>
	{#await book then book}
		<p class="rating-line" style:color={theme().textDull}>
			{user.displayName} rated
			<i style:color={theme().text}>{book?.title}</i>
			<span>{rating} / 10</span>:
		</p>
		<div class="info">
			<div class="content">
				<a href={`/book/${book?.isbn}`} class="title" style:color={theme().text}>{book?.title}</a>
				<a href={`/book/${book?.isbn}`} class="author" style:color={theme().textDim}>
					{book?.authors.join(", ")}
				</a>
				<div class="stars">
					<StarRating {rating} size={1.5} />
				</div>
				<h1 class="rating-number" style:color={theme().textBright}>
					{rating} / 10
				</h1>
			</div>
			<a href={`/book/${book?.isbn}`} aria-label={`Go to details for book "${book?.title}"`}>
				<img alt={`Cover for book "${book?.title}"`} src={book?.cover} />
			</a>
		</div>
		{#await format(review) then body}
			<p class="review" style:color={theme().text}>{@html body}</p>
		{/await}
	{/await}
</div>

<style>


	.info {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.rating-number {
		font-size: 2rem;
	}

	.stars {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		.title,
		.author {
			font-size: 0.85rem;
			font-weight: normal;
			text-decoration: none;
			text-align: center;
		}
	}

	.rating-line {
		padding-bottom: 1rem;
		font-size: 0.85rem;

		span {
			font-size: inherit;
			color: #f9e2af;
		}
	}

	img {
		width: 6rem;
		height: 9rem;
		margin-left: 1rem;
	}

	.review {
		padding-top: 1rem;
		font-size: 0.85rem;

		:global(a) {
			color: cornflowerblue;
		}
	}
</style>
