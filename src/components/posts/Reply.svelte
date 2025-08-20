<script lang="ts">
	import { format } from "../../api/postapi";

	let { body, images, main } = $props();
</script>

<section>
	{#await format(body) then body}
		<p 
			class="body" 
			style:font-size={main ? "1rem" : "0.85rem"}
			style:margin-top={main ? "0.25rem" : "0px"}
		>
			{@html body}
		</p>
	{/await}
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
		color: var(--subtext-1);

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
