<script lang="ts">
	import Profile from "../../../components/Profile.svelte";
	import { getUserByUsername } from "../../../backend/auth.svelte";

	let { data } = $props();

	let user = $state(null);

	(async function () {
		user = await getUserByUsername(data.user);
	})();
</script>

{#if user}
	<Profile {user} />
{/if}
