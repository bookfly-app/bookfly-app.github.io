<script lang="ts">
	import { getBook, type Book } from "../../api/bookapi";
	import theme from "../../themes/theme.svelte";

	let { isbn, body, user } = $props();

	let book: Book | null = $state(null);

	(async function () {
		book = await getBook(isbn);
	})();
</script>

<div>
	<p class="rating-line" style:color={theme().textDull}>
		{user.displayName} started reading
		<i style:color={theme().text}>{book?.title}</i>
		:
	</p>
	<div class="info">
		<div class="content">
			<a href="/book/{book?.isbn}" class="title" style:color={theme().text}>{book?.title}</a>
			<a href="/book/{book?.isbn}" class="author" style:color={theme().textDim}>
				{book?.authors.join(", ")}
			</a>

			<p style:color={theme().text}>
				{[...(book?.genres ?? [])].splice(0, 2).join(", ")}
			</p>
		</div>
		<a aria-label={`Go to details for book "${book?.title}"`} href={`/book/${book?.isbn}`}>
			<img alt={`Cover for book "${book?.title}"`} src={book?.cover} />
		</a>
	</div>
	<p class="review" style:color={theme().text}>{body}</p>
</div>

<style>
	.info {
		display: flex;
		align-items: center;
	}

	.content {
		padding-right: 1rem;

		.title,
		.author {
			font-size: 0.85rem;
			font-weight: normal;
			text-decoration: none;
		}

		p {
			font-size: 0.85rem;
			padding-top: 1rem;
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
