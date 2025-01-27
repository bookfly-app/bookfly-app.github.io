<script lang="ts">
	import { goto } from "$app/navigation";
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import theme from "../../themes/theme.svelte";

	let search;

	let { data }: { data: { searchTerm: string } } = $props();

	let view: "posts" | "books" | "people" = $state("posts");

	let searchTerm: string;

	function handleSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			goto(`/search/${searchTerm.replace(" ", "+")}`);
		}
	}
</script>

<Background />
<main>
	<input
		style:background={theme().backgroundDark}
		style:color={theme().textBright}
		type="text"
		bind:value={searchTerm}
		onkeyup={handleSearch}
		bind:this={search}
	/>

	<div class="views" style:border-color={theme().textDark}>
		<button
			style:color={view === "posts"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "posts")}
		>
			Posts
		</button>
		<button
			style:color={view === "books"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "books")}
		>
			Books
		</button>
		<button
			style:color={view === "people"
				? theme().textBright
				: theme().textDull}
			onclick={() => (view = "people")}
		>
			People
		</button>
	</div>
</main>
<Footer selected="search" />

<style>
	main {
		padding-top: 1rem;
	}

	.views {
		display: flex;
		justify-content: space-between;
		padding-top: 2rem;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		padding-left: 2rem;
		padding-right: 2rem;

		> * {
			padding-bottom: 0.75rem;
		}
	}

	input {
		margin-left: 2rem;
		border-radius: 100vmax;
		width: calc(100% - 4rem);
		padding-left: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
</style>
