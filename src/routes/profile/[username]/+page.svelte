<script lang="ts">
	import Profile from "../../../components/Profile.svelte";
	import { getUserFromUsername } from "../../../api/userapi";
	import type { User } from "../../../api/userapi";
	import Footer from "../../../components/Footer.svelte";

	let { data } = $props();

	let user: User | null = $state(null);

	(async function () {
		user = await getUserFromUsername(data.username);
	})();
</script>

{#if user}
	<Profile {user} />
{/if}
<div></div>
<Footer selected="search" />

<style>
	div {
		height: 4rem;
	}
</style>
