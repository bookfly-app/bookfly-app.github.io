<script lang="ts">
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import theme from "../themes/theme.svelte";

	let { rating = $bindable(), size = 0.6, interactive = false }: { rating: number; size?: number, interactive?: boolean } = $props();
</script>

<span class="rating">
	<StarIcon
		onclick={() => rating = rating === 0 ? 1 : 0}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 2 ? rating / 2 : undefined}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 2 ? 3 : 2}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 4 ? (rating - 2) / 2 : undefined}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 4 ? 5 : 4}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 6 ? (rating - 4) / 2 : undefined}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 6 ? 7 : 6}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 8 ? (rating - 6) / 2 : undefined}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		onclick={() => rating = rating === 8 ? 9 : 8}
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 10 ? (rating - 8) / 2 : undefined}
		style="cursor: {interactive ? 'pointer' : 'default'}; width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
</span>

<style>
	.rating {
		display: flex;
	}
</style>
