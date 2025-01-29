<script lang="ts">
	import { getUserFromUsername } from "../../../api/userapi";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import Profile from "../../../components/Profile.svelte";

	let { data } = $props();

	let user = getUserFromUsername(data.username);
</script>

<Background />

<Page>
	{#await user then user}
		{#if user}
			<Profile {user} />
		{/if}
	{/await}
	<div></div>
	<Footer selected="search" />
</Page>

<style>
	div {
		height: 4rem;
	}
</style>
