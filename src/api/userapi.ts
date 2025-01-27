import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { getBook, type Book, type ISBN } from "./bookapi";
import { internalPostToPost, type InternalPost, type Post } from "./postapi";

export type UserId = string;

export type InternalUser = {
	// Internal

	username: string;
	email: string;
	id: string;

	// Profile

	displayName: string;
	banner: string;
	picture: string;
	bio: string;
	tags: string[];
	links: {}[];
	currentBook: string | null;

	readingList: ISBN[];

	// Interactions

	likes: string[];

	followers: UserId[];
	following: UserId[];
};

export type User = {
	// Internal

	username: string;
	email: string;
	id: string;

	// Profile

	displayName: string;
	banner: string;
	picture: string;
	bio: string;
	tags: string[];
	links: {}[];
	currentBook: string | null;

	readingList: ISBN[];

	// Interactions

	likes: string[];

	followers: UserId[];
	following: UserId[];
};

let { db } = initializeFirebase();

/**
 * Returns a user's "favorite book" which is defined as the book that
 * they have rated the highest. if the user has not rated any books, this
 * returns `null`. If the user has rated at least one book, this is guaranteed
 * to return a non-null value.
 *
 * # Parameters
 *
 * - `user` - The user to get the highest rated book of
 *
 * # Returns
 *
 * The highest rated book from the given user, or `null` if the user hasn't
 * rated any books.
 */
export async function getFavoriteBook(user: User): Promise<Book | null> {
	let posts = (await getDocs(query(collection(db, "posts"), where("poster", "==", user.id), where("type", "==", "rating")))).docs.map((doc) =>
		doc.data()
	) as Post[];
	let books = posts.toSorted((a, b) => b.rating! - a.rating!).map((post) => post.books[0]);
	return books.length > 0 ? await getBook(books[0] as unknown as string) : null;
}

/**
 * Returns the `User` object associated with the given `UserId`. The id is an
 * underlying internal persistent string generated by Firebase, not a human-readable
 * string. To get a user by their username (@), use `getUserFromUsername()`
 *
 * @param id The id of the user to get
 *
 * @returns The user with the given id
 */
export async function getUserFromId(id: UserId): Promise<User> {
	let internalUser = (await getDocs(query(collection(db, "users"), where("id", "==", id)))).docs[0].data() as InternalUser;
	return internalUser;
}

export async function internalUserToUser(user: InternalUser): Promise<User> {
	return user;
}

export async function getUserFromUsername(username: string): Promise<User> {
	let user = (await getDocs(query(collection(db, "users"), where("username", "==", username)))).docs[0].data() as InternalUser;
	return user;
}

export async function getNumberOfBooksRead(user: User): Promise<number> {
	return (await getDocs(query(collection(db, "posts"), where("poster", "==", user.id), where("type", "==", "rating")))).docs.length;
}

export async function getUserPosts(user: User): Promise<Post[]> {
	let internalPosts = (await getDocs(query(collection(db, "posts"), where("poster", "==", user.id), orderBy("timestamp", "desc")))).docs.map(
		(doc) => doc.data()
	) as InternalPost[];

	let posts = await Promise.all(internalPosts.map(async (post) => internalPostToPost(post)));
	return posts;
}

export async function searchUsers(searchTerm: string): Promise<User[]> {
	let users = (await getDocs(query(collection(db, "users")))).docs
		.map((doc) => doc.data())
		.filter((user) => user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.displayName.includes(searchTerm.toLowerCase()));
	return users as User[];
}
