<script lang="ts">
	import { type PostId } from "../../../api/postapi";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";

	let { data }: { data: PostId } = $props();
	let { postid } = data;
</script>

<Background />
<main></main>
<Footer selected="search" />
