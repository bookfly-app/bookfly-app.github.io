<script>
	import Wallflower from "../../assets/images/icons/Wallflower.svelte";
	import BackButton from "../../components/BackButton.svelte";
	import Footer from "../../components/Footer.svelte";
	import Page from "../../components/Page.svelte";
</script>

<Page class="about">
	<span class="heading">
		<BackButton style="position: absolute; left: 0px;" />
		<Wallflower stroke="var(--overlay-1)" style="width: 2rem; height: 2rem;" />
	</span>

	<div class="definition">
		<span>
			<h2 class="wallflower"><i>Wall&middot;flow&middot;er</i></h2>
			<span class="ipa" aria-label="US IPA">&#x2F;&#x2C8;w&#x0251;l;&#x02D0;fla&#x028A;.&#x0259;r&#x2F;</span>
		</span>
		<p class="body">
			<i>(noun)</i>
			A shy person who is frightened to involve themselves in 
			social activities and does not attract much interest or attention.
		</p>
	</div>

	<h2>About</h2>
	<p>
		Wallflower is a non-profit organization originally created by
		<a href="/profile/vi">@vi</a>
		as a passion project in college. The name <i>Wallflower</i> comes from 
		<a href="/profile/vi">@vi</a>'s favorite book 
		<a href="/book/9780671027346"><i>The Perks of Being a Wallflower</i></a>
		by Stephen Chbosky.
	</p>
	<p>
		Powered by volunteers, no one on the Wallflower team makes a cent off of the project. Wallflower is completely ad-free with zero in-app purchases,
		providing all features to all users.
	</p>

	<!-- Team & Values -->
	<h2>Team &amp; Values</h2>
	<p>
		Wallflower is still led by its original creator,
		<a href="/profile/vi">@vi</a>, 
		a nonbinary reader and writer. Wallflower will always support kindness, acceptance, diversity, equity, and inclusion.
	</p>
	<p>Currently, Wallflower has no other team members.</p>

	<!-- Moderation -->
	<h2>Moderation</h2>
	<p>
		The Wallflower team moderates content posted to Wallflower. Harmful and hateful content will be removed. Wallflower also may remove content that's
		off-topic&mdash;Posting repeatedly with no relation to books or writing may get your account flagged. Wallflower was designed to be a safe and cozy
		space for people to talk about and discover books. Nothing more, nothing less.
	</p>
	<p>
		Wallflower will never remove relevant constructive content based on opinion. Users are free to share as much dislike and distaste for books,
		writing styles, and author's specific works or styles. Do not attack authors themselves. Criticize the works, not the people.
	</p>
	<p>
		These moderation rules are loosely defined. Each situation will be handled by a case-by-case basis and judged by Wallflower's moderators, who are
		trusted to make educated judgements.
	</p>
	<p>
		If your account was suspended or banned and you feel it was wrongful, you can submit an appeal. Your content will be reviewed and a secondary,
		more thorough judgement will be passed to you.
	</p>
	<h2>Legal</h2>
	<p>Wallflower is open source, meaning anyone can view and contribute to its code
		(<a href="https://github.com/wallflower-app/wallflower-app.github.io">here</a>, if you're curious).
	</p>
	<p>
		Wallflower is licensed as <i>all rights reserved</i>, 
		meaning you are legally not allowed to use, copy, or distribute its code without explicit authorization from its creator,
		<a href="/profile/vi">@vi</a>.
	</p>

	<p>
		You are free to contact <a href="/profile/vi">@vi</a>
		to ask for permission to use Wallflower's code for some specific circumstance. I don't bite, I promise.
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

	.heading {
		display: flex;
		gap: 1rem;
		align-items: center;
		position: relative;
		justify-content: center;
	}

	.definition {
		margin-top: 0.5rem;
		padding-top: 1rem;
		color: var(--overlay-1);
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--overlay-1);
		border-top: 1px solid var(--overlay-1);
		padding-bottom: 1rem;

		span {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		h2, h2 > i {
			color: var(--subtext-1);
			font-family: "Garamond";
		}

		.body {
			padding-top: 0.5rem;

			i {
				color: var(--surface-2);
			}
		}
	}

	h2:not(.wallflower) {
		color: var(--subtext-1);
		margin-bottom: -0.5rem;
		margin-top: 0.5rem;
	}
</style>
