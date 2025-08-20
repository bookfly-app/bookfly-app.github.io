<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { getFile } from "../api/storageapi";
	import BookmarkIcon from "../assets/images/icons/BookmarkIcon.svelte";
	import CloseIcon from "../assets/images/icons/CloseIcon.svelte";
	import EmptyHomeIcon from "../assets/images/icons/EmptyHomeIcon.svelte";
	import EnterIcon from "../assets/images/icons/EnterIcon.svelte";
	import ExitIcon from "../assets/images/icons/ExitIcon.svelte";
	import GearIcon from "../assets/images/icons/GearIcon.svelte";
	import InfoIcon2 from "../assets/images/icons/InfoIcon2.svelte";
	import PersonIcon from "../assets/images/icons/PersonIcon.svelte";
	import ProfileIcon from "../assets/images/icons/ProfileIcon.svelte";
	import { logOut, user } from "../backend/auth.svelte";
	import theme from "../themes/theme.svelte";

	let innerWidth = $state(window.innerWidth);
	let innerHeight = $state(window.innerHeight);
	let aspectRatio = $derived(innerWidth / innerHeight);let sidebar: HTMLElement;

	// svelte-ignore state_referenced_locally
	let visible = $state(aspectRatio > 1);

	// svelte-ignore state_referenced_locally
	let left = $derived(visible ? "0px" : aspectRatio > 1 ? "-17rem" : "-23rem");
	let overlayOpacity = $derived(visible ? 0.5 : 0);

	$effect(() => {
		if (aspectRatio > 1) show();
		else hide();
	});

	export function show() {
		visible = true;
		overlayDisplay = "block";
	}

	export function hide() {
		visible = false;
		setTimeout(() => {
			overlayDisplay = "none";
		}, 200);
	}

	function nav(to: string) {
		return function () {
			goto(to);
			hide();
		};
	}

	function signOut() {
		logOut();
		goto("/");
		window.location.reload();
	}

	let overlayDisplay = $state("none");

	onMount(() => {
		let touchStartX = 0;
		let touchEndX = 0;

		const SWIPE_THRESHOLD = 30;
		const EDGE_ZONE = 100;

		document.addEventListener("touchstart", (event) => {
			touchStartX = event.touches[0].clientX;
		});

		document.addEventListener("touchmove", (event) => {
			touchEndX = event.touches[0].clientX;
		});

		document.addEventListener("touchend", () => {
			const swipeDistance = touchEndX - touchStartX;
			if (touchStartX < EDGE_ZONE && swipeDistance > SWIPE_THRESHOLD) {
				show();
			}
		});
	});

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if aspectRatio < 1}
	<div onclick={hide} class="overlay" style:opacity={overlayOpacity} style:display={overlayDisplay}></div>
{/if}
<section style:left bind:this={sidebar}>
	<div class="profile" style:background={theme().backgroundDark}>
		<a class="profile-picture" href="/profile" aria-label="Go to profile">
			{#if user()}
				{#await getFile(user()!.picture) then pfp}
					<img alt="Your profile" src={pfp} class="profile-link" />
				{/await}
			{:else}
				<PersonIcon stroke={theme().textDull} style="width: 4rem; height: 4rem;" />
			{/if}
		</a>
		<div>
			<a href="/profile">
				<h1>
					{user()?.displayName ?? "Guest"}
				</h1>
			</a>
			{#if user()}
				<a href="/profile">
					<h2>@{user()!.username}</h2>
				</a>
			{/if}
		</div>

		{#if aspectRatio < 1}
			<button onclick={hide}>
				<CloseIcon stroke={theme().textBright} style="width: 1.5rem; height: 1.5rem; position: absolute; top: 1.5rem; right: 1.5rem;" />
			</button>
		{/if}
	</div>

	<!-- Navigation buttons -->
	<button class="listing" style:color={theme().text} onclick={nav("/")}>
		<EmptyHomeIcon stroke={theme().text} style="width: 1.5rem;" />
		Home
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/profile")}>
		<ProfileIcon stroke={theme().text} style="width: 1.5rem;" />
		Profile
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/settings")}>
		<BookmarkIcon stroke={theme().text} style="width: 1.5rem;" />
		Saved
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/settings")}>
		<GearIcon stroke={theme().text} style="width: 1.5rem;" />
		Settings
	</button>
	<button class="listing" style:color={theme().text} onclick={nav("/about")}>
		<InfoIcon2 stroke={theme().text} style="width: 1.5rem;" />
		About
	</button>

	{#if user()}
		<button style:background={theme().backgroundDark} class="listing" style:color={theme().text} onclick={signOut}>
			<ExitIcon stroke={theme().text} style="width: 1.5rem;" />
			Log Out
		</button>
	{:else}
		<a style:background={theme().backgroundDark} class="listing" style:color={theme().text} href="/login">
			<EnterIcon stroke={theme().text} style="width: 1.5rem;" />
			Log In
		</a>
	{/if}
</section>

<style>
	section {
		position: fixed;
		height: 100vh;
		top: 0px;
		display: flex;
		flex-direction: column;
		border-right: 1px solid var(--surface-0);
		transition: left 0.25s;
		z-index: 999999;
		background-image: linear-gradient(to bottom, var(--base), var(--mantle));

		.listing {
			text-decoration: none;
			font-size: 1rem;
			display: flex;
			align-items: center;
			width: fit-content;
			gap: 2rem;
			padding-left: 2rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 100%;

			&:hover {
				background: var(--hover);
			}

			&:last-child {
				margin-top: auto;
			}
		}
	}

	.profile-picture {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-right: 1rem;
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
		display: flex;
		align-items: center;

		h1 {
			font-size: 1rem;
			color: var(--text);
			font-weight: normal;
		}

		h2 {
			font-weight: normal;
			font-size: 0.85rem;
			color: var(--overlay-1);
		}

		a {
			text-decoration: none;
		}
	}

	@media (orientation: portrait) {
		section {
			box-shadow: 0px 0px 10px black;
			width: 15rem;
		}
	}

	@media (orientation: landscape) {
		section {
			width: 20rem;
		}
	}

	.overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99;
		width: 100dvw;
		height: 100dvh;
		background-color: black;
		transition: opacity 0.2s;
	}
</style>
