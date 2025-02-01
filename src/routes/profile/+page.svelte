<script lang="ts">
	import { goto } from "$app/navigation";
	import { user } from "../../backend/auth.svelte";
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import New from "../../components/New.svelte";
	import Page from "../../components/Page.svelte";
	import Profile from "../../components/Profile.svelte";

	$effect(() => {
		if (!user()) {
			goto("/login");
		}
	});
</script>

<Background />
<Page>
	{#if user()}
		<Profile user={user()!} />
	{/if}
	<New />
	<Footer selected="profile" />
</Page>
