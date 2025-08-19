<script lang="ts">
	import { getPostFromId, getReplies, post, type Post, type PostId } from "../../../api/postapi";
	import { getFile } from "../../../api/storageapi";
	import AddImageIcon from "../../../assets/images/icons/AddImageIcon.svelte";
	import SendIcon from "../../../assets/images/icons/SendIcon.svelte";
	import { user } from "../../../backend/auth.svelte";
	import Background from "../../../components/Background.svelte";
	import Footer from "../../../components/Footer.svelte";
	import ImageCarousel from "../../../components/ImageCarousel.svelte";
	import ImagePicker from "../../../components/ImagePicker.svelte";
	import Page from "../../../components/Page.svelte";
	import AnyPost from "../../../components/posts/AnyPost.svelte";
	import theme from "../../../themes/theme.svelte";

	let { data }: { data: { postid: PostId } } = $props();
	let postid = $derived(data.postid);
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
	let images: string[] = $state([]);

	async function sendReply() {
		let body = replyBody;
		replyBody = "";
		let replyPost = await post({
			body,
			type: "reply",
			parent: (await thePost)!.id,
			...(imageAttachment && { pictures: images }),
		});
		newReplies = [replyPost, ...newReplies];
		imageAttachment = null;
	}
</script>

<Page type="search" class="post">
	{#await thePost then post}
		<AnyPost post={post!} postpage />

		{#if user()}
			<div style:padding-bottom={imageAttachment === null ? "0.5rem" : "2.5rem"} style:border-color={theme().textDark} class="reply">
				<a aria-label="Go to profile" href="/profile">
					{#await getFile(user()!.picture) then pfp}
						<img alt="Your profile" src={pfp} />
					{/await}
				</a>

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

					<ImageCarousel {images} />

					<div style:bottom={imageAttachment === null ? "1.4rem" : "-2rem"} title="Post" class="send">
						<label for="attach-image-reply">
							<AddImageIcon stroke={theme().textDull} style="width: 1.5rem;" />
						</label>
						<ImagePicker id="attach-image-reply" onupload={imageId => images.push(imageId)} />

						<button onmousedown={sendReply}>
							<SendIcon stroke={theme().textDull} style="width: 1.5rem;" />
						</button>
					</div>
				</div>
			</div>
		{/if}

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
	}
</style>
