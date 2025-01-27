<script lang="ts">
	import { onMount } from "svelte";
	import theme from "../themes/theme.svelte";

	let menu: HTMLElement;

	let clickEvent: MouseEvent | null = null;

	onMount(() => {
		document.addEventListener("click", event => {
			if (clickEvent === event) {
				clickEvent = null;
				return;
			}

			if (!event.composedPath().includes(menu)) {
				menu.style.visibility = "hidden";
			}
		});

		Array.from(menu.children).forEach(child => child.addEventListener("click", () => (menu.style.visibility = "hidden")));
	});

	export function open(event: MouseEvent) {
		menu.style.left = `${event.clientX - menu.clientWidth}px`;
		menu.style.top = `${event.clientY}px`;
		menu.style.visibility = "visible";
		clickEvent = event;
	}
</script>

<section style:border-color={theme().textDark} bind:this={menu} class="contextmenu">
	<slot />
</section>

<style>
	.contextmenu {
		display: flex;
		flex-direction: column;
		position: absolute;
		visibility: hidden;
		overflow: hidden;
		border-radius: 0.5rem;
		border-style: solid;
		border-width: 1px;
		box-shadow: 0px 0px 10px black;

		:global(> *) {
			font-size: 1rem;
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;

			&:not(:last-child) {
				border-bottom-style: solid;
				border-bottom-width: 1px;
				border-bottom-color: inherit;
			}
		}
	}
</style>
