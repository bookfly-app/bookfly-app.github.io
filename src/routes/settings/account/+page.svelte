<script lang="ts">
	import { goto } from "$app/navigation";
	import { getAuth, reauthenticateWithCredential } from "firebase/auth";
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import CloseIcon from "../../../assets/images/icons/CloseIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import EditMailIcon from "../../../assets/images/icons/EditMailIcon.svelte";
	import PasswordIcon from "../../../assets/images/icons/PasswordIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import WrenchIcon from "../../../assets/images/icons/WrenchIcon.svelte";
	import { changeEmail, passwordErrors, updateUser, user } from "../../../backend/auth.svelte";
	import Header from "../../../components/Header.svelte";
	import Page from "../../../components/Page.svelte";
	import Popup from "../../../components/Popup.svelte";

	$effect(() => {
		if (!user()) {
			goto("/login");
		}
	});

	let email: string = $state("");
	let oldPassword = $state("");
	let newPassword = $state("");
	let newPassword2 = $state("");
	let newPasswordErrors = $derived(newPassword ? passwordErrors(newPassword): []);
	let passwordMatchError = $derived(newPassword && newPassword2 && newPassword !== newPassword2 ? "Passwords must match" : null);
	let canChangePassword = $derived(newPassword && oldPassword && newPassword2 && !passwordMatchError && newPasswordErrors.length === 0);

	let changeEmailVisible = $state(false);
	let changeAuthorVisible = $state(false);
	let changePasswordVisible = $state(false);

	async function changePassword() {
		await reauthenticateWithCredential(getAuth().currentUser!, oldPassword);
	}

	function submitChangeEmail() {
		changeEmail(email);
		changeEmailVisible = false;
	}

	async function requestAuthorVerification() {
		await updateUser({ requestedAuthorVerification: true });
	}

	async function unrequestAuthorVerification() {
		await updateUser({ requestedAuthorVerification: false });
	}
	
</script>

<Page class="settings">
	<Header title="Account" />

	<!-- Change email -->
	<button class="first listing" onclick={() => changeEmailVisible = true}>
		<div>
			<EditMailIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Change email</span>
		</div>
		<p>Your email can be changed any number of times. Your current email is <span>{user()?.email}</span>.</p>
	</button>

	<Popup bind:visible={changeEmailVisible}>
		<div class="popup">
			<span class="title">Change Email</span>
			<p>Your current email is <span>{user()?.email}</span>.</p>
			<input placeholder="new@example.com" type="text" bind:value={email} enterkeyhint="done" />
			<div class="buttons">
				<button class="cancel" onclick={() => changeEmailVisible = false}>Cancel</button>
				<button class="submit" onclick={changePassword}>Change</button>
			</div>
			<button class="close" onclick={() => changeEmailVisible = false}>
				<CloseIcon stroke="var(--red)" style="width: 1rem; height: 1rem;" />
			</button>
		</div>
	</Popup>

	<!-- Change Password -->
	<button class="listing" onclick={() => changePasswordVisible = true}>
		<div>
			<PasswordIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Change Password</span>
		</div>
		<p>
			You can change your password any number of times. You will be asked to enter your current password first.
		</p>
	</button>

	<Popup bind:visible={changePasswordVisible}>
		<div class="popup">
			<span class="title">Change Password</span>
			<div class="section">
				<span>Old Password</span>
				<input placeholder="Old Password" type="password" bind:value={oldPassword} enterkeyhint="done" />
			</div>
			<div class="section">
				<span>New Password</span>
				<input placeholder="New Password" type="password" bind:value={newPassword} enterkeyhint="done" />
			</div>
			{#if newPasswordErrors.length > 0}
				<div class="errors">
					{#each newPasswordErrors as error}
						<span class="error">{error}</span>
					{/each}
				</div>
			{/if}
			<div class="section">
				<span>Retype New Password</span>
				<input placeholder="Retype New Password" type="password" bind:value={newPassword2} enterkeyhint="done" />
			</div>
			{#if passwordMatchError}
				<div class="errors">
					<span class="error">{passwordMatchError}</span>
				</div>
			{/if}
			<div class="buttons">
				<button class="cancel" onclick={() => changePasswordVisible = false}>Cancel</button>
				<button disabled={!canChangePassword} class="submit" onclick={submitChangeEmail}>Change</button>
			</div>
			<button class="close" onclick={() => changePasswordVisible = false}>
				<CloseIcon stroke="var(--red)" style="width: 1rem; height: 1rem;" />
			</button>
		</div>
	</Popup>

	<!-- Request author verification -->
	<button class="listing" onclick={() => changeAuthorVisible = true}>
		<div>
			<AuthorIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Request author verification</span>
		</div>
		<p>Only published authors can recieve author verifications. Independent publishing is allowed.</p>
	</button>

	<Popup bind:visible={changeAuthorVisible}>
		<div class="popup">
			{#if user()?.tags.includes("author")}
				<span class="title">You are a verified author.</span>
				<p>
					Being a verified author gives you access to special author features in wallflower.land,
					and will display an author icon on your profile.
				</p>
			{:else}
				<span class="title">Request Author Verification</span>
				<p>
					Being a verified author gives you access to special author features in wallflower.land,
					and will display an author icon on your profile.
				</p>
				<p>
					Only published authors can receive 
					author verification. Independent publishing is included.
				</p>
				{#if user()?.requestedAuthorVerification}
					<button class="unrequest become-author" onclick={unrequestAuthorVerification}>
						Unrequest Author Verification
					</button>
				{:else}
					<button class="request become-author" onclick={requestAuthorVerification}>
						Request Author Verification
					</button>
				{/if}
			{/if}
			<button class="close" onclick={() => changeAuthorVisible = false}>
				<CloseIcon stroke="var(--red)" style="width: 1rem; height: 1rem;" />
			</button>
		</div>
	</Popup>

	<!-- Become a moderator -->
	<a class="listing" href="/settings/account/become-a-moderator">
		<div>
			<WrenchIcon style="width: 1rem; height: 1rem;" stroke="var(--text)" />
			<span>Become a moderator</span>
		</div>
		<p>Wallflower is powered by volunteering moderators who keep Wallflower content safe, relevant, and accessible.</p>
	</a>

	<!-- Become a developer -->
	<a class="listing" href="/settings/account/become-a-developer">
		<div>
			<DeveloperIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Become a developer</span>
		</div>
		<p>
			Wallflower is a non-profit organization powered by volunteers. Paying positions are currently not available.
		</p>
	</a>

	<!-- Delete account -->
	<a class="listing" href="/settings/account/delete">
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
	.become-author {
		padding: 0.25rem 2rem 0.25rem 2rem;
		font-size: 0.85rem;
		border-radius: 100vmax;
		margin-top: 0.5rem;
		transition: scale 0.2s;
		box-shadow: 0px 0px 0.5rem black;

		&.unrequest {
			background: linear-gradient(to bottom right, var(--peach), var(--red));
		}

		&.request {
			background: linear-gradient(to bottom right, var(--lavender), var(--blue));
		}

		&:hover {
			scale: 105%;
		}
	}
	
	.section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		span {
			color: var(--overlay-1);
			font-size: 0.85rem;
		}
	}

	.error {
		color: var(--red);
		font-size: 0.85rem;
	}

	.errors {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.popup {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;

		p {
			color: var(--overlay-1);
			font-size: 0.85rem;
			text-align: center;

			span {
				color: var(--subtext-1);
			}
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.cancel {
				background: linear-gradient(to bottom right, var(--peach), var(--red));
			}

			.submit {
				&:not([disabled]) {
					background: linear-gradient(to bottom right, var(--lavender), var(--blue));
				}

				&[disabled] {
					background-color: var(--crust);
					color: var(--surface-2);
					box-shadow: none;
					scale: 100%;
					cursor: default;
				}
			}

			button {
				padding: 0.25rem 2rem 0.25rem 2rem;
				font-size: 0.85rem;
				border-radius: 100vmax;
				margin-top: 0.5rem;
				transition: scale 0.2s;
				box-shadow: 0px 0px 0.5rem black;

				&:hover {
					scale: 105%;
				}
			}
		}

		.title {
			color: var(--subtext-1);
			font-size: 1.2rem;
			text-align: center;
		}


		input {
			background: var(--crust);
			color: var(--subtext-1);
			padding: 0.5rem;
			border-radius: 0.5rem;
			width: 15rem;
		}
	}

	.listing {
		text-decoration: none;
		font-size: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		padding-left: 2rem;
		text-align: left;

		&.first {
			margin-top: 3.5rem;
			padding-top: 1.5rem;
		}

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

			span {
				color: var(--subtext-1);
			}
		}

		&:hover {
			background: rgba(150, 150, 255, 10%);
		}
	}
</style>
