<script lang="ts">
	import BackButton from "./BackButton.svelte";

	let { title, subtitle = null } = $props();
</script>

<span class="heading">
	<BackButton style="position: absolute; left: 1rem;" />
	<h1>{title}</h1>
	{#if subtitle}
		<h2>{subtitle}</h2>
	{/if}
</span>

<style>
	.heading {
		view-transition-name: header;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		position: relative;
		justify-content: center;
		position: fixed;
		top: 0px;
		background-color: var(--crust);
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		left: 0px;

		h1 {
			color: var(--text);
			font-weight: normal;
			font-size: 1rem;
			text-transform: capitalize;
		}

		h2 {
			color: var(--overlay-1);
			font-weight: normal;
			font-size: 0.85rem;
		}
	}
</style>
