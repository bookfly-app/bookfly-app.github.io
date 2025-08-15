<script lang="ts">
	import { goto } from "$app/navigation";
	import BookmarkIcon from "../assets/images/icons/BookmarkIcon.svelte";
	import CloseIcon from "../assets/images/icons/CloseIcon.svelte";
	import EnterIcon from "../assets/images/icons/EnterIcon.svelte";
	import ExitIcon from "../assets/images/icons/ExitIcon.svelte";
	import GearIcon from "../assets/images/icons/GearIcon.svelte";
	import HomeIcon from "../assets/images/icons/HomeIcon.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import { logOut, user } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	let sidebar: HTMLElement;

	export function show() {
		sidebar.style.left = "0px";
	}

	function nav(to: string) {
		return function () {
			goto(to);
			sidebar.style.left = "-83%";
		};
	}

	function signOut() {
		logOut();
		goto("/");
	}
</script>

<section
	style:background-image={`linear-gradient(${theme().background}, ${theme().backgroundDim})`}
	style:border-color={theme().textDark}
	bind:this={sidebar}
>
	<div class="profile" style:background={theme().backgroundDark}>
		<a class="profile-picture" href="/profile" aria-label="Go to profile">
			{#if user()}
				<img alt="Your profile" src={user()!.picture ?? ""} class="profile-link" />
			{:else}
				<PersonIcon stroke={theme().textDull} style="width: 5rem;" />
			{/if}
		</a>
		<div>
			<a href="/profile">
				<h1 style:color={theme().textBright}>
					{user()?.displayName ?? "Guest"}
				</h1>
			</a>
			{#if user()}
				<a href="/profile">
					<h2 style:color={theme().textDim}>
						@{user()!.username}
					</h2>
				</a>
			{/if}
		</div>

		{#if window.innerWidth < window.innerHeight}
			<button onclick={() => (sidebar.style.left = "-83vw")}>
				<CloseIcon stroke={theme().textBright} style="width: 1.5rem; height: 1.5rem; position: absolute; top: 1.5rem; right: 1.5rem;" />
			</button>
		{/if}
	</div>

	<!-- Navigation buttons -->
	<button class="listing" style:color={theme().text} onclick={nav("/")}>
		<HomeIcon stroke={theme().text} style="width: 2rem;" />
		Home
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/profile")}>
		<PersonIcon stroke={theme().text} style="width: 2rem;" />
		Profile
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/settings")}>
		<BookmarkIcon stroke={theme().text} style="width: 2rem;" />
		Saved
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/settings")}>
		<GearIcon stroke={theme().text} style="width: 2rem;" />
		Settings
	</button>

	{#if user()}
		<button class="listing" style:color={theme().text} onclick={signOut}>
			<ExitIcon stroke={theme().text} style="width: 2rem;" />
			Log Out
		</button>
	{:else}
		<a class="listing" style:color={theme().text} href="/login">
			<EnterIcon stroke={theme().text} style="width: 2rem;" />
			Log In
		</a>
	{/if}
</section>

<style>
	section {
		position: absolute;
		left: -22rem;
		height: 100vh;
		top: 0px;
		display: flex;
		flex-direction: column;
		border-right-width: 1px;
		border-right-style: solid;
		transition: left 0.25s;
		width: 20rem;

		.listing {
			text-decoration: none;
			font-size: 1.25rem;
			display: flex;
			align-items: center;
			width: fit-content;
			gap: 2rem;
			padding-left: 2rem;
			padding-top: 1rem;
			padding-bottom: 1rem;

			&:last-child {
				margin-top: auto;
				margin-bottom: 0.5rem;
			}
		}
	}

	.profile-picture {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-right: 2rem;
		margin-left: 2rem;
		background-size: cover;
		background-position: center;
		overflow: hidden;

		img {
			width: 4rem;
			height: 4rem;
		}
	}

	.profile {
		padding-top: 2rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		padding-bottom: 2rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;

		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-weight: normal;
			font-size: 1.5rem;
		}

		a {
			text-decoration: none;
		}
	}

	@media (orientation: portrait) {
		section {
			box-shadow: 0px 0px 10px black;
		}
	}
</style>
