<script lang="ts">
	import type { User } from "../../../api/userapi";
	import { getUserFromUsername } from "../../../api/userapi";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import Profile from "../../../components/Profile.svelte";

	let { data } = $props();

	let user: User | null = $state(null);

	(async function () {
		user = await getUserFromUsername(data.username);
	})();
</script>

<Background />

<Page>
	{#if user}
		<Profile {user} />
	{/if}
	<div></div>
	<Footer selected="search" />
</Page>

<style>
	div {
		height: 4rem;
	}
</style>
