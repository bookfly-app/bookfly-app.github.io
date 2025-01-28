<script lang="ts">
	import { format } from "../../api/postapi";
	import theme from "../../themes/theme.svelte";

	let { body, images, parent } = $props();
</script>

<section>
	<p class="body" style:color={theme().text}>{@html format(body)}</p>
	{#if images.length > 0}
		<div class="image" style:background-image={`url("${images[0]}")`}>
			{#each images}
				<div class="dot"></div>
			{/each}
		</div>
	{/if}
</section>

<style>
	.image {
		width: 18rem;
		height: 14rem;
		border-radius: 1rem;
		margin-top: 1rem;
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.body {
		font-size: 0.85rem;

		:global(a) {
			color: cornflowerblue;
		}

		:global(code) {
			font-family: monospace;
			background-color: #11111b;
			padding-left: 0.5ch;
			padding-right: 0.5ch;
			border-radius: 0.25rem;
		}
	}

	.dot {
		width: 0.3rem;
		height: 0.3rem;
		background-color: white;
		border-radius: 50%;
		position: absolute;
		bottom: 0.5rem;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0px 0px 5px black;
	}
</style>
