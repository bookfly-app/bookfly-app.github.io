<script>
	import { goto } from "$app/navigation";
	import LeftArrowIcon from "../../../assets/images/icons/LeftArrowIcon.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import RadioInput from "../../../components/RadioInput.svelte";
	import theme, { setTheme, themes } from "../../../themes/theme.svelte";

	let showMyPostsInFollowing = true;
</script>

<Background />
<Page class="settings">
	<span class="settings-header">
		<button
			onclick={() => goto("/settings")}
			class="back-button"
			style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}
		>
			<LeftArrowIcon stroke={theme().background} />
		</button>
		<h1 style:color={theme().textBright}>Appearance</h1>
	</span>

	<!-- Interface -->
	<span class="option" style:color={theme().text}>
		Show my posts in my following feed
		<RadioInput bind:on={showMyPostsInFollowing} style="margin-left: auto;" />
	</span>

	<!-- Themes -->
	<span style:border-color={theme().textDark} class="theme-header">
		<h2 class="header" style:color={theme().textBright}>Theme</h2>
		<button
			style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}
			style:color={theme().background}
			class="add-custom-theme"
		>
			Add Custom
		</button>
	</span>
	{#each themes as otherTheme}
		<button class="theme" onclick={() => setTheme(otherTheme)} style:border-bottom-color={theme().textDark}>
			<div
				style:background-image={`linear-gradient(${otherTheme.background}, ${otherTheme.backgroundDim})`}
				style:border-color={otherTheme.accent}
				class="theme-icon"
			></div>
			<span style:color={theme().textDull}>{otherTheme.name}</span>
		</button>
	{/each}
	<Footer selected="profile" />
</Page>

<style>
	.option {
		display: flex;
		font-size: 1rem;
		width: 100%;
		padding: 1rem;
		align-items: center;
	}

	.settings-header {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		gap: 2rem;
	}

	.back-button {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	.theme-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border-width: 2px;
		border-style: solid;
	}

	.theme-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-top-style: solid;
		border-top-width: 1px;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	.header {
		font-size: 2rem;
		font-weight: normal;
	}

	.add-custom-theme {
		padding: 0.5rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		border-radius: 100vmax;
		font-size: 1rem;
		font-weight: 500;
	}

	.theme {
		text-decoration: none;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		padding-left: 2rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}
</style>
