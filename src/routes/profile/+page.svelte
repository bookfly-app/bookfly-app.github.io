<script lang="ts">
	import { goto } from "$app/navigation";
	import { user } from "../../backend/auth.svelte";

	$effect(() => {
		if (!user()) {
			goto("/login");
		} else {
			goto(`/profile/${user()!.username}`);
		}
	});
</script>
