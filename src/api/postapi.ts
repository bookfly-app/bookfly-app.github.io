import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { updateUser, user } from "../backend/auth.svelte";
import initializeFirebase from "../backend/backend";
import { getBook, type Book, type ISBN } from "./bookapi";
import { getUserFromId, type InternalUser, type User, type UserId } from "./userapi";

export type PostType = "general" | "rating" | "update" | "reply";

/**
 * A `PostId` is just an alias for `string`; The type exists to convey the semantic meaning
 * that the given string specifically represents the unique ID of a post. See the documentation
 * for `Post.id` for more information.
 */
export type PostId = string;

/**
 * A `Post` as it's internally stored in the Firebase database. This type usually won't
 * be used directly; Usually you'll use `Post`, which provides a slightly easier to use
 * API. When fetching a post from Firebase, you can convert the resulting `InternalPost`
 * data into a `Post` using `internalPostToPost()`.
 *
 * To compare `InternalPosts`, check if their `id` fields match, i.e.:
 *
 * ```ts
 * if (post1.id === post2.id) {
 *     // ...
 * }
 * ```
 */
export type InternalPost<T extends PostType = PostType> = {
	type: T;

	/**
	 * The unique ID of this post. All posts have a unique ID generated by Firebase at their
	 * time of creation. It's a non-human-readable string that can be used to uniquely identify
	 * this post and compare it for referential equality with other post objects.
	 */
	id: PostId;

	/**
	 * The ID of the user that posted this post.
	 */
	poster: UserId;

	/**
	 * The body of the post, as a raw string. This string is not automatically sanitized; It's
	 * the raw data string that the user typed into the body of their post. Generally this will
	 * be rendered using `format()`, which renders things like bold and italic text.
	 */
	body: string;

	/**
	 * The time this post was uploaded in epoch milliseconds. This is always set to `Date.now()`
	 * when a post is uploaded.
	 */
	timestamp: number;

	/**
	 * The books referenced by the current post, stored as a list of ISBN-13's. More data
	 * about each book can be retrieved with `getBookFromISBN()`.
	 */
	books: ISBN[];

	authors: string[];

	pictures: string[];

	rating: T extends "rating" ? number : never;
	updateType: T extends "update" ? "start" : never;
	parent: T extends "reply" ? PostId : never;
};

export type Post<T extends PostType = PostType> = {
	type: T;

	/**
	 * The ID of the user that posted this post.
	 */
	id: PostId;

	/**
	 * The user that posted this post.
	 */
	poster: User;

	/**
	 * The body of the post, as a raw string. This string is not automatically sanitized; It's
	 * the raw data string that the user typed into the body of their post. Generally this will
	 * be rendered using `format()`, which renders things like bold and italic text.
	 */
	body: string;

	/**
	 * The time this post was uploaded in epoch milliseconds. This is always set to `Date.now()`
	 * when a post is uploaded.
	 */
	timestamp: number;

	/**
	 * The books referenced by the current post, stored as a list of ISBN-13's. More data
	 * about each book can be retrieved with `getBookFromISBN()`.
	 */
	books: Book[];

	authors: string[];
	pictures: string[];

	/**
	 * The rating of the book being reviewed, as a number in [0, 10].
	 *
	 * This field is only present for posts of type `rating`, see the documentation for
	 * `post.type` and `PostType` for more information.
	 */
	rating: T extends "rating" ? number : never;

	updateType: T extends "update" ? "start" : never;

	parent: T extends "reply" ? PostId : never;
};

let { db } = initializeFirebase();

/**
 * Uploads a post to the server. Fields not provided, like `timestamp` and `poster`,
 * are filled in automatically with their default values. The created post object is
 * returned after it's been uploaded and has been assigned a unique `ID`.
 *
 * @param post The post data to post.
 *
 * @returns The created post object.
 */
export async function post(post: Partial<Omit<InternalPost, "id">> & { body: string; type: PostType }): Promise<Post> {
	let toPost: InternalPost = {
		timestamp: Date.now(),
		poster: user()!.id,
		authors: [],
		books: [],
		views: [],
		likes: [],
		shares: [],
		pictures: [],
		id: "",
		...post,
	} as InternalPost;

	let doc = await addDoc(collection(db, "posts"), toPost);
	updateDoc(doc, { id: doc.id });
	return internalPostToPost({ ...toPost, id: doc.id });
}

/**
 * Deletes a post from the database. The posts are compared by `id`, meaning any post that matches
 * the given post's `id` will be deleted, regardless of if the post's contents match.
 *
 * This will *not* update anything on the UI; If you want to hide a post after it's deleted without
 * refreshing the page, that requires its own handling in the UI.
 *
 * @param post The post to delete.
 *
 * @returns A promise that resolves when the database has deleted the post.
 */
export async function deletePost(post: Post): Promise<void> {
	await deleteDoc(doc(db, "posts", post.id));
}

/**
 * Converts an `InternalPost` object to a `Post` object. `InternalPosts` are how posts are
 * stored internally in the database, and `Post` objects are a wrapper around them with an easier API
 * to use.
 *
 * @param internalPost The internal post object to convert
 *
 * @returns A promise that, when resolved, returns the `Post` object representing the `InternalPost`.
 */
export async function internalPostToPost(internalPost: InternalPost): Promise<Post> {
	let post: Post = {
		...internalPost,
		poster: await getUserFromId(internalPost.poster),
		books: await Promise.all(internalPost.books.map(async isbn => getBook(isbn))),
	};

	if (user() && !user()!.views.includes(post.id)) {
		updateUser({ views: [...user()!.views, post.id] });
	}

	return post;
}

/**
 * Returns a `Post` object from it's unique `id`. If no such post exists with the given `id`,
 * `null` is returned.
 *
 * @param postid The `id` of the post to get.
 *
 * @returns a promise that, when resolved, returns the `Post` object associated with the given `id`,
 * or `null` if no such post exists.
 */
export async function getPostFromId(postid: PostId): Promise<Post | null> {
	try {
		return internalPostToPost((await getDoc(doc(db, "posts", postid))).data() as InternalPost);
	} catch (e) {
		return null;
	}
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
	let internalPosts = (await getDocs(query(collection(db, "posts")))).docs.map(doc => doc.data()) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async post => internalPostToPost(post)));
	return posts.filter(post => post.body.toLowerCase().includes(searchTerm.toLowerCase()));
}

export async function getFollowedPosts(user: User): Promise<Post[]> {
	if (user.following.length === 0) return [];

	let internalPosts = (await getDocs(query(collection(db, "posts"), where("poster", "in", user.following)))).docs.map(doc =>
		doc.data()
	) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async post => internalPostToPost(post)));
	return posts;
}

export async function getReplies(post: Post): Promise<Post[]> {
	return Promise.all(
		(await getDocs(query(collection(db, "posts"), where("parent", "==", post.id)))).docs.map(doc =>
			internalPostToPost(doc.data() as InternalPost)
		)
	);
}

export async function getLikes(post: Post): Promise<InternalUser[]> {
	return (await getDocs(query(collection(db, "users"), where("likes", "array-contains", post.id)))).docs.map(doc => doc.data() as InternalUser);
}

export async function getShares(post: Post): Promise<InternalUser[]> {
	return (await getDocs(query(collection(db, "users"), where("shares", "array-contains", post.id)))).docs.map(doc => doc.data() as InternalUser);
}

/**
 * A regular expression matching (most) links. This is a modified version of the expression
 * provided [here](https://stackoverflow.com/a/3809435), with some minor tweaks to fix some
 * issues that were occurring. This is *not* perfect and isn't guaranteed to always provide
 * accurate results.
 *
 * This is used in `format()` to detect links.
 */
let linkRegex = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

/**
 * Formats the given text into an HTML string that's styled for things like **bold**, *italic*,
 * links, and other common markdown formatting. The text is automatically sanitized, meaning it's
 * safe to be injected as raw HTML text content, probably using Svelte's `{@html ... }` tag.
 *
 * @param text the text to format
 *
 * @returns The formatted string as a raw string of HTML code, that can be inserted using
 * Svelte's `@html` tag.
 */
export function format(text: string): string {
	return text
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#x27;")
		.replaceAll(/@(\w+)/g, (match, username) => `<a style="text-decoration: none;" href="/profile/${username}">${match}</a>`)
		.replaceAll(/\*\*([^\*]+)\*\*/g, (_match, content) => `<b>${content}</b>`)
		.replaceAll(/\*([^\*]+)\*/g, (_match, content) => `<i>${content}</i>`)
		.replaceAll(/`([^\`]+)`/g, (_match, code) => `<code>${code}</code>`)
		.replaceAll(/~~([^~]+)~~/g, (_match, code) => `<s>${code}</s>`)
		.replaceAll(linkRegex, match => `<a target="_blank" rel="noopener noreferrer" href="${match}">${match}</a>`)
		.replaceAll(/\\\*/g, "*")
		.replaceAll(/\\`/g, "`")
		.replaceAll("`", "&#x60;");
}

/**
 * Returns the number of views that the given post has, including the current user.
 * This can be safely called even if there is no user logged in.
 *
 * @param post The post to get the view count of
 *
 * @returns A promise that resolves when the view count is finished being fetched from
 * the database and calculated, returning the total number of views.
 */
export async function getPostViews(post: Post): Promise<number> {
	let storedViews = (await getDocs(query(collection(db, "users"), where("views", "array-contains", post.id)))).docs;
	let stored = storedViews.length;
	if (!user() || !storedViews.map(user => user.id).includes(user()!.id)) {
		stored += 1;
	}
	return stored;
}

/**
 * Likes the given post with the current user.
 *
 * This will throw an error if there is no current user, i.e., if the person is not
 * currently signed in or the user hasn't loaded yet; Take care to check the value of
 * `user()` for `null` first.
 *
 * This can be safely called even if the user has already liked the given post. It will just
 * do nothing.
 *
 * @param post The post to unlike
 *
 * @returns A promise that resolves when the database is updated with the post like.
 */
export async function likePost(post: Post): Promise<void> {
	await updateDoc(doc(collection(db, "users"), user()!.id), { likes: [...new Set([...user()!.likes, post.id])] });
}

export async function sharePost(post: Post): Promise<void> {
	await updateDoc(doc(collection(db, "users"), user()!.id), { shares: [...new Set([...user()!.shares, post.id])] });
}

/**
 * Unlikes the given post with the current user.
 *
 * This will throw an error if there is no current user, i.e., if the person is not
 * currently signed in or the user hasn't loaded yet; Take care to check the value of
 * `user()` for `null` first.
 *
 * This can be safely called even if the user hasn't liked the given post. It will just
 * do nothing.
 *
 * @param post The post to unlike
 *
 * @returns A promise that resolves when the database is updated with the post like.
 */
export async function unlikePost(post: Post): Promise<void> {
	await updateDoc(doc(collection(db, "users"), user()!.id), { likes: user()!.likes.filter(id => id !== post.id) });
}

/**
 * Returns whether the current user liked the given post.
 *
 * This will throw an error if there is no current user, i.e., if the person is not
 * currently signed in or the user hasn't loaded yet; Take care to check the value of
 * `user()` for `null` first.
 *
 * @param post The post to check if the user liked
 *
 * @returns A promise that, when resolved, returns whether or not the current user liked
 * the given post.
 */
export async function didLike(post: Post): Promise<boolean> {
	return user()!.likes.includes(post.id);
}

export async function didShare(post: Post): Promise<boolean> {
	return user()!.shares.includes(post.id);
}

/**
 * Returns whether the current user replied to the given post. This will throw an error
 * if there is no current user, i.e., if the person is not currently signed in or the user
 * hasn't loaded yet; Take care to check the value of `user()` for `null` first.
 *
 * @param post The post to check if the user replied to
 *
 * @returns A promise that, when resolved, returns whether or not the current user replied
 * to the given post.
 */
export async function didComment(post: Post): Promise<boolean> {
	return (await getDocs(query(collection(db, "posts"), where("parent", "==", post.id), where("poster", "==", user()!.id)))).docs.length > 0;
}
