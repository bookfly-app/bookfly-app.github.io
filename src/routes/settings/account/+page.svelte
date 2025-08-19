<script>
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import WrenchIcon from "../../../assets/images/icons/WrenchIcon.svelte";
	import BackButton from "../../../components/BackButton.svelte";
	import Background from "../../../components/Background.svelte";
	import Page from "../../../components/Page.svelte";
	import theme from "../../../themes/theme.svelte";
</script>

<Page class="settings">
	<span class="settings-header">
		<BackButton />
		<h1 style:color={theme().textBright}>Account</h1>
	</span>

	<!-- Request author verification -->
	<a href="/settings/account/author-verification" style:border-bottom-color={theme().textDark}>
		<div>
			<AuthorIcon style="width: 1.5rem; height: 2rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Request author verification</span>
		</div>
		<p style:color={theme().textDull}>Only published authors can recieve author verifications. Independent publishing is allowed.</p>
	</a>

	<!-- Become a moderator -->
	<a href="/settings/account/become-a-moderator" style:border-bottom-color={theme().textDark}>
		<div>
			<WrenchIcon style="width: 1.25rem; height: 1.25rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Become a moderator</span>
		</div>
		<p style:color={theme().textDull}>Wallflower is powered by volunteering moderators who keep Wallflower content safe, relevant, and accessible.</p>
	</a>

	<!-- Become a developer -->
	<a href="/settings/account/become-a-developer" style:border-bottom-color={theme().textDark}>
		<div>
			<DeveloperIcon style="width: 1.5rem; height: 1.5rem;" stroke={theme().textBright} />
			<span style:color={theme().textBright}>Become a developer</span>
		</div>
		<p style:color={theme().textDull}>
			Wallflower is a non-profit organization powered by volunteers. Paying positions are currently not available.
		</p>
	</a>

	<!-- Delete account -->
	<a href="/settings/account/delete" style:border-bottom-color={theme().textDark}>
		<div>
			<TrashIcon style="width: 1.5rem; height: 1.5rem;" stroke="#f38ba8" />
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

			span {
				font-size: 1.2rem;
			}
		}

		p {
			font-size: 0.8rem;
		}
	}
</style>
