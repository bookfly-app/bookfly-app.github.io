<script lang="ts">
	import StarIcon from "../assets/images/icons/StarIcon.svelte";
	import theme from "../themes/theme.svelte";

	let { rating, size = 1 }: { rating: number; size?: number } = $props();
</script>

<span class="rating">
	<StarIcon
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 2 ? rating / 2 : undefined}
		style="width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 4 ? (rating - 2) / 2 : undefined}
		style="width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 6 ? (rating - 4) / 2 : undefined}
		style="width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 8 ? (rating - 6) / 2 : undefined}
		style="width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
	<StarIcon
		stroke="#FFFFAA"
		fill="#FFFFAA"
		fillEnd={theme().background}
		fillPercent={rating < 10 ? (rating - 8) / 2 : undefined}
		style="width: {size * 1.5}rem; height: {size * 1.5}rem;"
	/>
</span>

<style>
	.rating {
		display: flex;
	}
</style>
