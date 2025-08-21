<script lang="ts">
	import PlusIcon from "../assets/images/icons/PlusIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import theme, { accentGradient } from "../themes/theme.svelte";
</script>

{#if user()}
	<a href="/new" style:background={accentGradient()} style:color={theme().backgroundDark}>
		<PlusIcon stroke={theme().backgroundDark} style="width: 2rem;" />
	</a>
{/if}

<style>
	a {
		position: fixed;
		bottom: 5rem;
		right: 1rem;
		bottom: 5rem;
		font-size: 3rem;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 0px 0.5rem black;
		transition: scale 0.1s;

		&:hover {
			scale: 105%;
		}
	}
</style>
