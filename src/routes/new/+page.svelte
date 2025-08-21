<script lang="ts">
	import theme, { accentGradient } from "../../themes/theme.svelte";
	import Page from "../../components/Page.svelte";
	import BackButton from "../../components/BackButton.svelte";
</script>

<Page type="new" class="new-page">
	<span class="heading">
		<BackButton style="position: absolute; left: 1rem;" />
		<h1>New Post</h1>
	</span>

	<p class="kind" style:color={theme().textDull}>What kind of post do you want to make?</p>

	<!-- General post -->
	<a href="/new/general" style:background={accentGradient()}>
		<h2 style:color={theme().textDark}>General</h2>
		<p style:color={theme().textDim}>
			A general post with some text and optionally images or videos.
		</p>
	</a>

	<!-- Rating post -->
	<a href="/new/rating" style:background={accentGradient()}>
		<h2 style:color={theme().textDark}>Rating</h2>
		<p style:color={theme().textDim}>Rate or review a book</p>
	</a>

	<!-- Update post -->
	<a href="/new/update" style:background={accentGradient()}>
		<h2 style:color={theme().textDark}>Update</h2>
		<p style:color={theme().textDim}>
			An update on starting, finishing, or abandoning a book.
		</p>
	</a>
	<p style:color={theme().textDim} class="note">
		If you rate a book, it'll automatically mark it as finished. Only post an update when you
		finish a book if you don't want to rate it.
	</p>
</Page>

<style>
	:global(.new-page) {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: normal;
	}

	h1 + p {
		margin-top: -1.5rem;
	}

	.note {
		padding-left: 4rem;
		padding-right: 4rem;
	}

	h2 {
		font-weight: normal;
		font-size: 1.25rem;
	}

	p {
		font-size: 0.85rem;
	}

	a {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 75%;
		border-radius: 1rem;
		text-align: center;
		gap: 0.5rem;
		height: 8rem;
		text-decoration: none;
		box-shadow: 0px 0px 1rem black;
		transition: scale 0.1s;

		&:hover {
			scale: 105%;
		}
	}

	.kind {
		margin-top: 4rem;
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
		justify-content: center;
		position: fixed;
		top: 0px;
		background-color: var(--crust);
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		left: 0px;

		h1 {
			color: var(--text);
			font-weight: normal;
			font-size: 1.5rem;
		}
	}
</style>
