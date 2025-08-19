<script lang="ts">
	import { getUserFromId, getUserFromUsername, getFollowers } from "../../../../api/userapi";
	import Page from "../../../../components/Page.svelte";
	import UserListing from "../../../../components/UserListing.svelte";
	import theme from "../../../../themes/theme.svelte";

	let view: "following" | "followers" = $state("following");

	let { data }: { data: { username: string } } = $props();
	let { username } = data;

	let profileUser = $state(getUserFromUsername(username));
	let following = profileUser.then(user => Promise.all(user.following.map(following => getUserFromId(following))));
	let followers = profileUser.then(user => getFollowers(user));
</script>

<Page type="profile">
	{#await profileUser then}
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
			{#await followers then followers}
				<button
					style:color={view === "followers" ? theme().textBright : theme().textDull}
					style:border-color={view === "followers" ? theme().accent : "transparent"}
					onclick={() => (view = "followers")}
				>
					Followers ({followers.length})
				</button>
			{/await}
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
</Page>

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
