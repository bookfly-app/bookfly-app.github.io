<script lang="ts">
	import { getUserFromId, getUserFromUsername } from "../api/userapi";
	import { user } from "../backend/auth.svelte";
	import Footer from "./Footer.svelte";
	import New from "./New.svelte";
	import Page from "./Page.svelte";
	import Profile from "./Profile.svelte";
	import Sidebar from "./Sidebar.svelte";

	let { userid = undefined, username = undefined }: { userid?: string; username?: string } = $props();

	let userProfile = userid ? getUserFromId(userid) : getUserFromUsername(username!);
	let sidebar: Sidebar = $state(null!);
</script>

<Page>
	{#await userProfile then userProfile}
		{#if userProfile}
			<Profile {sidebar} user={userProfile} />
			{#if userProfile.id === user()?.id}
				<New />
			{/if}
		{/if}
	{/await}
	<div></div>
	<Sidebar bind:this={sidebar} />
	<Footer selected="profile" />
</Page>

<style>
	div {
		height: 4rem;
	}
</style>
