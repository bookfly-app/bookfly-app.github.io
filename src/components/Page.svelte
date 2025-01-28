<script lang="ts">
	import theme from "../themes/theme.svelte";

	let props = $props();
	let children = props.children;

	props = { ...props };
	props.children = undefined;
</script>

<main style:border-color={theme().textDark} {...props}>
	{@render children?.()}
</main>

<style>
	main {
		width: 100%;
		max-width: 25rem;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		border-left-style: solid;
		border-right-style: solid;
		border-left-width: 1px;
		border-right-width: 1px;
		position: relative;
	}
</style>
