<script lang="ts" module>
	import { goto } from "$app/navigation";
	import CloseIcon from "../assets/images/icons/CloseIcon.svelte";
	import ExitIcon from "../assets/images/icons/ExitIcon.svelte";
	import GearIcon from "../assets/images/icons/GearIcon.svelte";
	import HomeIcon from "../assets/images/icons/HomeIcon.svelte";
	import PeopleIcon from "../assets/images/icons/PeopleIcon.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import { getUser } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";
	import { logOut } from "../backend/auth.svelte";

	let sidebar: HTMLElement;

	export function showSidebar() {
		sidebar.style.left = "0px";
	}

	function nav(to: string) {
		return function () {
			goto(to);
			sidebar.style.left = "-80vw";
		};
	}

	function signOut() {
		logOut();
	}
</script>

<section
	style:background-image={`linear-gradient(${theme().background}, ${theme().backgroundDim})`}
	bind:this={sidebar}
>
	<div class="profile">
		<a
			class="profile-picture"
			style:background-image={`url("${getUser()?.picture ?? ""}")`}
			href="/profile"
			aria-label="Go to profile"
		></a>
		<div>
			<a href="/profile"
				><h1 style:color={theme().textBright}>
					{getUser()?.displayName ?? ""}
				</h1></a
			>
			<a href="/profile"
				><h2 style:color={theme().textDim}>
					@{getUser()?.username ?? ""}
				</h2></a
			>
		</div>
		<button onclick={() => (sidebar.style.left = "-80vw")}>
			<CloseIcon
				stroke="#FFFFFF"
				style="width: 1.5rem; height: 1.5rem; position: absolute; top: 1.5rem; right: 1.5rem;"
			/>
		</button>
	</div>

	<!-- Navigation buttons -->
	<button style:color={theme().text} onclick={nav("/")}>
		<HomeIcon stroke={theme().text} style="width: 2rem;" />
		Home
	</button>
	<button style:color={theme().text} onclick={nav("/profile")}>
		<PersonIcon stroke={theme().text} style="width: 2rem;" />
		Profile
	</button>
	<button style:color={theme().text} onclick={nav("/community")}>
		<PeopleIcon stroke={theme().text} style="width: 2rem;" />
		Community
	</button>
	<button style:color={theme().text} onclick={nav("/settings")}>
		<GearIcon stroke={theme().text} style="width: 2rem;" />
		Settings
	</button>
	<button style:color={theme().text} onclick={signOut}>
		<ExitIcon stroke={theme().text} style="width: 2rem;" />
		Log Out
	</button>
</section>

<style>
	section {
		position: absolute;
		left: -80vw;
		width: 80vw;
		height: 100vh;
		top: 0px;
		display: flex;
		flex-direction: column;
		border-right: 2px solid var(--surface-0);
		transition: left 0.25s;

		button {
			font-size: 1.5rem;
			display: flex;
			width: fit-content;
			gap: 2rem;
			padding-left: 2rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}

		> *:last-child {
			margin-top: auto;
			margin-bottom: 0.5rem;
		}
	}

	.profile-picture {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin-right: 2rem;
		margin-left: 2rem;
		background-size: cover;
		background-position: center;
	}

	.profile {
		padding-top: 2rem;
		border-bottom: 1px solid var(--surface-0);
		padding-bottom: 2rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;

		h2 {
			font-weight: normal;
		}

		a {
			text-decoration: none;
		}
	}
</style>
