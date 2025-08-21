<script>
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import WrenchIcon from "../../../assets/images/icons/WrenchIcon.svelte";
	import BackButton from "../../../components/BackButton.svelte";
	import Page from "../../../components/Page.svelte";
</script>

<Page class="settings">
	<span class="settings-header">
		<BackButton />
		<h1>Account</h1>
	</span>

	<!-- Request author verification -->
	<a href="/settings/account/author-verification">
		<div>
			<AuthorIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Request author verification</span>
		</div>
		<p>Only published authors can recieve author verifications. Independent publishing is allowed.</p>
	</a>

	<!-- Become a moderator -->
	<a href="/settings/account/become-a-moderator">
		<div>
			<WrenchIcon style="width: 1rem; height: 1rem;" stroke="var(--text)" />
			<span>Become a moderator</span>
		</div>
		<p>Wallflower is powered by volunteering moderators who keep Wallflower content safe, relevant, and accessible.</p>
	</a>

	<!-- Become a developer -->
	<a href="/settings/account/become-a-developer">
		<div>
			<DeveloperIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Become a developer</span>
		</div>
		<p>
			Wallflower is a non-profit organization powered by volunteers. Paying positions are currently not available.
		</p>
	</a>

	<!-- Delete account -->
	<a href="/settings/account/delete">
		<div>
			<TrashIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--red)" />
			<span style:color="var(--red)">Delete your account</span>
		</div>
		<p>
			<b>This cannot be undone.</b>
			You will be taken to a confirmation page first.
		</p>
	</a>
</Page>

<style>
	h1 {
		font-weight: normal;
		color: var(--text);
		font-size: 1.5rem;
	}

	.settings-header {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		gap: 2rem;
	}

	a {
		text-decoration: none;
		font-size: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		padding-left: 2rem;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;

			span {
				font-size: 1rem;
				color: var(--text);
			}
		}

		p {
			font-size: 0.8rem;
			color: var(--overlay-1);
		}

		&:hover {
			background: rgba(150, 150, 255, 10%);
		}
	}
</style>
