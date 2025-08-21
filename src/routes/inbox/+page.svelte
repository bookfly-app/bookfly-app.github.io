<script lang="ts">
	import Page from "../../components/Page.svelte";
	import GearIcon from "../../assets/images/icons/GearIcon.svelte";
	import Header from "../../components/Header.svelte";

	let view = $state("notifications");
</script>

<Page type="inbox">
	<Header title="Inbox" />
	<a class="settings" href="/settings/notifications">
		<GearIcon stroke="var(--overlay-1)" style="width: 1.5rem; height: 1.5rem;" />
	</a>
	<div class="views">
		<button
			style:border-color={view === "notifications" ? "var(--lavender)" : "transparent"}
			style:color={view === "notifications" ? "var(--lavender)" : "var(--overlay-1)"}
		>Notifications</button>
	</div>
</Page>

<style>
	.views {
		display: flex;
		justify-content: space-evenly;
		padding-top: 2rem;
		background-color: var(--crust);
		margin-top: 1.5rem;

		> * {
			font-size: 1rem;
			padding-bottom: 1rem;
			padding-left: 2rem;
			padding-right: 2rem;
			border-bottom-width: 2px;
			border-bottom-style: solid;
			color: var(--text);
		}
	}

	.settings {
		position: fixed;
		top: 1rem;
		right: 1rem;
	}
</style>
