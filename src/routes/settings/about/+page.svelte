<script>
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
		<h1>About</h1>
	</span>

	<div class="definition">
		<span>
			<h2>Wall&middot;flow&middot;er</h2>
			<span class="ipa" aria-label="US IPA">&#x2F;&#x2C8;w&#x0251;l;&#x02D0;fla&#x028A;.&#x0259;r&#x2F;</span>
		</span>
		<p class="body">
			<i>(noun)</i>
			A shy person who is frightened to involve themselves in 
			social activities and does not attract much interest or attention.
		</p>
	</div>

	<p style:color={theme().textDull}>
		Wallflower is a non-profit organization originally created by
		<a href="/profile/vi">@vi</a>
		as a passion project in college. The name <i>Wallflower</i> comes from 
		<a href="/profile/vi">@vi</a>'s favorite book, 
		<a href="/book/9780671027346"><i>The Perks of Being a Wallflower</i></a>
		by Stephen Chbosky.
	</p>
	<p style:color={theme().textDull}>
		Powered by volunteers, no one on the Wallflower team makes a cent off of the project. Wallflower is completely ad-free with zero in-app purchases,
		providing all features to all users.
	</p>

	<!-- Team & Values -->
	<h2 style:color={theme().text}>Team &amp; Values</h2>
	<p style:color={theme().textDull}>
		Wallflower is still led by its original creator,
		<a href="/profile/vi">@vi</a>
		, a nonbinary reader, writer, and developer (sort of). Wallflower will always support kindness, acceptance, diversity, equity, and inclusion.
	</p>
	<p style:color={theme().textDull}>Currently, Wallflower has no other team members.</p>

	<!-- Moderation -->
	<h2 style:color={theme().text}>Moderation</h2>
	<p style:color={theme().textDull}>
		The Wallflower team moderates content posted to Wallflower. Harmful and hateful content will be removed. Wallflower also may remove content that's
		off-topic. Posting repeatedly with zero relation to books or writing may get your account flagged. This was designed to be a safe and cozy
		space for people to talk about and discover books. Nothing more, nothing less.
	</p>
	<p style:color={theme().textDull}>
		Wallflower will never remove relevant constructive content based on opinion. Users are free to share as much dislike and distaste for books,
		writing styles, and author's specific works or styles. Do not attack authors as people. Criticize the works, not the people.
	</p>
	<p style:color={theme().textDull}>
		These moderation rules are loosely defined. Each situation will be handled by a case-by-case basis and judged by Wallflower's moderators, who are
		trusted to make educated judgements.
	</p>
	<p style:color={theme().textDull}>
		If your account was suspended or banned and you feel it was wrongful, you can submit an appeal. Your content will be reviewed and a secondary,
		more thorough judgement will be passed to you.
	</p>

	<!-- <!-- Technical Details --> -->
	<!-- <h2 style:color={theme().text}>Technical Details</h2> -->
	<!-- <p style:color={theme().textDull}> -->
	<!-- 	On the front end, Wallflower is written using -->
	<!-- 	<a href="https://svelte.dev/">Svelte</a> -->
	<!-- 	and -->
	<!-- 	<a href="https://svelte.dev/docs/kit/introduction">Sveltekit</a> -->
	<!-- 	for the web (flavored with -->
	<!-- 	<a href="https://www.typescriptlang.org/">TypeScript</a> -->
	<!-- 	and bundled with -->
	<!-- 	<a href="https://bun.sh/">Bun</a> -->
	<!-- 	), and ported to mobile with -->
	<!-- 	<a href="https://v2.tauri.app/">Tauri</a> -->
	<!-- 	. -->
	<!-- </p> -->
	<!-- <p style:color={theme().textDull}> -->
	<!-- 	In the back, Wallflower uses <a href="https://firebase.google.com/">Firebase</a> -->
	<!-- 	to store data and manage authentication. -->
	<!-- </p> -->
	<!-- <p style:color={theme().textDull}> -->
	<!-- 	This stack was chosen by -->
	<!-- 	<a href="/profile/vi">@vi</a> -->
	<!-- 	in the very beginning, somewhat arbitrarily and based on limited experience. The goal was a simple but powerful stack that allowed seamless porting -->
	<!-- 	between platforms. -->
	<!-- </p> -->
	<!---->

	<!-- Legal -->
	<h2 style:color={theme().text}>Legal</h2>
	<p style:color={theme().textDull}>Wallflower is open source, meaning anyone can view and contribute to the code that makes up the project.</p>
	<p style:color={theme().textDull}>
		Wallflower is licensed as <i>all rights reserved</i>
		, meaning you are legally not allowed to use, copy, or distribute its code without explicit authorization from its creator,
		<a href="/profile/vi">@vi</a>
		.
	</p>

	<p style:color={theme().textDull}>
		You are freely allowed to contact <a href="/profile/vi">@vi</a>
		to ask for permission to use Wallflower's code for some specific circumstance.
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

		p {
			color: var(--overlay-1);
		}
	}

	h1 {
		color: var(--text);
	}

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.definition {
		padding-top: 1rem;
		color: var(--overlay-1);
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--surface-0);
		border-top: 1px solid var(--surface-0);
		padding-bottom: 1rem;

		span {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		h2 {
			color: var(--subtext-1);
		}

		.body {
			padding-top: 0.5rem;

			i {
				color: var(--surface-2);
			}
		}
	}
</style>
