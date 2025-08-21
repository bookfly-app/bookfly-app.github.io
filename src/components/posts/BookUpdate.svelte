<script lang="ts">
	import { getBook } from "../../api/bookapi";

	let { isbn, body, user, updateType } = $props();

	let book = getBook(isbn);
</script>

<section>
	{#await book then book}
		<!-- Update information -->
		<p class="rating-line">
			{user.displayName}
			{#if updateType === "start"}
				started reading
			{:else if updateType === "finish"}
				finished reading
			{:else if updateType === "abandon"}
				abandoned
			{/if}
			<i>{book?.title}</i>
			:
		</p>

		<!-- Book info -->
		<div class="info">
			<div class="content">
				<!-- Book title & authors -->
				<a href="/book/{book?.isbn}" class="title">{book?.title}</a>
				<a href="/book/{book?.isbn}" class="author">
					{book?.authors.join(", ")}
				</a>

				<!-- Book genres -->
				<p>
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
	<p class="review">{body}</p>
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
		width: 70%;

		.title,
		.author {
			font-weight: normal;
			text-decoration: none;
			text-align: center;
		}

		.title {
			font-size: 1.2rem;
			color: var(--text);
		}

		.author {
			font-size: 0.9rem;
			color: var(--surface-2);
		}

		p {
			font-size: 0.85rem;
			padding-top: 1rem;
			color: var(--subtext-1);
			text-align: center;
		}
	}

	.rating-line {
		padding-bottom: 1rem;
		font-size: 0.85rem;
		color: var(--overlay-1);

		i {
			color: var(--text);
		}
	}

	img {
		width: 6rem;
		height: 9rem;
	}

	.review {
		padding-top: 1rem;
		font-size: 0.85rem;
		color: var(--subtext-1);
	}
</style>
