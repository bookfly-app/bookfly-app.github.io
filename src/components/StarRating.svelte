<script lang="ts">
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import theme from "../themes/theme.svelte";

	let { rating = $bindable(), size = 0.6, interactive = false }: { rating: number; size?: number, interactive?: boolean } = $props();

	function clampPercent(value: number) {
		return Math.max(Math.min(value, 1), 0);
	}
</script>

<span class="rating">
	<StarIcon
		onclick={() => rating = rating === 0 ? 1 : 0}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={clampPercent(rating / 2)}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 2 ? 3 : 2}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={clampPercent((rating - 2) / 2)}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 4 ? 5 : 4}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={clampPercent((rating - 4) / 2)}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 6 ? 7 : 6}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={clampPercent((rating - 6) / 2)}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 8 ? 9 : 8}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={clampPercent((rating - 8) / 2)}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
</span>

<style>
	.rating {
		display: flex;
	}
</style>
