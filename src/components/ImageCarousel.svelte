<script lang="ts">
	import { deserializeImage, type Image } from "../api/serializer";
	import TriangleLeftIcon from "../assets/images/icons/TriangleLeftIcon.svelte";
	import TriangleRight from "../assets/images/icons/TriangleRight.svelte";

	let { images }: { images: Image[] } = $props();

	let imageIndex = $state(0);
	function cycleImage(amount: number) {
		return async () => (imageIndex = Math.max(Math.min(imageIndex + amount, images.length - 1), 0));
	}
</script>

<div class="media">
	<div class="images" style:margin-left="{imageIndex * -23}rem">
		{#each images as image}
			<div class="media-wrapper">
				<img alt="user content" src={deserializeImage(image)} />
			</div>
		{/each}
	</div>
	<button onclick={cycleImage(-1)} class="rotate-image left">
		<TriangleLeftIcon stroke="#FFFFFF" style="width: 1.5rem;" />
	</button>
	<button onclick={cycleImage(1)} class="rotate-image right">
		<TriangleRight stroke="#FFFFFF" style="width: 1.5rem;" />
	</button>
</div>

<style>
	.media {
		margin-top: 1rem;
		width: 23rem;
		overflow: hidden;
		position: relative;

		&:hover :global(.rotate-image) {
			opacity: 100%;
		}

		.rotate-image {
			color: red;
			position: absolute;
			top: 50%;
			width: fit-content;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-weight: bolder;
			opacity: 0%;
			transition: opacity 0.2s;

			&.right {
				right: 0.5rem;
			}

			&.left {
				left: 0.5rem;
			}

			&::before {
				content: "";
				width: 100%;
				aspect-ratio: 1;
				background-color: rgba(0, 0, 0, 0.5);
				position: absolute;
				z-index: -1;
				border-radius: 50%;
				filter: blur(0.3rem);
			}
		}
	}
	.images {
		display: flex;
		width: fit-content;
		transition: margin-left 0.3s;

		.media-wrapper {
			width: 23rem;
			height: 15rem;
			border-radius: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;

			img {
				min-width: 100%;
				min-height: 100%;
			}
		}
	}
</style>
