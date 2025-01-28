<script lang="ts">
	import { getUserFromId, getUserFromUsername } from "../../../../api/userapi";
	import Background from "../../../../components/Background.svelte";
	import Footer from "../../../../components/Footer.svelte";
	import UserListing from "../../../../components/UserListing.svelte";
	import theme from "../../../../themes/theme.svelte";

	let view: "following" | "followers" = $state("following");

	let { data }: { data: { username: string } } = $props();
	let { username } = data;

	let user = $state(getUserFromUsername(username));
	let following = user.then(user => Promise.all(user.following.map(following => getUserFromId(following))));
	let followers = user.then(user => Promise.all(user.followers.map(follower => getUserFromId(follower))));
</script>

<Background />
<main>
	{#await user then user}
		<div class="view" style:background={theme().backgroundDark}>
			{#await following then following}
				<button
					style:color={view === "following" ? theme().textBright : theme().textDull}
					style:border-color={view === "following" ? theme().accent : "transparent"}
					onclick={() => (view = "following")}
				>
					Following ({following.length})
				</button>
			{/await}
			<button
				style:color={view === "followers" ? theme().textBright : theme().textDull}
				style:border-color={view === "followers" ? theme().accent : "transparent"}
				onclick={() => (view = "followers")}
			>
				Followers ({user?.followers.length})
			</button>
		</div>

		{#if view === "following"}
			{#await following then following}
				{#each following as child}
					<UserListing user={child} />
				{/each}
			{/await}
		{:else if view === "followers"}
			{#await followers then followers}
				{#each followers as child}
					<UserListing user={child} />
				{/each}
			{/await}
		{/if}
	{/await}
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
