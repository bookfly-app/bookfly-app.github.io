<script lang="ts">
	import ExternalLinkIcon from "../assets/images/icons/ExternalLinkIcon.svelte";

	let { href, children, ...rest } = $props();
</script>

<a {...rest} {href} target="_blank" rel="noopener noreferrer">
	{@render children()}
	<ExternalLinkIcon stroke="var(--blue)" style="width: 1em; height: 1em;" />
</a>

<style>
	a {
		color: var(--blue);
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		gap: 0.25em;
	}
</style>
