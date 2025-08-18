<script lang="ts">
	import { onMount } from "svelte";
	import { uploadFile } from "../api/storageapi";

	let files: FileList | null = $state(null);
	let preview: HTMLImageElement;
	let previewDiv: HTMLElement;
	let input: HTMLInputElement;

	let { 
		aspectRatio = undefined, 
		onupload = (_imageId: string) => {}, 
		imageId = $bindable(null),
		...rest 
	}: {
		aspectRatio?: number;
		onupload?: (imageId: string) => void;
		imageId?: string | null;
		[key: string]: unknown
	} = $props();

	let scale = $state(2);

	async function upload() {
		if (!file) return;
		const cropped = await crop(file, parseInt(cropperLeft), parseInt(cropperTop), parseInt(cropperWidth), parseInt(cropperHeight));
		imageId = (await uploadFile(cropped))!;
		onupload(imageId);
		reset();
	}

	function reset() {
		files = null;
		file = null;
		previewDiv.style.display = "none";
	}

	function cancel() {
		reset();
	}

	function chooseAgain() {
		input.click();
	}

	let file: File | null = $state(null);
	
	function openImage() {
		file = files?.[0] ?? null;
		if (!file) return;

		const reader = new FileReader();

		reader.onloadend = function() {
			previewDiv.style.display = "flex";
			preview.src = reader.result as string;
			cropperWidth = `${imageContainer!.getBoundingClientRect().width}px`;
			cropperHeight = `${imageContainer!.getBoundingClientRect().height}px`;
		}

		if (file) {
			reader.readAsDataURL(file)
		} else {
			preview.src =  "";
		}
	}

	function crop(file: File, x: number, y: number, width: number, height: number): Promise<File> {
		return new Promise<File>((resolve, reject) => {
			const image = new Image();
			image.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;
				const ctx = canvas.getContext('2d')!;
				ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

				canvas.toBlob(blob => {
					if (!blob) return reject(new Error("Canvas is empty"));
					const croppedFile = new File([blob], file.name, { type: file.type });
					resolve(croppedFile);
				}, file.type);
			};

			image.onerror = reject;

			const reader = new FileReader();
			reader.onload = function() {
				image.src = reader.result as string;
			};
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	}

	let cropper: HTMLElement;

	let panning = $state(false);
	let draggingHandle: string | null = $state(null);

	let left = $state("0px");
	let top = $state("0px");

	let topLeftHandle: HTMLElement;
	let topRightHandle: HTMLElement;
	let bottomLeftHandle: HTMLElement;
	let bottomRightHandle: HTMLElement;

	let imageContainer: HTMLElement | null = $state(null);

	let cropperTop = $state("0px");
	let cropperLeft = $state("0px");
	let cropperBottom = $state("0px");
	let cropperRight = $state("0px");

	let cropperWidth = $derived.by(() => {
		if (imageContainer) {
			return `${imageContainer.getBoundingClientRect().width - parseInt(cropperLeft) - parseInt(cropperRight)}px`;
		}
		return "0px";
	});
	let cropperHeight = $derived.by(() => {
		if (imageContainer) {
			return `${imageContainer.getBoundingClientRect().height - parseInt(cropperTop) - parseInt(cropperBottom)}px`;
		}
		return "0px";
	});


	onMount(() => {
		cropper.addEventListener("wheel", event => {
			scale = Math.min(Math.max(1, scale - event.deltaY / 5), 10);
		}, true);

		preview.addEventListener("mousedown", () => {
			panning = true;
		});

		cropper.addEventListener("mousedown", () => {
			panning = true;
		});

		topLeftHandle.addEventListener("mousedown", () => {
			draggingHandle = "top left";
		});

		topRightHandle.addEventListener("mousedown", () => {
			draggingHandle = "top right";
		});

		bottomLeftHandle.addEventListener("mousedown", () => {
			draggingHandle = "bottom left";
		});
		
		bottomRightHandle.addEventListener("mousedown", () => {
			draggingHandle = "bottom right";
		});

		document.addEventListener("mousemove", event => {
			if (draggingHandle == "top left") {
				const amount = Math.min(event.movementX, event.movementY);
				cropperLeft = `${Math.max(0, parseInt(cropperLeft) + amount)}px`;
				cropperTop = `${Math.max(0, parseInt(cropperTop) + amount)}px`;
			} 

			else if (draggingHandle == "top right") {
				const amount = Math.min(Math.abs(event.movementX), Math.abs(event.movementY));
				cropperRight = `${Math.max(0, parseInt(cropperRight) - amount * Math.sign(event.movementX))}px`;
				cropperTop = `${Math.max(0, parseInt(cropperTop) + amount * Math.sign(event.movementY))}px`;
			} 

			else if (draggingHandle == "bottom left") {
				const amount = Math.min(Math.abs(event.movementX), Math.abs(event.movementY));
				cropperLeft = `${Math.max(0, parseInt(cropperLeft) + amount * Math.sign(event.movementX))}px`;
				cropperBottom = `${Math.max(0, parseInt(cropperBottom) - amount * Math.sign(event.movementY))}px`;
			} 

			else if (draggingHandle == "bottom right") {
				const amount = Math.min(Math.abs(event.movementX), Math.abs(event.movementY));
				cropperRight = `${Math.max(0, parseInt(cropperRight) - amount * Math.sign(event.movementX))}px`;
				cropperBottom = `${Math.max(0, parseInt(cropperBottom) - amount * Math.sign(event.movementY))}px`;
			}

			else if (panning) {
				left = `${parseInt(left) + event.movementX}px`;
				top = `${parseInt(top) + event.movementY}px`;
			}
		}, true);

		document.addEventListener("mouseup", () => {
			panning = false;
			draggingHandle = null;
		});
	})

	const overlayLeftHeight = $derived.by(() => {
		cropperLeft;
		if (imageContainer) {
			return imageContainer.getBoundingClientRect().height;
		}

		return 0;
	});
</script>

<input {...rest} bind:this={input} bind:files onchange={openImage} type="file" />

<div class="preview" bind:this={previewDiv}>
	<div class="image" bind:this={imageContainer}>
		<img
			style:cursor={panning ? "grabbing" : "grab"}
			bind:this={preview}
			style:scale alt="User content"
			style:left
			style:top
			draggable="false"
		/>
		<div class="overlay left" 
			style:width="{(imageContainer?.getBoundingClientRect().width ?? 0) - parseInt(cropperWidth) - parseInt(cropperRight)}px"
			style:height="{overlayLeftHeight}px"
		></div>
		<div class="overlay right" 
			style:width="{(imageContainer?.getBoundingClientRect().width ?? 0) - parseInt(cropperWidth) - parseInt(cropperLeft)}px"
			style:height="{overlayLeftHeight}px"
		></div>
		<div class="overlay top" 
			style:left="{parseInt(cropperLeft)}px"
			style:width={cropperWidth}
			style:height="{(imageContainer?.getBoundingClientRect().height ?? 0) - parseInt(cropperHeight) - parseInt(cropperBottom)}px"
		></div>
		<div class="overlay bottom" 
			style:right="{parseInt(cropperRight)}px"
			style:width={cropperWidth}
			style:height="{(imageContainer?.getBoundingClientRect().height ?? 0) - parseInt(cropperHeight) - parseInt(cropperTop)}px"
			style:top="{parseInt(cropperHeight) + parseInt(cropperTop)}px"
		></div>
		<div 
			style:width={cropperWidth} 
			style:height={cropperHeight} 
			style:top={cropperTop} 
			style:left={cropperLeft} 
			style:cursor={panning ? "grabbing" : "grab"}
			bind:this={cropper} 
			class="cropper"
		>
			<div bind:this={topLeftHandle} class="top left handle"></div>
			<div bind:this={topRightHandle} class="top right handle"></div>
			<div bind:this={bottomLeftHandle} class="bottom left handle"></div>
			<div bind:this={bottomRightHandle} class="bottom right handle"></div>
		</div>
	</div>
	<button class="upload" onclick={upload}>Done</button>
	<button class="choose-again" onclick={chooseAgain}>Choose a different image</button>
	<button class="cancel" onclick={cancel}>Cancel</button>
</div>

<style>
	input {
		display: none;
	}

	.preview {
		width: 90dvw;
		aspect-ratio: 5/4;
		position: fixed;
		display: none;
		flex-direction: column;
		z-index: 9999;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--crust);
		padding: 2rem;
		border-radius: 0.5rem;
		border: 1px solid var(--surface-0);
		box-shadow: 0px 0px 0.5rem black;
		gap: 2rem;

		.image {
			overflow: hidden;
			width: 100%;
			aspect-ratio: 1;
			display: flex;
			position: relative;
		}

		.upload {
			padding: 0.5rem 1rem 0.5rem 1rem;
			border-radius: 0.5rem;
			background-image: linear-gradient(#a6e3a1, #81c8be);
		}

		.cancel {
			padding: 0.5rem 1rem 0.5rem 1rem;
			border-radius: 0.5rem;
			background-image: linear-gradient(#f38ba8, #ff7788);
			margin-top: -1rem;
		}

		.choose-again {
			padding: 0.5rem 1rem 0.5rem 1rem;
			border-radius: 0.5rem;
			background-image: linear-gradient(var(--lavender), var(--blue));
			margin-top: -1rem;
		}

		img {
			width: 100%;
			height: auto;
			object-fit: contain;
			position: absolute;
			user-select: none;
		}

		.cropper {
			top: 0px;
			left: 0px;
			position: absolute;

			.handle {
				position: absolute;
				width: 1rem;
				height: 1rem;
			}

			.bottom {
				bottom: -1px;
				border-bottom: 3px solid white;
			}

			.top {
				top: -1px;
				border-top: 3px solid white;
			}

			.left {
				left: -1px;
				border-left: 3px solid white;
			}

			.right {
				right: -1px;
				border-right: 3px solid white;
			}

			.top.left {
				cursor: nw-resize;
			}

			.top.right {
				cursor: ne-resize;
			}

			.bottom.left {
				cursor: sw-resize;
			}

			.bottom.right {
				cursor: se-resize;
			}
		}
	}

	.overlay {
		position: absolute;
		background: rgba(0,0,0,0.65);
		pointer-events: none;
	}

	.overlay.left {
		top: 0px;
		left: 0px;
	}

	.overlay.top {
		top: 0px;
	}

	.overlay.right {
		top: 0px;
		right: 0px;
	}
</style>
