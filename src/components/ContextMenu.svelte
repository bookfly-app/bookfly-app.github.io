<script lang="ts">
	import { onMount } from "svelte";
	import theme from "../themes/theme.svelte";

	let menu: HTMLElement;

	export function open(event: MouseEvent) {
		menu.style.left = `${event.clientX - menu.clientWidth}px`;
		menu.style.top = `${event.clientY}px`;
		menu.style.visibility = "visible";
		menu.focus();
	}

	export function close() {
		menu.style.visibility = "hidden";
	}

	let { children } = $props();

	onMount(() => {
		menu.addEventListener("focusout", event => {
			if (!menu.contains(event.relatedTarget as Node)) {
				close();
			}
		});
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<section tabindex="0" style:border-color={theme().textDark} bind:this={menu} class="contextmenu">
	{@render children()}
</section>

<style>
	.contextmenu {
		display: flex;
		flex-direction: column;
		position: fixed;
		visibility: hidden;
		overflow: hidden;
		border-radius: 0.5rem;
		border-style: solid;
		border-width: 1px;
		box-shadow: 0px 0px 1rem black;
		width: 10rem;

		:global(> *) {
			padding: 0.5rem 1rem 0.5rem 1rem;
			background: #11111b;
			width: 100%;
			display: flex;
			align-items: center;
			color: #cdd6f4;
			font-size: 0.85rem;

			&:not(:last-child) {
				border-bottom-style: solid;
				border-bottom-width: 1px;
				border-bottom-color: inherit;
			}
		}
	}
</style>
