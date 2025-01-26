<script>
	import theme from "../themes/theme.svelte";
</script>

<div
	style:background-image={`linear-gradient(${theme().background}, ${theme().backgroundDim})`}
></div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: -999;
	}
</style>
