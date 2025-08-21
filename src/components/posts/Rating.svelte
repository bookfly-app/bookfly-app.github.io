<script lang="ts">
	import { getBook } from "../../api/bookapi";
	import { format } from "../../api/postapi";
	import BookCover from "../BookCover.svelte";
	import StarRating from "../StarRating.svelte";

	let { isbn, rating, review, user } = $props();

	let book = getBook(isbn);
</script>

<div>
	{#await book then book}
		<p class="rating-line">
			{user.displayName} rated
			<i>{book?.title}</i>
			<span>{rating} / 10</span>:
		</p>
		<div class="info">
			<div class="content">
				<a href={`/book/${book?.isbn}`} class="title">{book?.title}</a>
				<a href={`/book/${book?.isbn}`} class="author">
					{book?.authors.join(", ")}
				</a>
				<div class="stars">
					<StarRating {rating} size={1.5} />
				</div>
				<h1 class="rating-number">
					{rating} / 10
				</h1>
			</div>
			<a href={`/book/${book?.isbn}`} aria-label={`Go to details for book "${book?.title}"`}>
				<BookCover {book} style="width: 6rem; margin-left: 1rem;" />
			</a>
		</div>
		{#await format(review) then body}
			<p class="review">{@html body}</p>
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
		color: var(--text);
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
			text-decoration: none;
			text-align: center;
		}

		.author {
			font-size: 1rem;
			color: var(--surface-2);
		}

		.title {
			font-size: 1.25rem;
			font-weight: 600;
			color: var(--subtext-1);
		}
	}

	.rating-line {
		padding-bottom: 1rem;
		font-size: 0.85rem;
		color: var(--overlay-1);
		
		i {
			color: var(--subtext-1);
		}

		span {
			font-size: inherit;
			color: var(--yellow);
		}
	}

	.review {
		padding-top: 1rem;
		font-size: 0.85rem;
		color: var(--subtext-1);

		:global(a) {
			color: var(--blue);
		}
	}
</style>
