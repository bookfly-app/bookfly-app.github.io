<script lang="ts">
	import { goto } from "$app/navigation";
	import AuthorIcon from "../../../assets/images/icons/AuthorIcon.svelte";
	import CloseIcon from "../../../assets/images/icons/CloseIcon.svelte";
	import DeveloperIcon from "../../../assets/images/icons/DeveloperIcon.svelte";
	import EditMailIcon from "../../../assets/images/icons/EditMailIcon.svelte";
	import TrashIcon from "../../../assets/images/icons/TrashIcon.svelte";
	import WrenchIcon from "../../../assets/images/icons/WrenchIcon.svelte";
	import { changeEmail, updateUser, user } from "../../../backend/auth.svelte";
	import Header from "../../../components/Header.svelte";
	import Page from "../../../components/Page.svelte";

	$effect(() => {
		if (!user()) {
			goto("/login");
		}
	});

	let email: string = $state("");
	let changeEmailVisible = $state(false);

	let changeEmailContainer: HTMLElement;
	let changeAuthorContainer: HTMLElement;
	let changeAuthorVisible = $state(false);

	function clickChangeEmail(event: MouseEvent) {
		if (event.target === changeEmailContainer) {
			changeEmailVisible = false;
		}
	}
	
	function clickChangeAuthor(event: MouseEvent) {
		if (event.target === changeAuthorContainer) {
			changeAuthorVisible = false;
		}
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

	<div 
		class="change-email" 
		bind:this={changeEmailContainer}
		onclick={clickChangeEmail} 
		style:background={changeEmailVisible ? "rgba(0, 0, 0, 60%)" : "rgba(0, 0, 0, 0%)"}
		style:pointer-events={changeEmailVisible ? undefined : "none"}
	>
		<div style:scale={changeEmailVisible ? "100%" : "0%"}>
			<span>Change Email</span>
			<input placeholder="new@example.com" type="text" bind:value={email} enterkeyhint="done" />
			<div class="buttons">
				<button class="cancel" onclick={() => changeEmailVisible = false}>Cancel</button>
				<button class="submit" onclick={submitChangeEmail}>Change</button>
			</div>
			<button class="close" onclick={() => changeEmailVisible = false}>
				<CloseIcon stroke="var(--red)" style="width: 1rem; height: 1rem;" />
			</button>
		</div>
	</div>

	<!-- Request author verification -->
	<button class="listing" onclick={() => changeAuthorVisible = true}>
		<div>
			<AuthorIcon style="width: 1.25rem; height: 1.25rem;" stroke="var(--text)" />
			<span>Request author verification</span>
		</div>
		<p>Only published authors can recieve author verifications. Independent publishing is allowed.</p>
	</button>

	<div 
		class="change-author" 
		bind:this={changeAuthorContainer}
		onclick={clickChangeAuthor} 
		style:background={changeAuthorVisible ? "rgba(0, 0, 0, 60%)" : "rgba(0, 0, 0, 0%)"}
		style:pointer-events={changeAuthorVisible ? undefined : "none"}
	>
		<div style:scale={changeAuthorVisible ? "100%" : "0%"}>
			{#if user()?.tags.includes("author")}
				<span>You are a verified author.</span>
			{:else}
				<span>Request Author Verification</span>
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
	</div>

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

	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.change-email, .change-author {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100dvw;
		height: 100dvh;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.1s;

		.buttons {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.cancel {
				background: linear-gradient(to bottom right, var(--peach), var(--red));
			}

			.submit {
				background: linear-gradient(to bottom right, var(--lavender), var(--blue));
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


		> div {
			background: var(--base);
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 2rem;
			border-radius: 0.5rem;
			box-shadow: 0px 0px 0.5rem black;
			gap: 1rem;
			transition: scale 0.1s;
		}

		span {
			color: var(--subtext-1);
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
