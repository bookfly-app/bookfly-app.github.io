<script lang="ts">
	import ExternalLinkIcon from "../assets/images/icons/ExternalLinkIcon.svelte";

	let { href, children, ...rest } = $props();
</script>

<a {...rest} {href} target="_blank" rel="noopener noreferrer">
	{@render children()}
	<ExternalLinkIcon stroke="var(--blue)" style="width: 0.9em; height: 0.9em; position: relative; top: 1px;" />
</a>

<style>
	a {
		color: var(--blue);
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		gap: 0.25em;
		align-items: center;
		position: relative;

		&:hover::after {
			content: '';
			position: absolute;
			top: 100%;
			left: 0px;
			height: 1px;
			width: 100%;
			background-color: var(--blue);
		}
	}
</style>
