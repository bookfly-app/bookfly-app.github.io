<script lang="ts">
	import { getUser } from "../../backend/auth.svelte";
	import New from "../../components/New.svelte";
	import Profile from "../../components/Profile.svelte";
</script>

<main>
	{#if getUser()}
		<Profile user={getUser()!} />
	{/if}
	<New />
</main>
