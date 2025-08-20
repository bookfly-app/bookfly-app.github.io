<script lang="ts">
	import { onMount } from "svelte";
	import theme from "../themes/theme.svelte";
	import Sidebar from "./Sidebar.svelte";
	import { setTheme } from "../api/themes.svelte";
	import Footer from "./Footer.svelte";

	let { sidebar = $bindable(), type = undefined, children, ...rest } = $props();

	onMount(() => {
		if (window.innerWidth > window.innerHeight) {
			sidebar.show();
		}

		setTheme("Catppuccin Mocha");
	});
</script>

<div class="outer">
	<Sidebar bind:this={sidebar} />
	<main {...rest}>
		{@render children?.()}
	</main>
</div>
<Footer selected={type} />

<style>
	.outer {
		position: relative;
		width: 100%;
		height: calc(100% - 4rem);
		overflow: hidden;

		.inner {
			width: 40%;
		}
	}

	@media (orientation: landscape) {
		main {
			margin-left: 20rem;
			width: max(calc(100% - 40rem), 25rem);
			border-right: 1px solid var(--surface-0);
		}
	}

	@media (orientation: portrait) {
		main {
			width: 100%;
		}
	}

	main {
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		position: relative;
		background-color: var(--base);
	}
</style>
