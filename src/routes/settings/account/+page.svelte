<script>
	import { goto } from "$app/navigation";
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import LeftArrowIcon from "../../../assets/images/icons/LeftArrowIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import WrenchIcon from "../../../assets/images/icons/WrenchIcon.svelte";
	import Background from "../../../components/Background.svelte";
	import Page from "../../../components/Page.svelte";
	import theme from "../../../themes/theme.svelte";
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
		<h1 style:color={theme().textBright}>Account</h1>
	</span>

	<!-- Request author verification -->
	<a href="/settings/account/changeusername" style:border-bottom-color={theme().textDark}>
		<div>
			<AuthorIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Request author verification</span>
		</div>
		<p style:color={theme().textDull}>Only published authors can recieve author verifications. Independent publishing is allowed.</p>
	</a>

	<!-- Become a moderator -->
	<a href="/settings/account/changeusername" style:border-bottom-color={theme().textDark}>
		<div>
			<WrenchIcon style="width: 1.8rem; height: 1.8rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Become a moderator</span>
		</div>
		<p style:color={theme().textDull}>Bookfly is powered by volunteering moderators who keep Bookfly content safe, relevant, and accessible.</p>
	</a>

	<!-- Become a developer -->
	<a href="/settings/account/changeusername" style:border-bottom-color={theme().textDark}>
		<div>
			<DeveloperIcon style="width: 2rem; height: 2rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Become a developer</span>
		</div>
		<p style:color={theme().textDull}>
			Bookfly is a non-profit organization powered by volunteers. Paying positions are currently not available.
		</p>
	</a>

	<!-- Delete account -->
	<a href="/settings/account/delete" style:border-bottom-color={theme().textDark}>
		<div>
			<TrashIcon style="width: 2rem; height: 2rem;" stroke="#f38ba8" />
			<span style:color="#f38ba8">Delete your account</span>
		</div>
		<p style:color={theme().textDull}>
			<b>This cannot be undone.</b>
			You will be taken to a confirmation page first.
		</p>
	</a>
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

	a {
		text-decoration: none;
		font-size: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		padding-left: 2rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
		}

		p {
			font-size: 0.8rem;
		}
	}
</style>
