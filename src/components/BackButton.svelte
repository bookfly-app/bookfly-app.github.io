<script>
	import { goto } from "$app/navigation";
	import LeftArrowIcon from "../assets/images/icons/LeftArrowIcon.svelte";
	import theme, { accentGradient } from "../themes/theme.svelte";

	let { href = undefined, ...props } = $props();
</script>

<button {...props} onclick={() => href ? goto(href) : window.history.back()} style:background={accentGradient()}>
	<LeftArrowIcon style="width: 1.25rem; height: 1.25rem;" stroke={theme().backgroundDark}/>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		padding: 0.25rem;
		box-shadow: 0px 0px 0.5rem black;
		z-index: 9999;
		width: fit-content;
		height: fit-content;

		&, :global(*) {
			cursor: pointer;
		}
	}
</style>
