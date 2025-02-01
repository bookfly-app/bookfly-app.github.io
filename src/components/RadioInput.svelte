<script lang="ts">
	import theme, { accentGradient } from "../themes/theme.svelte";

	let { on = $bindable(), size = 1, ...props } = $props();

	let state = $state(on);

	function toggle() {
		state = !state;
		on = state;
	}
</script>

<button
	{...props}
	aria-label="radio"
	onclick={toggle}
	style:background={state ? accentGradient() : theme().textDull}
	style="width: {4 * size}rem; height: {2 * size}rem; padding: {0.2 * size}rem;"
>
	<div style:margin-left={state ? `${size * 2}rem` : "0px"} style:background={theme().backgroundDim}></div>
</button>

<style>
	button {
		border-radius: 100vmax;
		display: flex;

		div {
			height: 100%;
			aspect-ratio: 1;
			border-radius: 50%;
			transition: margin-left 0.2s;
		}
	}
</style>
