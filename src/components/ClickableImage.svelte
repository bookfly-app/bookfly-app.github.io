<script lang="ts">
	import type { Snippet } from "svelte";

	let { src, children, ...rest }: { src: string, children?: Snippet, [key: string]: unknown } = $props();

	let expanded = $state(false);
</script>

{#if children}
	<div class="wrapper" onclick={() => expanded = true}>
		{@render children()}
	</div>
{:else}
	<img {src} {...rest} onclick={() => expanded = true} />
{/if}
{#if expanded}
	<div class="preview-wrapper" onclick={() => expanded = false}>
		<img class="preview" {src} />
	</div>
{/if}

<style>
	.wrapper {
		display: contents;
	}

	.preview-wrapper {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100dvh;
		width: 100dvw;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		z-index: 9999999;
	}

	.preview {
		width: 100%;
		border-radius: 0.5rem;
		max-width: 50rem;
	}
</style>
