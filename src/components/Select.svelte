<script lang="ts">
	import { onMount } from "svelte";
	import theme from "../themes/theme.svelte";
	import RightArrowIcon from "../assets/images/icons/RightArrowIcon.svelte";

	let { options, value = $bindable() }: { options: string[], value?: string } = $props();

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

<div class="select" bind:this={optionsElement}>
	<button class="value" onclick={() => expanded = !expanded} style:color={theme().text} style:background={theme().backgroundDark}>
		{value}
		<RightArrowIcon stroke={theme().text} style="width: 1rem; height: 1rem;" />
	</button>
	<div class="options" style:border-color={theme().textDark} style:display={expanded ? "flex" : "none"}>
		{#each options as option}
			<button 
				style:--gray={theme().textDark} 
				class="option" 
				onclick={() => { value = option; expanded = false; }} 
				style:--base-color={theme().backgroundDark} 
				style:color={theme().text}
			>
				{option}
			</button>
		{/each}
	</div>
</div>

<style>
	.select {
		position: relative;
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
		border-style: solid;
		border-width: 1px;
		border-radius: 0.5rem;
		box-shadow: 0px 0px 0.5rem black;
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
