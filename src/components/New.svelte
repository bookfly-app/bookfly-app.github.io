<script lang="ts">
	import PlusIcon from "../assets/images/icons/PlusIcon.svelte";
	import { user } from "../backend/auth.svelte";
	import theme, { accentGradient } from "../themes/theme.svelte";
</script>

{#if user()}
	<div></div>
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
	}

	div {
		position: fixed;
		right: 1rem;
		bottom: 5rem;
		bottom: 5rem;
		font-size: 3rem;
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: black;
		filter: blur(10px);
		border-radius: 50%;
	}
</style>
