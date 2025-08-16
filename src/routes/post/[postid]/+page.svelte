<script lang="ts">
	import { getPostFromId, getReplies, post, type Post, type PostId } from "../../../api/postapi";
	import { serializeImage } from "../../../api/serializer";
	import AddImageIcon from "../../../assets/images/icons/AddImageIcon.svelte";
	import SendIcon from "../../../assets/images/icons/SendIcon.svelte";
	import { user } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import ImageCarousel from "../../../components/ImageCarousel.svelte";
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

	let imageAttachment: FileList | null = $state(null);
	let images = $derived(
		imageAttachment ? Promise.all(Array.from(imageAttachment).map(image => serializeImage(image as Blob))) : Promise.resolve([]),
	);

	async function sendReply() {
		let body = replyBody;
		replyBody = "";
		let replyPost = await post({
			body,
			type: "reply",
			parent: (await thePost)!.id,
			...(imageAttachment && { pictures: await images }),
		});
		newReplies = [replyPost, ...newReplies];
		imageAttachment = null;
	}
</script>

<Background />
<Page class="post">
	{#await thePost then post}
		<AnyPost post={post!} postpage />
		<div style:padding-bottom={imageAttachment === null ? "0rem" : "2.5rem"} style:border-color={theme().textDark} class="reply">
			<a aria-label="Go to profile" href="/profile">
				<img alt="Your profile" src={user()?.picture} />
			</a>

			{#if user()}
				<div class="reply-body">
					<textarea
						bind:this={reply}
						bind:value={replyBody}
						onfocus={expand}
						onblur={contract}
						style:color={theme().text}
						style:background={theme().backgroundDim}
						placeholder="Leave a reply"
					></textarea>

					{#await images then images}
						<ImageCarousel {images} />
					{/await}

					<div style:bottom={imageAttachment === null ? "1.4rem" : "-2rem"} title="Post" class="send">
						<label for="attach-image-reply">
							<AddImageIcon stroke={theme().textDull} style="width: 1.5rem;" />
						</label>
						<input multiple bind:files={imageAttachment} id="attach-image-reply" type="file" class="attach-image" />

						<button onmousedown={sendReply}>
							<SendIcon stroke={theme().textDull} style="width: 1.5rem;" />
						</button>
					</div>
				</div>
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
	label {
		cursor: pointer;
	}

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
		border-radius: 100vmax;
		display: flex;
		align-items: center;
		margin-top: 0.4rem;
		filter: brightness(90%);
	}

	.replies {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}

	.reply-body {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.reply {
		display: flex;
		width: 100%;
		padding: 1rem;
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
		display: flex;
		gap: 0.5rem;
		height: fit-content;
		position: absolute;
		right: 0.5rem;

		> * {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.attach-image {
			display: none;
		}
	}
</style>
