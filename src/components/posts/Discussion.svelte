<script lang="ts">
	import ImageCarousel from "../ImageCarousel.svelte";
	import PostBody from "./PostBody.svelte";

	let { body, images } = $props();
</script>

<section>
	<PostBody {body} />
	{#if images.length > 0}
		<ImageCarousel {images} />
	{/if}
</section>
