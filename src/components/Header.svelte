<script lang="ts">
	import BackButton from "./BackButton.svelte";

	let { title } = $props();
</script>

<span class="heading">
	<BackButton style="position: absolute; left: 1rem;" />
	<h1>{title}</h1>
</span>

<style>
	.heading {
		display: flex;
		gap: 1rem;
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
	}
</style>
