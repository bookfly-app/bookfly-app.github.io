<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import favicon from '../assets/images/favicon.png';
	import globalCss from "../global.css?url";

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise(resolve => {
			document.startViewTransition(async() => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
<link rel="icon" href={favicon} />
<link rel="stylesheet" href={globalCss} />
</svelte:head>

{@render children()}
