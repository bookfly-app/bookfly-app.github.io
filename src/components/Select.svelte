<script lang="ts">
	import { onMount } from "svelte";
	import RightArrowIcon from "../assets/images/icons/RightArrowIcon.svelte";

	let { options, value = $bindable(), ...rest }: { options: string[], value?: string, [key: string]: unknown } = $props();

	let expanded = $state(false);

	let optionsElement: HTMLElement;

	onMount(() => {
		document.addEventListener("click", event => {
			if (!event.composedPath().includes(optionsElement)) {
				expanded = false;
			}
		});
	});
</script>

<div {...rest} class="select" bind:this={optionsElement}>
	<button class="value" onclick={() => expanded = !expanded}>
		{value}
		<RightArrowIcon stroke="var(--subtext-1)" style="width: 1rem; height: 1rem;" />
	</button>
	<div class="options" style:display={expanded ? "flex" : "none"}>
		{#each options as option}
			<button class="option" onclick={() => { value = option; expanded = false; }}>
				{option}
			</button>
		{/each}
	</div>
</div>

<style>
	.select {
		position: relative;
		background-color: var(--crust);
		color: var(--subtext-1);
		border-radius: 0.5rem;
	}

	.value {
		border-radius: 0.5rem;
		display: flex;
		align-items: center;

		:global(>*:last-child) {
			margin-left: auto;
			margin-right: -0.5rem;
		}
	}

	.options {
		flex-direction: column;
		overflow: hidden;
		position: absolute;
		top: 100%;
		left: 0px;
		z-index: 999;
		width: 100%;
		border: 1px solid var(--surface-0);
		border-radius: 0.5rem;
		box-shadow: 0px 0px 0.5rem black;
		background-color: var(--crust);
		color: var(--subtext-1);
	}

	button {
		text-transform: capitalize;
		width: 100%;
		text-align: left;
		padding: 0.5rem 1rem 0.5rem 1rem;

		&:not(:hover) {
			background-color: var(--base-color);
		}

		&:hover {
			background-color: var(--gray);
		}
	}
</style>
