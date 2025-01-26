<script>
	import theme from "../themes/theme.svelte";

	let { user } = $props();
</script>

<a
	href={`/profile/${user.username}`}
	class="book"
	style:border-color={theme().textDark}
>
	<img class="profile-picture" src={user.picture} />
	<div class="person-info-wrapper">
		<div class="person-info">
			<h1 style:color={theme().textBright}>
				{user.displayName}
			</h1>
			<h2 style:color={theme().textDim}>
				@{user.username}
			</h2>
		</div>
		<p style:color={theme().textDull}>{user.bio}</p>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.book {
		display: flex;
		padding-left: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-right: 2rem;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.person-info-wrapper {
		display: flex;
		flex-direction: column;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.person-info {
		display: flex;
		gap: 0.5rem;

		h1,
		h2 {
			font-weight: normal;
			font-size: 1rem;
		}
	}

	.profile-picture {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
</style>
