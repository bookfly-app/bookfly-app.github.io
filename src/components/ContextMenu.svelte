<script lang="ts">
	import theme from "../themes/theme.svelte";

	let menu: HTMLElement;

	export function open(event: MouseEvent) {
		menu.style.left = `${event.clientX - menu.clientWidth}px`;
		menu.style.top = `${event.clientY}px`;
		menu.style.visibility = "visible";
		menu.focus();
	}

	export function close() {
		//menu.style.visibility = "hidden";
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<section tabindex="0" onblur={close} style:border-color={theme().textDark} bind:this={menu} class="contextmenu">
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
