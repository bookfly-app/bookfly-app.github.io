<script lang="ts">
	import ProfilePage from '../../../components/ProfilePage.svelte';

	let { data } = $props();

	const { username } = data;
</script>

<ProfilePage {username} />
