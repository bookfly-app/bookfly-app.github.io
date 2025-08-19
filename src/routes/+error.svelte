<script lang="ts">
	import CatIcon from "../assets/images/icons/CatIcon.svelte";
	import Footer from "../components/Footer.svelte";
	import Page from "../components/Page.svelte";
</script>

<Page>
	<section>
		<h1>Uh oh!</h1>
		<p>We couldn't find that page :c</p>
		<CatIcon stroke="var(--mantle)" style="width: 50; height: 50%; margin-left: auto; margin-right: auto; margin-top: 2rem;"/>
		<a href="/">Go to Wallflower Home</a>
	</section>
	<Footer selected="profile" />
</Page>

<style>
	section {
		padding: 2rem;
		display:  flex;
		flex-direction: column;
		
		h1 {
			color: var(--subtext-1);
			font-weight: normal;
		}

		p {
			color: var(--overlay-1);
			font-size: 0.85rem;
		}

		a {
			background-image: linear-gradient(to bottom right, var(--lavender), var(--blue));
			padding: 0.5rem 2rem 0.5rem 2rem;
			box-shadow: 0px 0px 0.5rem black;
			border-radius: 100vmax;
			color: var(--crust);
			width: fit-content;
			margin-top: 3rem;
			font-size: 0.85rem;
			text-decoration: none;
			margin-left: auto;
			margin-right: auto;
			transition: scale 0.2s;

			&:hover {
				scale: 105%;
			}
		}
	}
</style>
