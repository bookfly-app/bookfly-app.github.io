<script lang="ts">
	import { onMount } from "svelte";
	import theme from "../themes/theme.svelte";
	import Sidebar from "./Sidebar.svelte";

	let { sidebar = $bindable(), ...props } = $props();
	let children = props.children;

	props = { ...props };
	props.children = undefined;

	onMount(() => {
		if (window.innerWidth > window.innerHeight) {
			sidebar.show();
		}
	});
</script>

<div class="outer">
	{#if window.innerWidth > window.innerHeight}
		<Sidebar bind:this={sidebar} />
	{/if}
	<main style:border-color={theme().textDark} {...props}>
		{@render children?.()}
	</main>
	{#if window.innerWidth > window.innerHeight}
		<div class="inner"></div>
	{/if}
</div>

<style>
	.outer {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		padding-bottom: 4rem;

		.inner {
			width: 40%;
		}
	}

	@media (orientation: landscape) {
		main {
			margin-left: 20rem;
		}
	}

	main {
		width: 100%;
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
