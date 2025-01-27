import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getUser } from "../backend/auth.svelte";
import initializeFirebase from "../backend/backend";
import { getBook, type Book, type ISBN } from "./bookapi";
import { getUserFromId, type User, type UserId } from "./userapi";

export type PostType = "general" | "rating" | "update";
export type PostId = string;

export type InternalPost<T extends PostType = PostType> = {
	type: T;
	id: string;
	poster: UserId;
	body: string;
	timestamp: number;

	books: ISBN[];
	authors: string[];
	pictures: string[];

	// Stats

	views: UserId[];
	likes: UserId[];
	shares: UserId[];
	comments: PostId[];

	rating: T extends "rating" ? number : undefined;
	updateType: T extends "update" ? "start" : undefined;
};

export type Post<T extends PostType = PostType> = {
	type: T;
	id: string;
	poster: User;
	body: string;
	timestamp: number;

	books: Book[];
	authors: string[];
	pictures: string[];

	// Stats

	views: User[];
	likes: User[];
	shares: User[];
	comments: PostId[];

	rating: T extends "rating" ? number : undefined;
	updateType: T extends "update" ? "start" : undefined;
};

let { db } = initializeFirebase();

export async function post(post: Partial<InternalPost>) {
	let toPost: InternalPost = {
		type: "general",
		body: "",
		timestamp: Date.now(),
		poster: getUser()!.id,
		authors: [],
		books: [],
		views: [],
		likes: [],
		shares: [],
		comments: [],
		pictures: [],
		id: "",
		...post,
	} as InternalPost;

	let doc = await addDoc(collection(db, "posts"), toPost);
	updateDoc(doc, { id: doc.id });
}

export async function internalPostToPost(internalPost: InternalPost): Promise<Post> {
	return {
		...internalPost,
		poster: await getUserFromId(internalPost.poster),
		books: await Promise.all(internalPost.books.map(async (isbn) => getBook(isbn))),
		views: await Promise.all(internalPost.views.map(async (userId) => getUserFromId(userId))),
		likes: await Promise.all(internalPost.likes.map(async (userId) => getUserFromId(userId))),
		shares: await Promise.all(internalPost.shares.map(async (userId) => getUserFromId(userId))),
	};
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
	let internalPosts = (await getDocs(query(collection(db, "posts")))).docs.map((doc) => doc.data()) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async (post) => internalPostToPost(post)));
	return posts.filter((post) => post.body.toLowerCase().includes(searchTerm.toLowerCase()));
}

export async function getFollowedPosts(user: User): Promise<Post[]> {
	if (user.following.length === 0) return [];

	let internalPosts = (await getDocs(query(collection(db, "posts"), where("poster", "in", user.following)))).docs.map((doc) =>
		doc.data()
	) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async (post) => internalPostToPost(post)));
	return posts;
}

let linkRegex = /(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export function format(text: string): string {
	return text
		.replace(/@(\w+)/, (match, username) => `<a style="text-decoration: none;" href="/profile/${username}">${match}</a>`)
		.replace(/\*\*([^\*]+)\*\*/, (_match, content) => `<b>${content}</b>`)
		.replace(/\*([^\*]+)\*/, (_match, content) => `<i>${content}</i>`)
		.replace(/`([^\`]+)`/, (_match, code) => `<code>${code}</code>`)
		.replace(linkRegex, (match) => `<a href="${match}">${match}</a>`);
}
