import { collection, getDocs, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { getUserFromId, type User, type UserId } from "./userapi";
import { getBook, type Book, type ISBN } from "./bookapi";

export type PostType = "general" | "rating" | "update";
export type PostId = string;

export type InternalPost<T extends PostType = PostType> = {
	type: T,
	id: string,
	poster: UserId,
	body: string,
	timestamp: number,

	books: ISBN[],
	authors: string[],
	pictures: string[],

	// Stats

	views: UserId[],
	likes: UserId[],
	shares: UserId[],
	comments: PostId[]

	rating: T extends "rating" ? number : undefined,
	updateType: T extends "update" ? "start" : undefined,
};

export type Post<T extends PostType = PostType> = {
	type: T,
	id: string,
	poster: User,
	body: string,
	timestamp: number,

	books: Book[],
	authors: string[],
	pictures: string[],

	// Stats

	views: User[],
	likes: User[],
	shares: User[],
	comments: PostId[],

	rating: T extends "rating" ? number : undefined,
	updateType: T extends "update" ? "start" : undefined,
};

let { db } = initializeFirebase();

export async function internalPostToPost(internalPost: InternalPost): Promise<Post> {
	return {
		...internalPost,
		poster: await getUserFromId(internalPost.poster),
		books: await Promise.all(internalPost.books.map(async isbn => await getBook(isbn))),
		views: await Promise.all(internalPost.views.map(async userId => await getUserFromId(userId))),
		likes: await Promise.all(internalPost.likes.map(async userId => await getUserFromId(userId))),
		shares: await Promise.all(internalPost.shares.map(async userId => await getUserFromId(userId))),
	};
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
	let internalPosts = (await getDocs(
		query(
			collection(db, "posts"),
		)
	)).docs.map(doc => doc.data()) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async post => await internalPostToPost(post)));
	return posts.filter(post => post.body.toLowerCase().includes(searchTerm.toLowerCase()));
}

export async function getFollowedPosts(user: User): Promise<Post[]> {
	if (user.following.length === 0) return [];

	let internalPosts = (await getDocs(
		query(
			collection(db, "posts"),
			where("poster", "in", user.following)
		)
	)).docs.map(doc => doc.data()) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async post => await internalPostToPost(post)));
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
