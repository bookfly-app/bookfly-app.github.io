<script lang="ts">
	import { getBook } from "../../api/bookapi";
	import StarIcon from "../../assets/images/icons/StarIcon.svelte";
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
			{rating} / 10:
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
		<p class="review" style:color={theme().text}>{review}</p>
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
			font-size: 1rem;
			font-weight: normal;
			text-decoration: none;
		}
	}

	.rating-line {
		padding-bottom: 1rem;
		font-size: 0.85rem;
	}

	img {
		width: 8.5rem;
		height: 13rem;
	}

	.review {
		padding-top: 1rem;
		font-size: 0.85rem;
	}
</style>
