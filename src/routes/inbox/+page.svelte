<script lang="ts">
	import Page from "../../components/Page.svelte";
	import GearIcon from "../../assets/images/icons/GearIcon.svelte";
	import Header from "../../components/Header.svelte";
	import { getFollowingPosts, getMentions, getRepliesToUser } from "../../api/userapi";
	import AnyPost from "../../components/posts/AnyPost.svelte";
	import { user } from "../../backend/auth.svelte";
	import { goto } from "$app/navigation";

	type View = "mentions" | "replies" | "following";

	let view: View = $state(new URLSearchParams(window.location.search).get("view") as View ?? "mentions");

	const mentions = $derived(user() ? getMentions() : []);
	const replies = $derived(user() ? getRepliesToUser(user()!) : []);
	const following = $derived(user() ? getFollowingPosts() : []);

	function navTo(viewName: View) {
		return function() {
			const params = new URLSearchParams({ view: viewName });
			goto(`/inbox?${params}`);
			view = viewName;
		}
	}
</script>

<Page type="inbox">
	<Header title="Inbox" />
	<a class="settings" href="/settings/notifications">
		<GearIcon stroke="var(--overlay-1)" style="width: 1.5rem; height: 1.5rem;" />
	</a>
	<div class="views">
		<button
			style:border-color={view === "mentions" ? "var(--lavender)" : "transparent"}
			style:color={view === "mentions" ? "var(--lavender)" : "var(--overlay-1)"}
			onclick={navTo("mentions")}
		>Mentions</button>
		<button
			style:border-color={view === "replies" ? "var(--lavender)" : "transparent"}
			style:color={view === "replies" ? "var(--lavender)" : "var(--overlay-1)"}
			onclick={navTo("replies")}
		>Replies</button>
		<button
			style:border-color={view === "following" ? "var(--lavender)" : "transparent"}
			style:color={view === "following" ? "var(--lavender)" : "var(--overlay-1)"}
			onclick={navTo("following")}
		>Following</button>
	</div>

	<div class="posts">
		{#if view === "mentions"}
			{#await mentions then mentions}
				{#each mentions as mention}
					<AnyPost post={mention} />
				{/each}
			{/await}
		{:else if view === "replies"}
			{#await replies then replies}
				{#each replies as reply}
					<AnyPost post={reply} />
				{/each}
			{/await}
		{:else if view === "following"}
			{#await following then following}
				{#each following as followedPost}
					<AnyPost post={followedPost} />
				{/each}
			{/await}
		{/if}
	</div>
</Page>

<style>
	.views {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding-top: 2rem;
		background-color: var(--crust);
		margin-top: 1.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		view-transition-name: inbox-views;

		> * {
			font-size: 0.85rem;
			padding-bottom: 0.5rem;
			border-bottom-width: 2px;
			border-bottom-style: solid;
			color: var(--text);
		}
	}

	.settings {
		position: fixed;
		top: 1rem;
		right: 1rem;
	}
</style>
