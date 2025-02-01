<script lang="ts">
	import type { User } from "../api/userapi";
	import DeveloperIcon from "../assets/images/icons/DeveloperIcon.svelte";
	import EditIcon from "../assets/images/icons/EditIcon.svelte";
	import WrenchIcon from "../assets/images/icons/WrenchIcon.svelte";
	import theme from "../themes/theme.svelte";

	let { forUser, size }: { forUser: User; size: number } = $props();
</script>

{#if forUser.tags.length > 0}
	<span class="badges" style:gap="{size / 3.5}rem">
		{#if forUser.tags.includes("dev")}
			<a
				style:width="{size * 1.5}rem"
				style:height="{size * 1.5}rem"
				style:border-radius="{size / 2}rem"
				href="/settings/account/become-a-developer"
				title="{forUser.displayName} is a Bookfly developer"
				class="badge dev"
			>
				<DeveloperIcon stroke={theme().backgroundDark} style="width: {size}rem;" />
			</a>
		{/if}
		{#if forUser.tags.includes("author")}
			<a
				style:width="{size * 1.5}rem"
				style:height="{size * 1.5}rem"
				style:border-radius="{size / 2}rem"
				href="/settings/account/author-verification"
				title="{forUser.displayName} is a verified published author"
				class="badge author"
			>
				<EditIcon stroke={theme().backgroundDark} style="width: {size}rem;" />
			</a>
		{/if}
		{#if forUser.tags.includes("mod")}
			<a
				style:width="{size * 1.5}rem"
				style:height="{size * 1.5}rem"
				style:border-radius="{size / 2}rem"
				href="/settings/account/become-a-moderator"
				title="{forUser.displayName} is a Bookfly moderator"
				class="badge mod"
			>
				<WrenchIcon stroke={theme().backgroundDark} style="width: {size * 0.8}rem;" />
			</a>
		{/if}
	</span>
{/if}

<style>
	.badge {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.badges {
		display: flex;
	}

	.dev {
		background-image: linear-gradient(to bottom right, #a6e3a1, #89dceb);
	}

	.author {
		background-image: linear-gradient(to bottom right, #fab387, #f38ba8);
	}

	.mod {
		background-image: linear-gradient(to bottom right, #f5c2e7, #b4befe);
	}
</style>
