<script lang="ts">
	import theme from "../../themes/theme.svelte";

	let view = $state("messages");
</script>

<main>
	<div class="views" style:background={theme().backgroundDark}>
		<button style:border-color={view === "messages" ? theme().accent : "transparent"} style:color={theme().textBright}>Messages</button>
	</div>
</main>

<style>
	.views {
		display: flex;
		justify-content: space-evenly;
		padding-top: 2rem;

		> * {
			font-size: 1rem;
			padding-bottom: 1rem;
			padding-left: 2rem;
			padding-right: 2rem;
			border-bottom-width: 3px;
			border-bottom-style: solid;
		}
	}
</style>
