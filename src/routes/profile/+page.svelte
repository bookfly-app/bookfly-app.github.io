<script lang="ts">
	import { goto } from "$app/navigation";
	import { getUser } from "../../backend/auth.svelte";
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import New from "../../components/New.svelte";
	import Page from "../../components/Page.svelte";
	import Profile from "../../components/Profile.svelte";

	$effect(() => {
		if (!getUser()) {
			goto("/login");
		}
	});
</script>

<Background />
<Page>
	{#if getUser()}
		<Profile user={getUser()!} />
	{/if}
	<New />
	<div></div>
	<Footer selected="profile" />
</Page>

<style>
	div {
		height: 4rem;
	}
</style>
