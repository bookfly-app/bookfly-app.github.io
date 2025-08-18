<script lang="ts">
	import { getBookDiscussions } from "../../../api/bookapi";
	import SearchIcon from "../../../assets/images/icons/SearchIcon.svelte";
	import { updateUser, user } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import AnyPost from "../../../components/posts/AnyPost.svelte";
	import Sidebar from "../../../components/Sidebar.svelte";
	import theme, { accentGradient } from "../../../themes/theme.svelte.js";

	let { data } = $props();
	let book = data.book;

	let view: "info" | "discussion" = $state("info");

	let discussions = getBookDiscussions(book.isbn);
	let sidebar: Sidebar;
	let isInReadingList = $derived(user()?.readingList.includes(book.isbn) ?? false)

	$effect(() => {
		console.log($state.snapshot(user()?.readingList));
	});
	
	async function addToReadingList() {
		const readingList = user()!.readingList;
		updateUser({ readingList: [...readingList, book.isbn]  })
		user()?.readingList.push(book.isbn);
	}

	async function removeFromReadingList() {
		const readingList = user()!.readingList.filter(isbn => isbn !== book.isbn);
		updateUser({ readingList })
		user()!.readingList = readingList;
	}

	function makeReadable(description: string, interval = 3) {
		description = description.replaceAll("--", "—");
		description = description.replaceAll(/\.(\S)/g, (_match, letter) => `. ${letter}`);

		let sentences = description.split(/([.!?])\s*/);

		let sentenceArray = [];
		for (let i = 0; i < sentences.length; i += 2) {
			sentenceArray.push(sentences[i] + sentences[i + 1]);
		}

		let formattedText = sentenceArray
			.map((sentence, index) => {
				if ((index + 1) % interval === 0 && index !== sentenceArray.length - 1) {
					return sentence + "\n\n";
				}
				return sentence;
			})
			.join("");

		formattedText = formattedText.replaceAll(/\.(\S)/g, (_match, letter) => `. ${letter}`);

		return formattedText;
	}
</script>

<Background />
<Page style="overflow-y: hidden;">
	<nav style:background={theme().backgroundDark}>
		<div class="banner">
			<button style:background-image={`url("${user()?.picture ?? ""}")`} onclick={() => sidebar.show()} aria-label="Open sidebar"></button>
			<div class="book-name">
				<h1 style:color={theme().textBright}>{book.title}</h1>
				<h2 style:color={theme().textDim}>{book.authors.join(", ")}</h2>
			</div>
			<SearchIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
		</div>
	</nav>
	<section>
		<div style:background-color={theme().backgroundDark} class="views">
			<button
				style:color={view === "info" ? theme().textBright : theme().textDull}
				style:border-bottom-color={view === "info" ? theme().accent : "transparent"}
				onclick={() => (view = "info")}
			>
				Info
			</button>
			<button
				style:color={view === "discussion" ? theme().textBright : theme().textDull}
				style:border-bottom-color={view === "discussion" ? theme().accent : "transparent"}
				onclick={() => (view = "discussion")}
			>
				Discussion
			</button>
		</div>

		{#if view === "info"}
			<div class="book-info">
				<img alt={`${book.title} cover`} class="cover" src={book.cover} />
				<p class="description" style:color={theme().textDull}>
					{makeReadable(book.description)}
				</p>
			</div>
		{:else if view === "discussion"}
			{#await discussions then discussions}
				{#each discussions as post}
					<AnyPost {post} />
				{/each}
			{/await}
		{/if}

		{#if user()}
			{#if isInReadingList}
				<button id="add-to-reading-list" class="remove-from-reading-list" onclick={removeFromReadingList}>
					Remove from Reading List
				</button>
			{:else}
				<button id="add-to-reading-list" style:background={accentGradient()} onclick={addToReadingList}>
					Add to Reading List
				</button>
			{/if}
		{/if}
	</section>


	<Footer selected="search" />
	<Sidebar bind:this={sidebar} />
</Page>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		overflow-y: scroll;
	}

	#add-to-reading-list {
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 100vmax;
		box-shadow: 0px 0px 0.5rem black;
		transition: scale 0.1s;
		margin-top: 1rem;
		margin-bottom: 8rem;

		&:hover {
			scale: 105%;
		}
	}

	.remove-from-reading-list {
		background: linear-gradient(#f38ba8, #ff7788);
	}

	.book-info {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.views {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-right: 2rem;
		padding-left: 2rem;

		button {
			border-bottom-width: 2px;
			border-bottom-style: solid;
			padding-left: 3rem;
			padding-right: 3rem;
			font-weight: normal;
			font-size: 1rem;
			white-space: nowrap;
			padding-top: 0.5rem;
			padding-bottom: 1rem;
		}
	}

	.book-name {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav {
		display: flex;
		flex-direction: column;

		h1 {
			font-size: 1rem;
		}

		h2 {
			font-size: 1rem;
		}
	}

	.banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		button {
			height: 3rem;
			width: 3rem;
			border-radius: 50%;
			background-size: cover;
			background-position: center;
		}
	}

	.cover {
		width: 10rem;
	}

	h2 {
		font-weight: normal;
	}

	.description {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		font-size: 0.85rem;
		white-space: pre-wrap;
	}
</style>
