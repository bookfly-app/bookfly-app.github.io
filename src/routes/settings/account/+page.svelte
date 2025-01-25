<script>
	import { goto } from "$app/navigation";
	import AccountIcon from "../../../assets/images/icons/AccountIcon.svelte";
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import LeftArrowIcon from "../../../assets/images/icons/LeftArrowIcon.svelte";
	import PaintBrushIcon from "../../../assets/images/icons/PaintBrushIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import UsernameIcon from "../../../assets/images/icons/UsernameIcon.svelte";
	import theme from "../../../themes/theme.svelte";
</script>

<main style:background={theme().background}>
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

	<!-- Request name change -->
	<a
		href="/settings/account/changeusername"
		style:border-bottom-color={theme().textDark}
	>
		<div>
			<UsernameIcon
				style="width: 2rem; height: 2rem;"
				stroke={theme().textBright}
			/>
			<span style:color={theme().textBright}
				>Request a username change</span
			>
		</div>
		<p style:color={theme().textDull}>
			Usernames may be changed once a week.
		</p>
	</a>

	<!-- Request author verification -->
	<a
		href="/settings/account/changeusername"
		style:border-bottom-color={theme().textDark}
	>
		<div>
			<AuthorIcon
				style="width: 2rem; height: 2rem;"
				stroke={theme().textBright}
			/>
			<span style:color={theme().textBright}
				>Request author verification</span
			>
		</div>
		<p style:color={theme().textDull}>
			Only published authors can recieve author verifications. Independent
			publishing is allowed.
		</p>
	</a>

	<!-- Become a developer -->
	<a
		href="/settings/account/changeusername"
		style:border-bottom-color={theme().textDark}
	>
		<div>
			<DeveloperIcon
				style="width: 2rem; height: 2rem;"
				stroke={theme().textBright}
			/>
			<span style:color={theme().textBright}>Become a developer</span>
		</div>
		<p style:color={theme().textDull}>
			Bookfly is a non-profit organization powered by volunteers. Paying
			positions are currently not available.
		</p>
	</a>

	<!-- Delete account -->
	<a
		href="/settings/account/delete"
		style:border-bottom-color={theme().textDark}
	>
		<div>
			<TrashIcon
				style="width: 2rem; height: 2rem;"
				stroke={theme().textBright}
			/>
			<span style:color={theme().textBright}>Delete your account</span>
		</div>
		<p style:color={theme().textDull}>
			<b>This cannot be undone.</b> You will be taken to a confirmation page
			first.
		</p>
	</a>
</main>

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

	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
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
