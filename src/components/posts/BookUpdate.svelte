<script lang="ts">
	import { getBook } from "../../api/bookapi";
	import theme from "../../themes/theme.svelte";

	let { isbn, body, user, updateType } = $props();

	let book = getBook(isbn);
</script>

<section>
	{#await book then book}
		<!-- Update information -->
		<p class="rating-line" style:color={theme().textDull}>
			{user.displayName}
			{#if updateType === "start"}
				started reading
			{:else if updateType === "finish"}
				finished reading
			{:else if updateType === "abandon"}
				abandoned
			{/if}
			<i style:color={theme().text}>{book?.title}</i>
			:
		</p>

		<!-- Book info -->
		<div class="info">
			<div class="content">
				<!-- Book title & authors -->
				<a href="/book/{book?.isbn}" class="title" style:color={theme().text}>{book?.title}</a>
				<a href="/book/{book?.isbn}" class="author" style:color={theme().textDim}>
					{book?.authors.join(", ")}
				</a>

				<!-- Book genres -->
				<p style:color={theme().text}>
					{[...(book?.genres ?? [])].splice(0, 2).join(", ")}
				</p>
			</div>

			<!-- Book cover image -->
			<a aria-label={`Go to details for book "${book?.title}"`} href={`/book/${book?.isbn}`}>
				<img alt={`Cover for book "${book?.title}"`} src={book?.cover} />
			</a>
		</div>
	{/await}

	<!-- Post body -->
	<p class="review" style:color={theme().text}>{body}</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}

	.info {
		display: flex;
		align-items: center;
	}

	.content {
		padding-right: 1rem;
		display: flex;
		flex-direction: column;

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
