<script lang="ts">
	import { getUserFromUsername } from "../../../api/userapi";
	import { user } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import New from "../../../components/New.svelte";
	import Page from "../../../components/Page.svelte";
	import Profile from "../../../components/Profile.svelte";
	import Sidebar from "../../../components/Sidebar.svelte";

	let { data } = $props();

	let userProfile = getUserFromUsername(data.username);
	let sidebar: Sidebar = $state(null!);
</script>

<Background />

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
