<script lang="ts">
	import theme from "../themes/theme.svelte";

	let { message } = $props();

	export function show() {
		isHidden = false;
		setTimeout(() => {
			isHidden = true;
		}, 3000);
	}

	let isHidden = $state(true);
</script>

<section
	style:color={theme().background}
	style:background="linear-gradient({theme().accent}, {theme().accent2})"
	style:bottom={isHidden ? "-5rem" : "5rem"}
	class="notification"
>
	{message}
</section>

<style>
	.notification {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 80vw;
		max-width: 20rem;
		height: fit-content;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-radius: 0.75rem;
		box-shadow: 0px 0px 10px black;
		font-weight: 600;
		left: 50%;
		transform: translateX(-50%);
		transition: bottom 0.2s;
		z-index: 9999;
	}
</style>
