<script lang="ts">
	import { getUserFromUsername, type User } from "../../../../api/userapi";
	import Background from "../../../../components/Background.svelte";
	import Footer from "../../../../components/Footer.svelte";
	import UserListing from "../../../../components/UserListing.svelte";
	import theme from "../../../../themes/theme.svelte";

	let view: "following" | "followers" = $state("following");

	let { data }: { data: { username: string } } = $props();
	let { username } = data;

	let user: User | null = $state(null);
	(async () => {
		user = await getUserFromUsername(username);
	})();
</script>

<Background />
<main>
	<div class="view" style:background={theme().backgroundDark}>
		<button
			style:color={view === "following"
				? theme().textBright
				: theme().textDull}
			style:border-color={view === "following"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "following")}
		>
			Following ({user?.following.length})
		</button>
		<button
			style:color={view === "followers"
				? theme().textBright
				: theme().textDull}
			style:border-color={view === "followers"
				? theme().accent
				: "transparent"}
			onclick={() => (view = "followers")}
		>
			Followers ({user?.followers.length})
		</button>
	</div>

	{#if user}
		{#each user[view] as child}
			<UserListing user={child} />
		{/each}
	{/if}
</main>
<Footer selected="profile" />

<style>
	.view {
		display: flex;
		justify-content: space-evenly;

		button {
			border-bottom-style: solid;
			border-bottom-width: 3px;
			padding-top: 2rem;
			font-size: 1rem;
			padding-bottom: 1rem;
			padding-left: 2rem;
			padding-right: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
