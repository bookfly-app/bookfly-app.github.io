<script lang="ts">
	import type { Book } from "../api/bookapi";
	import type { User } from "../api/userapi";
	import theme from "../themes/theme.svelte";
	import BookCover from "./BookCover.svelte";
	import StarRating from "./StarRating.svelte";

	let { book, rating, user, onclick }: { book: Book, rating?: number, user: User, onclick?: () => void } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element data-rating="{rating}" id="outer" this={onclick ? "div" : "a"} href="/book/{book.isbn}" onclick={() => onclick?.()} style:border-color={theme().textDark}>
	<div class="book-info">
		<h1 style:color={theme().text}>{book.title}</h1>
		<h2 style:color={theme().textDull}>{book.authors.join(", ")}</h2>
	</div>

	{#if rating !== undefined}
		<div class="rating">
			<span style:color={theme().text}>{user.displayName}'s rating:</span>
			<StarRating {rating} size={0.6}/>
			<span style:color={theme().text}>{rating === 10 ? rating : rating.toFixed(1)} / 10</span>
		</div>
	{/if}

	<BookCover style="height: 100%; aspect-ratio: 8 / 11;" {book} />
</svelte:element>

<style>

	#outer {
		position: relative;
		cursor: pointer;
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
			aspect-ratio: 8/11;
		}
	}

	.rating {
		display: flex;
		align-items: center;
		text-align: center;
		font-size: 0.85rem;
		flex-direction: column;
		gap: 0.5rem;
		padding-right: 1rem;
		padding-left: 1rem;
	}

	.book-info {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		width: 50%;

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
