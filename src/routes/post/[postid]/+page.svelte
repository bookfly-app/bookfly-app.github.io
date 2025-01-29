<script lang="ts">
	import { getPostFromId, getReplies, post, type Post, type PostId } from "../../../api/postapi";
	import SendIcon from "../../../assets/images/icons/SendIcon.svelte";
	import { user } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import Page from "../../../components/Page.svelte";
	import AnyPost from "../../../components/posts/AnyPost.svelte";
	import theme from "../../../themes/theme.svelte";

	let { data }: { data: { postid: PostId } } = $props();
	let { postid } = data;
	let thePost = getPostFromId(postid)!;

	let reply: HTMLTextAreaElement;

	let replyState: "contracted" | "expanded" = "contracted";

	let replies = $state(thePost.then(post => getReplies(post!)));
	let newReplies: Post[] = $state([]);

	function expand() {
		replyState = "expanded";
		reply.style.height = "8rem";
		reply.style.borderRadius = "1rem";
	}

	function contract() {
		replyState = "contracted";
		reply.style.height = "2.3rem";
		setTimeout(() => {
			if (replyState === "contracted") {
				reply.style.borderRadius = "100vmax";
			}
		}, 2000);
	}

	let replyBody = $state("");

	async function sendReply() {
		let body = replyBody;
		replyBody = "";
		let replyPost = await post({ body, type: "reply", parent: (await thePost)!.id });
		newReplies = [replyPost, ...newReplies];
	}
</script>

<Background />
<Page class="post">
	{#await thePost then post}
		<AnyPost post={post!} postpage />
		<div style:border-color={theme().textDark} class="reply">
			<a aria-label="Go to profile" href="/profile">
				<img alt="Your profile" src={user()?.picture} />
			</a>
			{#if user()}
				<textarea
					bind:this={reply}
					bind:value={replyBody}
					onfocus={expand}
					onblur={contract}
					style:color={theme().text}
					style:background={theme().backgroundDim}
					placeholder="Leave a reply"
				></textarea>
				<button title="Post" class="send" onmousedown={sendReply}>
					<SendIcon stroke={theme().textDull} style="width: 1.5rem;" />
				</button>
			{/if}
		</div>

		{#await replies then replies}
			{#each newReplies as newReply}
				<AnyPost post={newReply} />
			{/each}
			<div class="replies">
				{#each replies as reply}
					<AnyPost post={reply} />
				{/each}
			</div>
		{/await}
	{/await}
	<Footer selected="search" />
</Page>

<style>
	:global(.post) {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: calc(100% - 4rem);
	}

	textarea {
		resize: none;
		font-size: 0.85rem;
		padding: 0.5rem;
		width: 100%;
		transition: height 0.2s;
		height: 2.3rem;
		width: 80%;
		border-radius: 100vmax;
		display: flex;
		align-items: center;
		margin-top: 0.4rem;
	}

	.replies {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}

	.reply {
		display: flex;
		width: 100%;
		padding-left: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		gap: 1rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;

		a {
			border-radius: 50%;
			width: 3rem;
			height: 3rem;

			img {
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
			}
		}
	}

	.send {
		margin-top: auto;
		height: fit-content;
		position: relative;
		top: -0.5rem;
		left: -3rem;
	}
</style>
