<script>
	import AccountIcon from "../../assets/images/icons/AccountIcon.svelte";
	import InfoIcon from "../../assets/images/icons/InfoIcon.svelte";
	import PaintBrushIcon from "../../assets/images/icons/PaintBrushIcon.svelte";
	import BackButton from "../../components/BackButton.svelte";
	import Page from "../../components/Page.svelte";
	import theme from "../../themes/theme.svelte";
</script>

<Page class="settings">
	<span class="settings-header">
		<BackButton href="/" />
		<h1 style:color={theme().textBright}>Settings</h1>
	</span>

	<a href="/settings/account">
		<AccountIcon style="width: 1.5rem; height: 1.5rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>Account</span>
	</a>
	<a href="/settings/appearance">
		<PaintBrushIcon style="width: 1.5rem; height: 1.5rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>Appearance</span>
	</a>
	<a href="/about">
		<InfoIcon style="width: 1.5rem; height: 1.5rem;" stroke={theme().textBright} />
		<span style:color={theme().textBright}>About</span>
	</a>
</Page>

<style>
	.settings-header {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		gap: 2rem;

		h1 {
			font-size: 1.5rem;
		}
	}

	:global(.settings) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	a {
		text-decoration: none;
		font-size: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		padding-left: 2rem;
	}
</style>
