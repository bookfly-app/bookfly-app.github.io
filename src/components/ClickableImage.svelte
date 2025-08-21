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
<div 
	style:pointer-events={expanded ? undefined : "none"} 
	style:background-color={expanded ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)"}
	class="preview-wrapper" 
	onclick={() => expanded = false}
>
	<img class="preview" {src} style:scale={expanded ? "100%" : "0%"} />
</div>

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
		transition: scale 0.25s, background-color 1s;
		box-shadow: 0px 0px 1rem black;
	}
</style>
