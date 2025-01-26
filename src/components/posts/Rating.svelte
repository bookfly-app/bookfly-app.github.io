<script lang="ts">
	import { getBook, type Book } from "../../api/bookapi";
	import StarIcon from "../../assets/images/icons/StarIcon.svelte";
	import theme from "../../themes/theme.svelte";

	let { isbn, rating, review, user } = $props();

	let book: Book | null = $state(null);

	(async function () {
		book = await getBook(isbn);
	})();
</script>

<div>
	<p class="rating-line" style:color={theme().textDull}>
		{user.displayName} rated
		<i style:color={theme().text}>{book?.title}</i>
		{rating} / 10:
	</p>
	<div class="info">
		<div class="content">
			<h2 class="title" style:color={theme().text}>{book?.title}</h2>
			<h2 class="title" style:color={theme().textDim}>
				{book?.authors.join(", ")}
			</h2>
			<span class="rating">
				<StarIcon
					stroke="#FFFFAA"
					fill="#FFFFAA"
					fillEnd={theme().background}
					fillPercent={rating < 2 ? rating / 2 : undefined}
					style="width: 1.5rem; height: 1.5rem;"
				/>
				<StarIcon
					stroke="#FFFFAA"
					fill="#FFFFAA"
					fillEnd={theme().background}
					fillPercent={rating < 4 ? (rating - 2) / 2 : undefined}
					style="width: 1.5rem; height: 1.5rem;"
				/>
				<StarIcon
					stroke="#FFFFAA"
					fill="#FFFFAA"
					fillEnd={theme().background}
					fillPercent={rating < 6 ? (rating - 4) / 2 : undefined}
					style="width: 1.5rem; height: 1.5rem;"
				/>
				<StarIcon
					stroke="#FFFFAA"
					fill="#FFFFAA"
					fillEnd={theme().background}
					fillPercent={rating < 8 ? (rating - 6) / 2 : undefined}
					style="width: 1.5rem; height: 1.5rem;"
				/>
				<StarIcon
					stroke="#FFFFAA"
					fill="#FFFFAA"
					fillEnd={theme().background}
					fillPercent={rating < 10 ? (rating - 8) / 2 : undefined}
					style="width: 1.5rem; height: 1.5rem;"
				/>
			</span>
			<h1 class="rating-number" style:color={theme().textBright}>
				{rating} / 10
			</h1>
		</div>
		<a
			href={`/book/${book?.isbn}`}
			aria-label={`Go to details for book "${book?.title}"`}
		>
			<img alt={`Cover for book "${book?.title}"`} src={book?.cover} />
		</a>
	</div>
	<p class="review" style:color={theme().text}>{review}</p>
</div>

<style>
	.info {
		display: flex;
		align-items: center;
	}

	.rating-number {
		font-size: 2rem;
	}

	.rating {
		display: flex;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.content {
		padding-right: 1rem;

		.title {
			font-size: 1rem;
			font-weight: normal;
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
