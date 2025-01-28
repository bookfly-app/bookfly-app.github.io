<script>
	import { goto } from "$app/navigation";
	import AccountIcon from "../../assets/images/icons/AccountIcon.svelte";
	import InfoIcon from "../../assets/images/icons/InfoIcon.svelte";
	import LeftArrowIcon from "../../assets/images/icons/LeftArrowIcon.svelte";
	import PaintBrushIcon from "../../assets/images/icons/PaintBrushIcon.svelte";
	import Background from "../../components/Background.svelte";
	import Footer from "../../components/Footer.svelte";
	import Page from "../../components/Page.svelte";
	import theme from "../../themes/theme.svelte";
</script>

<Background />
<Page class="settings">
	<span class="settings-header">
		<button onclick={() => goto("/")} class="back-button" style:background-image={`linear-gradient(${theme().accent}, ${theme().accent2})`}>
			<LeftArrowIcon stroke={theme().background} />
		</button>
		<h1 style:color={theme().textBright}>Settings</h1>
	</span>

	<a href="/settings/account" style:border-bottom-color={theme().textDark}>
		<AccountIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>Account</span>
	</a>
	<a href="/settings/appearance" style:border-bottom-color={theme().textDark}>
		<PaintBrushIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>Appearance</span>
	</a>
	<a href="/settings/about" style:border-bottom-color={theme().textDark}>
		<InfoIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>About</span>
	</a>
	<Footer selected="profile" />
</Page>

<style>
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

	:global(.settings) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	a {
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
