<script lang="ts">
	import type { User } from "../api/userapi";
	import DeveloperIcon from "../assets/images/icons/DeveloperIcon.svelte";
	import EditIcon from "../assets/images/icons/EditIcon.svelte";
	import SproutIcon from "../assets/images/icons/SproutIcon.svelte";
	import WrenchIcon from "../assets/images/icons/WrenchIcon.svelte";

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
				title="{forUser.displayName} is a Wallflower developer"
				class="badge dev"
			>
				<DeveloperIcon stroke="var(--crust)" style="width: {size}rem;" />
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
				<EditIcon stroke="var(--crust)" style="width: {size}rem;" />
			</a>
		{/if}
		{#if forUser.tags.includes("mod")}
			<a
				style:width="{size * 1.5}rem"
				style:height="{size * 1.5}rem"
				style:border-radius="{size / 2}rem"
				href="/settings/account/become-a-moderator"
				title="{forUser.displayName} is a Wallflower moderator"
				class="badge mod"
			>
				<WrenchIcon stroke="var(--crust)" style="width: {size * 0.8}rem;" />
			</a>
		{/if}
		{#if Date.now() - forUser.birthmoment < 1000 * 60 * 60 * 24 * 7}
			<a
				style:width="{size * 1.5}rem"
				style:height="{size * 1.5}rem"
				style:border-radius="{size / 2}rem"
				href="/settings/account/become-a-moderator"
				title="{forUser.displayName} is a Wallflower moderator"
				class="badge new"
			>
				<SproutIcon stroke="var(--crust)" style="width: {size * 0.8}rem;" />
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
		background-image: linear-gradient(to bottom right, var(--green), var(--teal));
	}

	.author {
		background-image: linear-gradient(to bottom right, var(--peach), var(--red));
	}

	.mod {
		background-image: linear-gradient(to bottom right, var(--pink), var(--lavender));
	}

	.new {
		background-image: linear-gradient(to bottom right, var(--yellow), var(--green));
	}
</style>
