<script>
	import LeftArrowIcon from "../../../assets/images/icons/LeftArrowIcon.svelte";
	import BackButton from "../../../components/BackButton.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import theme from "../../../themes/theme.svelte";
</script>

<Background />
<Page class="about">
	<span class="heading">
		<BackButton href="/settings" />
		<h1 style:color={theme().textBright}>About</h1>
	</span>
	<p style:color={theme().textDull}>
		Bookfly is a non-profit organization originally created by
		<a href="/profile/vi">@vi</a>
		as a passion project in college.
	</p>
	<p style:color={theme().textDull}>
		Powered by volunteers, no one on the Bookfly team makes a cent off of the project. Bookfly is completely ad-free with zero in-app purchases,
		providing all features to all users.
	</p>

	<!-- Team & Values -->
	<h2 style:color={theme().text}>Team &amp; Values</h2>
	<p style:color={theme().textDull}>
		Bookfly is still led by its original creator,
		<a href="/profile/vi">@vi</a>
		, a nonbinary reader, writer, and developer (sort of). Bookfly will always support kindness, acceptance, diversity, equity, and inclusion.
	</p>
	<p style:color={theme().textDull}>Currently, Bookfly has no other team members :(</p>

	<!-- Moderation -->
	<h2 style:color={theme().text}>Moderation</h2>
	<p style:color={theme().textDull}>
		The bookfly team moderates content posted to Bookfly. Harmful and hateful content will be removed. Bookfly also may remove content that's
		off-topic. Posting repeatedly with zero relation to books or writing may get your account flagged. This was designed to be a safe and cozy
		space for people to talk about and discover books. Nothing more, nothing less.
	</p>
	<p style:color={theme().textDull}>
		Bookfly will never remove relevant constructive content based on opinion. Users are free to share as much dislike and distaste for books,
		writing styles, and author's specific works or styles. Do not attack authors as people. Criticize the works, not the people.
	</p>
	<p style:color={theme().textDull}>
		These moderation rules are loosely defined. Each situation will be handled by a case-by-case basis and judged by Bookfly's moderators, who are
		trusted to make educated judgements.
	</p>
	<p style:color={theme().textDull}>
		If your account was suspended or banned and you feel it was wrongful, you can submit an appeal. Your content will be reviewed and a secondary,
		more thorough judgement will be passed to you.
	</p>

	<!-- Technical Details -->
	<h2 style:color={theme().text}>Technical Details</h2>
	<p style:color={theme().textDull}>
		On the front end, Bookfly is written using
		<a href="https://svelte.dev/">Svelte</a>
		and
		<a href="https://svelte.dev/docs/kit/introduction">Sveltekit</a>
		for the web (flavored with
		<a href="https://www.typescriptlang.org/">TypeScript</a>
		and bundled with
		<a href="https://bun.sh/">Bun</a>
		), and ported to mobile with
		<a href="https://v2.tauri.app/">Tauri</a>
		.
	</p>
	<p style:color={theme().textDull}>
		In the back, Bookfly uses <a href="https://firebase.google.com/">Firebase</a>
		to store data and manage authentication.
	</p>
	<p style:color={theme().textDull}>
		This stack was chosen by
		<a href="/profile/vi">@vi</a>
		in the very beginning, somewhat arbitrarily and based on limited experience. The goal was a simple but powerful stack that allowed seamless porting
		between platforms.
	</p>

	<!-- Legal -->
	<h2 style:color={theme().text}>Legal</h2>
	<p style:color={theme().textDull}>Bookfly is open source, meaning anyone can view and contribute to the code that makes up the project.</p>
	<p style:color={theme().textDull}>
		Bookfly is licensed as <i>all rights reserved</i>
		, meaning you are legally not allowed to use, copy, or distribute its code without explicit authorization from its creator,
		<a href="/profile/vi">@vi</a>
		.
	</p>

	<p style:color={theme().textDull}>
		You are freely allowed to contact <a href="/profile/vi">@vi</a>
		to ask for permission to use Bookfly's code for some specific circumstance.
	</p>
	<Footer selected="profile" />
</Page>

<style>
	:global(.about) {
		padding: 2rem;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		a {
			text-decoration: none;
			color: cornflowerblue;
		}

		h2 {
			padding-top: 1rem;
		}
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
