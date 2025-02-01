<script lang="ts">
	import { format } from "../../api/postapi";
	import theme from "../../themes/theme.svelte";
	import ImageCarousel from "../ImageCarousel.svelte";

	let { body, images } = $props();
</script>

<section>
	<p class="body" style:color={theme().text}>{@html format(body)}</p>
	{#if images.length > 0}
		<ImageCarousel {images} />
	{/if}
</section>

<style>
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
</style>
