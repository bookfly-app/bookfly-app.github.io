<script lang="ts">
	import theme from "../themes/theme.svelte";
</script>

<div style:background={theme().backgroundDark}></div>
<button style:background={theme().accent} style:color={theme().backgroundDark}
	>+</button
>

<style>
	button {
		position: absolute;
		bottom: 5rem;
		right: 1rem;
		font-size: 3rem;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div {
		position: absolute;
		bottom: 5rem;
		right: 1rem;
		font-size: 3rem;
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--crust);
		filter: blur(10px);
		border-radius: 50%;
	}
</style>
