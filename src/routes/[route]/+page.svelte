<script lang="ts">
	import ProfilePage from '../../components/ProfilePage.svelte';

	let { data } = $props();

	let { route } = data;

	let username = route.match(/^@(.+)$/)?.[1];
</script>

{#if username}
	<ProfilePage {username} />
{/if}
