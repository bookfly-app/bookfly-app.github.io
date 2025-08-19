<script lang="ts">
	let { book, ...rest } = $props();

	let image: HTMLImageElement;

	function onload() {
		if (image.naturalWidth < 10) {
			image.src = book.backupCover;
		}
	}
</script>

<img bind:this={image} {...rest} src={book.cover} {onload} />

<style>
	img {
		aspect-ratio: 1 / 1.5;
		background-color: var(--surface-0);
	}
</style>
