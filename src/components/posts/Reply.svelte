<script lang="ts">
	import { format } from "../../api/postapi";

	let { body, main } = $props();
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
</style>
