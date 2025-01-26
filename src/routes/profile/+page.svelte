<script lang="ts">
	import { getUser } from "../../backend/auth.svelte";
	import Footer from "../../components/Footer.svelte";
	import New from "../../components/New.svelte";
	import Profile from "../../components/Profile.svelte";
</script>

<main>
	{#if getUser()}
		<Profile user={getUser()!} />
	{/if}
	<New />
	<div></div>
</main>
<Footer selected="profile" />

<style>
	div {
		height: 4rem;
	}
</style>
