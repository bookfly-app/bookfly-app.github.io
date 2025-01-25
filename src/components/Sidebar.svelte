<script lang="ts" module>
	import { goto } from "$app/navigation";
	import CloseIcon from "../assets/images/icons/CloseIcon.svelte";
	import GearIcon from "../assets/images/icons/GearIcon.svelte";
	import HomeIcon from "../assets/images/icons/HomeIcon.svelte";
	import PeopleIcon from "../assets/images/icons/PeopleIcon.svelte";
	import { getUser } from "../backend/auth.svelte";

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
</script>

<section bind:this={sidebar}>
	<div class="profile">
		<img
			src={getUser()?.picture ?? ""}
			style="width: 6rem; border-radius: 50%; margin-right: 2rem; margin-left: 2rem;"
			onclick={nav("profile")}
		/>
		<div>
			<h1>{getUser()?.displayName ?? ""}</h1>
			<h2>@{getUser()?.username ?? ""}</h2>
		</div>
		<button onclick={() => (sidebar.style.left = "-80vw")}>
			<CloseIcon
				stroke="#FFFFFF"
				style="width: 2rem; height: 2rem; position: absolute; top: 1.5rem; right: 1.5rem;"
			/>
		</button>
	</div>

	<!-- Navigation buttons -->
	<button onclick={nav("/")}>
		<HomeIcon stroke="#FFFFFF" style="width: 2rem;" />
		Home
	</button>
	<button onclick={nav("/community")}>
		<PeopleIcon stroke="#FFFFFF" style="width: 2rem;" />
		Community
	</button>
	<button onclick={nav("/settings")}>
		<GearIcon stroke="#FFFFFF" style="width: 2rem;" />
		Settings
	</button>
</section>

<style>
	section {
		position: absolute;
		left: -80vw;
		background-color: var(--crust);
		width: 80vw;
		height: 100vh;
		top: 0px;
		display: flex;
		flex-direction: column;
		border-right: 2px solid var(--surface-0);
		transition: left 0.25s;

		button {
			color: var(--text);
			font-size: 2rem;
			display: flex;
			width: fit-content;
			gap: 2rem;
			padding-left: 2rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
	}

	.profile {
		padding-top: 2rem;
		border-bottom: 1px solid var(--surface-0);
		padding-bottom: 2rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		color: var(--text);

		h2 {
			color: var(--surface-2);
			font-weight: normal;
		}
	}
</style>
