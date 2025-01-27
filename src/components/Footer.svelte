<script lang="ts">
	import HomeIcon from "../assets/images/icons/HomeIcon.svelte";
	import MessageIcon from "../assets/images/icons/MessageIcon.svelte";
	import SearchIcon from "../assets/images/icons/SearchIcon.svelte";
	import { getUser } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	let { selected }: { selected: "home" | "profile" | "search" | "messages" } =
		$props();
</script>

<footer style:background={theme().backgroundDark}>
	<a aria-label="Profile" href="/profile">
		<img
			alt="Your profile"
			src={getUser()?.picture ?? ""}
			class="profile-link"
		/>
	</a>
	<a aria-label="Home" href="/">
		<HomeIcon
			stroke={selected === "home" ? theme().textBright : theme().textDull}
			style="width: 1.5rem;"
		/>
	</a>
	<a aria-label="Search" href="/search">
		<SearchIcon
			stroke={selected === "search"
				? theme().textBright
				: theme().textDull}
			style="width: 1.5rem;"
		/>
	</a>
	<a aria-label="Messages" href="/search">
		<MessageIcon
			stroke={selected === "messages"
				? theme().textBright
				: theme().textDull}
			style="width: 1.5rem;"
		/>
	</a>
</footer>

<style>
	footer {
		position: absolute;
		width: 100vw;
		bottom: 0px;
		left: 0px;
		display: flex;
		align-items: center;

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
