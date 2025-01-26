<script lang="ts">
	import { goto } from "$app/navigation";
	import { getBook, type Book } from "../api/bookapi";
	import theme from "../themes/theme.svelte";

	let { user, isbn } = $props();

	let book: Book | null = $state(null);
	(async function () {
		book = await getBook(isbn);
	})();
</script>

<section>
	<div class="profile">
		<button
			style:background-image={`url("${user.picture}")`}
			onclick={() => goto(`/profile/${user.username}`)}
		></button>
	</div>

	<div class="wrapper">
		<span class="user">
			<h2 style:color={theme().textBright}>{user.displayName}</h2>
			<h3 style:color={theme().textDim}>{`@${user.username}`}</h3>
		</span>
		<div class="outer">
			<div class="listing">
				<div class="book-info">
					<h1 style:color={theme().text}>{book?.title}</h1>
					<h2 style:color={theme().textDim}>
						{book?.authors.join(", ")}
					</h2>
					{#if book?.pageCount}
						<span style:color={theme().text}
							>{book?.pageCount} pages</span
						>
					{/if}
					<span style:color={theme().text}
						>{[...(book?.genres ?? [])]
							.splice(0, 2)
							.join(", ")}</span
					>
				</div>
				<img
					class="cover"
					src={book?.cover}
					onclick={() => goto(`/book/${book?.isbn}`)}
				/>
			</div>
			<p class="description" style:color={theme().text}>
				{book?.description}
			</p>
		</div>
	</div>
</section>

<style>
	.description {
		max-height: 10rem;
		text-overflow: ellipsis;
		overflow-y: hidden;
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;

		button {
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			margin-right: 1rem;
			margin-left: 1rem;
			margin-bottom: 4rem;
			background-size: cover;
		}
	}

	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.cover {
		width: 8rem;
		height: 11rem;
	}

	section {
		padding-top: 2rem;
		padding-right: 2rem;
		display: flex;
		border-bottom: 1px solid var(--surface-0);
		padding-bottom: 1rem;
	}

	.listing {
		display: flex;
		padding-bottom: 1rem;

		.book-info {
			padding-right: 1rem;
			display: flex;
			flex-direction: column;

			span {
				padding-top: 1rem;
			}
		}

		h1 {
			font-size: 1rem;
		}

		h2 {
			font-size: 1rem;
			font-weight: normal;
		}
	}

	.user {
		display: flex;
		padding-bottom: 0.5rem;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		h2 {
			font-size: 1.25rem;
		}

		h3 {
			font-weight: normal;
		}
	}
</style>
