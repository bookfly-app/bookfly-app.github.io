<script lang="ts">
	import { goto } from "$app/navigation";
	import { getBook, type Book } from "../api/api";
	import Star from "../assets/images/icons/Star.svelte";
	import theme from "../themes/theme.svelte";

	let { isbn, rating, review, user } = $props();

	let book: Book | null = $state(null);

	(async function () {
		book = await getBook(isbn);
	})();
</script>

<section
	style:background={theme().background}
	style:border-bottom={`1px solid ${theme().textDark}`}
>
	<div class="profile">
		<button
			style:background-image={`url("${user.picture}")`}
			onclick={() => goto(`/profile/${user.username}`)}
		></button>
	</div>
	<div class="content-outer">
		<span class="user">
			<h2 style:color={theme().textBright}>{user.displayName}</h2>
			<h3 style:color={theme().textDim}>{`@${user.username}`}</h3>
		</span>
		<div class="info">
			<div class="content">
				<h2 class="title" style:color={theme().text}>{book?.title}</h2>
				<h2 class="title" style:color={theme().textDim}>
					{book?.authors.join(", ")}
				</h2>
				<span class="rating">
					<Star
						stroke="#FFFFAA"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<Star
						stroke="#FFFFAA"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<Star
						stroke="#FFFFAA"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<Star
						stroke="#FFFFAA"
						style="width: 1.5rem; height: 1.5rem;"
					/>
					<Star
						stroke="#FFFFAA"
						style="width: 1.5rem; height: 1.5rem;"
					/>
				</span>
				<h1 class="rating-number" style:color={theme().text}>
					{rating} / 5
				</h1>
			</div>
			<img src={book?.cover} />
		</div>
		{#if review}
			<p class="review" style:color={theme().text}>{review}</p>
		{/if}
	</div>
</section>

<style>
	section {
		padding-top: 2rem;
		padding-right: 1rem;
		padding-bottom: 2rem;
		display: flex;
	}

	.content-outer {
		display: flex;
		flex-direction: column;
	}

	.info {
		display: flex;
		align-items: center;
	}

	.review {
		padding-top: 1rem;
	}

	.rating-number {
		font-size: 2.25rem;
	}

	.rating {
		display: flex;
		padding-top: 1rem;
		padding-bottom: 1rem;
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

	.content {
		padding-right: 1rem;

		.title {
			font-size: 1rem;
			font-weight: normal;
		}
	}

	.user {
		display: flex;
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

	img {
		width: 8.5rem;
		height: 13rem;
	}
</style>
