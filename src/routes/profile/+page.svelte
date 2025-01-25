<script lang="ts">
	import { getUser } from "../../backend/auth.svelte";
	import New from "../../components/New.svelte";
	import Profile from "../../components/Profile.svelte";
	import Rating from "../../components/Rating.svelte";

	let view = "ratings";
</script>

<main>
	{#if getUser()}
		<Profile user={getUser()!} />
	{/if}
	<New />
</main>
