<script lang="ts">
	import theme, { accentGradient } from "../themes/theme.svelte";

	let { 
		value = $bindable(), 
		size = 1, 
		onenable = () => {},
		ondisable = () => {},
		onchange = (value: boolean) => {},
		...rest 
	} = $props();

	let state = $state(value);


	function toggle() {
		state = !state;
		value = state;
		if (value) onenable();
		else ondisable();
		onchange(value);
	}
</script>

<button
	{...rest}
	aria-label="radio"
	onclick={toggle}
	style:background={state ? "linear-gradient(to bottom right, var(--lavender), var(--blue)" : "var(--overlay-1)"}
	style="width: {4 * size}rem; height: {2 * size}rem; padding: {0.2 * size}rem;"
>
	<div style:margin-left={state ? `${size * 2}rem` : "0px"}></div>
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
			background: var(--mantle);
		}
	}
</style>
