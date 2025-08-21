<script lang="ts">
	import Page from "../../components/Page.svelte";
	import BackButton from "../../components/BackButton.svelte";
	import GearIcon from "../../assets/images/icons/GearIcon.svelte";

	let view = $state("notifications");
</script>

<Page type="notifications">
	<BackButton style="position: absolute; top: 1rem; left: 1rem;" />
	<a class="settings" href="/settings/notifications">
		<GearIcon stroke="var(--overlay-1)" style="width: 1.5rem; height: 1.5rem;" />
	</a>
	<div class="views">
		<button style:border-color={view === "notifications" ? "var(--lavender)" : "transparent"}>Notifications</button>
	</div>
</Page>

<style>
	.views {
		display: flex;
		justify-content: space-evenly;
		padding-top: 2rem;
		background-color: var(--crust);

		> * {
			font-size: 1rem;
			padding-bottom: 1rem;
			padding-left: 2rem;
			padding-right: 2rem;
			border-bottom-width: 3px;
			border-bottom-style: solid;
			color: var(--text);
		}
	}

	.settings {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
