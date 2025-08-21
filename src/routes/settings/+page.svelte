<script>
	import BellIcon from "../../assets/images/icons/BellIcon.svelte";
	import InfoIcon2 from "../../assets/images/icons/InfoIcon2.svelte";
	import PaintRollerIcon from "../../assets/images/icons/PaintRollerIcon.svelte";
	import ProfileIcon from "../../assets/images/icons/ProfileIcon.svelte";
	import BackButton from "../../components/BackButton.svelte";
	import Page from "../../components/Page.svelte";
</script>

<Page class="settings">
	<span class="heading">
		<BackButton style="position: absolute; left: 1rem;" />
		<h1>Settings</h1>
	</span>

	<!-- Request author verification -->
	<a href="/settings/appearance">
		<div>
			<PaintRollerIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Appearance</span>
		</div>
		<p>Change your app theme, UI scaling, and customize your wallflower.land appearance in other ways.</p>
	</a>

	<a href="/settings/account">
		<div>
			<ProfileIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Account</span>
		</div>
		<p>Request author verification, request to be a moderator or developer, delete your account, and more.</p>
	</a>

	<a href="/settings/notifications">
		<div>
			<BellIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Notifications</span>
		</div>
		<p>Configure what kind of notifications you'd like to see in your inbox.</p>
	</a>

	<a href="/about">
		<div>
			<InfoIcon2 style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>About</span>
		</div>
		<p>The story behind wallflower.land, and what we're all about around here.</p>
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

		&:first-of-type {
			margin-top: 4.5rem;
		}

		&:hover {
			background: rgba(150, 150, 255, 10%);
		}
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
		justify-content: center;
		position: fixed;
		top: 0px;
		background-color: var(--crust);
		width: 100%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		left: 0px;

		h1 {
			color: var(--text);
			font-weight: normal;
			font-size: 1.25rem;
		}
	}
</style>
