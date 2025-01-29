<script lang="ts">
	import BellIcon from "../assets/images/icons/BellIcon.svelte";
	import HomeIcon from "../assets/images/icons/HomeIcon.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	let { selected }: { selected: "home" | "profile" | "search" | "messages" } = $props();
</script>

<footer style:background={theme().backgroundDark}>
	<a aria-label="Profile" href="/profile">
		{#if user()}
			<img alt="Your profile" src={user()!.picture ?? ""} class="profile-link" />
		{:else}
			<PersonIcon stroke={selected === "profile" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
		{/if}
	</a>
	<a aria-label="Home" href="/">
		<HomeIcon stroke={selected === "home" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
	</a>
	<a aria-label="Search" href="/search">
		<SearchIcon stroke={selected === "search" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
	</a>
	<a aria-label="Messages" href="/inbox">
		<BellIcon stroke={selected === "messages" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
	</a>
</footer>

<style>
	footer {
		position: fixed;
		width: 100%;
		bottom: 0px;
		left: 50%;
		display: flex;
		align-items: center;
		max-width: var(--max-width);
		transform: translateX(-50%);

		a {
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 25%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.profile-link {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}
</style>
