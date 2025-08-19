<script lang="ts">
	import { getFile } from "../api/storageapi";
	import BellIcon from "../assets/images/icons/BellIcon.svelte";
	import EmptyHomeIcon from "../assets/images/icons/EmptyHomeIcon.svelte";
	import ProfileIcon from "../assets/images/icons/ProfileIcon.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	let { selected = undefined }: { selected?: "home" | "profile" | "search" | "messages" } = $props();
</script>

<div class="padding">&nbsp;</div>
<footer>
	<a aria-label="Home" href="/">
		<EmptyHomeIcon stroke={selected === "home" ? "var(--text)" : theme().textDull} style="width: 1.5rem;" />
	</a>
	<a aria-label="Search" href="/search">
		<SearchIcon stroke={selected === "search" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
	</a>
	<a aria-label="Messages" href="/inbox">
		<BellIcon stroke={selected === "messages" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
	</a>
	<a aria-label="Profile" href="/profile">
		{#if user()}
			{#await getFile(user()!.picture) then pfp}
				<img alt="Your profile" src={pfp} class="profile-link" />
			{/await}
		{:else}
			<ProfileIcon stroke={selected === "profile" ? theme().textBright : theme().textDull} style="width: 1.5rem;" />
		{/if}
	</a>
</footer>

<style>
	.padding {
		height: 4rem;
		width: 100%;
	}

	footer {
		position: fixed;
		bottom: 0px;
		left: 0px;
		display: flex;
		align-items: center;
		max-width: var(--max-width);
		background: var(--crust);

		a {
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 25%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	@media (orientation: portrait) {
		footer {
			width: 100%;
		}
	}

	@media (orientation: landscape) {
		footer {
			margin-left: 20rem;
			width: calc(0.714 * (100% - 20rem));
		}
	}

	.profile-link {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}
</style>
