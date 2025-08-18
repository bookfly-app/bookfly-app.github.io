<script>
	import Wallflower from "../assets/images/icons/Wallflower.svelte";
</script>

<div>
	<Wallflower stroke="var(--surface-2)" style="width: 2rem; height: 2rem;" />
</div>

<style>
	@keyframes load {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 360deg;
		}
	}

	div {
		width: fit-content;
		height: fit-content;
		animation-name: load;
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>
