<script lang="ts">
	import theme from "../themes/theme.svelte";

	let { message } = $props();

	let notification: HTMLElement;

	export function show() {
		notification.style.bottom = "5rem";
		setTimeout(() => {
			notification.style.bottom = "0rem";
		}, 3000);
	}
</script>

<section
	bind:this={notification}
	style:color={theme().background}
	style:background={`linear-gradient(${theme().accent}, ${theme().accent2})`}
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
		bottom: 0rem;
		transform: translateX(-50%);
		transition: bottom 0.2s;
	}
</style>
