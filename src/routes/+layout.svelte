<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import favicon from '../assets/images/favicon.png';
	import globalCss from "../global.css?url";

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		const newIndex = getTabIndex(new URL(navigation.to?.url ?? location.href));
		if (newIndex === -1 || currentIndex === -1) {
			document.documentElement.dataset.direction = "none";
			currentIndex = newIndex;
		} else {
			const direction = newIndex > currentIndex ? "forward" : "backward";
			currentIndex = newIndex;
			document.documentElement.dataset.direction = direction;
		}

		return new Promise(resolve => {
			document.startViewTransition(async() => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let currentIndex = 0; 

	function getTabIndex(url: URL) {
		if (url.pathname.match(/\/settings\/(appearance|account|notifications)/)) {
			return 101;
		}

		if (url.pathname.startsWith("/settings")) {
			return 100;
		}		

		if (url.pathname.startsWith("/about")) {
			return 101;
		}		

		if (url.pathname.startsWith("/interactions")) {
			const term = url.searchParams.get("view") ?? "viewed";
			if (term === "viewed") return 100;
			if (term === "likes") return 101;
			if (term === "replies") return 102;
			if (term === "saved") return 103;
			if (term === "shared") return 104;
			return -1;
		}

		if (url.pathname === "/") {
			const term = url.searchParams.get("view") ?? "following";
			if (term === "following") return 100;
			if (term === "for you") return 101;
			return -1;
		}

		if (url.pathname.startsWith("/search")) {
			const term = url.searchParams.get("view") ?? "posts";
			if (term === "posts") return 200;
			if (term === "books") return 201;
			if (term === "authors") return 202;
			if (term === "people") return 203;
			return -1;
		}

		if (url.pathname.startsWith("/book")) {
			const term = url.searchParams.get("view") ?? "info";
			if (term === "info") return 250;
			if (term === "discussion") return 251;
			return -1;
		}

		if (url.pathname.match(/\/new\/(general|update|rating)/)) {
			return 301;
		}

		if (url.pathname.startsWith("/new")) {
			return 300;
		}

		if (url.pathname.startsWith("/inbox")) {
			return 400;
		}

		if (url.pathname.startsWith("/profile")) {
			const term = url.searchParams.get("view") ?? "all";
			if (term === "all") return 500;
			if (term === "books") return 501;
			if (term === "activity") return 502;
			if (term === "list") return 503;
			if (term === "discussion") return 504;
			return -1;
		}

		return -1;
	}
</script>

<svelte:head>
<link rel="icon" href={favicon} />
<link rel="stylesheet" href={globalCss} />
</svelte:head>

{@render children()}

<style>
	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-100%);
		}
	}

	@keyframes slide-from-left {
		from {
			transform: translateX(-100%);
		}
	}

	@keyframes slide-to-right {
		to {
			transform: translateX(100%);
		}
	}

	:root[data-direction="forward"]::view-transition-old(root) {
		animation: 0.2s ease both slide-to-left;
	}
	:root[data-direction="forward"]::view-transition-new(root) {
		animation: 0.2s ease both slide-from-right;
	}

	:root[data-direction="backward"]::view-transition-old(root) {
		animation: 0.2s ease both slide-to-right;
	}
	:root[data-direction="backward"]::view-transition-new(root) {
		animation: 0.2s ease both slide-from-left;
	}
	:root[data-direction="none"]::view-transition-new(root) {
		animation: none;
	}
	:root[data-direction="none"]::view-transition-old(root) {
		animation: none;
	}

	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
</style>
