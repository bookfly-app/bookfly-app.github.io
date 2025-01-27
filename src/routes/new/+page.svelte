<script lang="ts">
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import theme from "../../themes/theme.svelte";
</script>

<Background />
<main>
	<h1 style:color={theme().textBright}>New Post</h1>
	<p style:color={theme().textDull}>What kind of post do you want to make?</p>

	<a href="/new/general" style:background={theme().backgroundDark}>
		<h2 style:color={theme().text}>General</h2>
		<p style:color={theme().textDull}>A general post with some text and optionally images or videos.</p>
	</a>
	<a href="/new/rating" style:background={theme().backgroundDark}>
		<h2 style:color={theme().text}>Rating</h2>
		<p style:color={theme().textDull}>Rate or review a book</p>
	</a>
	<a href="/new/update" style:background={theme().backgroundDark}>
		<h2 style:color={theme().text}>Update</h2>
		<p style:color={theme().textDull}>An update on starting, finishing, or abandoning a book.</p>
	</a>
</main>
<Footer selected="profile" />

<style>
	main {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
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
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75%;
		border-radius: 1rem;
		text-align: center;
		gap: 0.5rem;
	}
</style>
