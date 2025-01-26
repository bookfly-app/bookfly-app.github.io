import { collection, getDocs, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { getBook, type Book, type ISBN, type Post } from "./bookapi";

export type InternalUser = {

	// Internal

	username: string,
	email: string,
	id: string,

	// Profile

	displayName: string,
	banner: string,
	picture: string,
	bio: string,
	tags: string[],
	links: {}[]
	currentBook: string | null,

	readingList: ISBN[],

	// Interactions

	likes: string[],

	followers: string[],
	following: string[],
};

export type User = {

	// Internal

	username: string,
	email: string,
	id: string,

	// Profile

	displayName: string,
	banner: string,
	picture: string,
	bio: string,
	tags: string[],
	links: {}[]
	currentBook: string | null,

	readingList: ISBN[],

	// Interactions

	likes: string[],

	followers: User[],
	following: User[],
};

let { db } = initializeFirebase();

async function internalUserToUser(user: InternalUser): Promise<User> {
	return null!;
}

function userToInternalUser(user: User): InternalUser {
	return null!;
}

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
	let posts = (await getDocs(
		query(
			collection(db, "posts"),
			where("poster", "==", user.id),
			where("type", "==", "rating")
		)
	)).docs.map(doc => doc.data()) as Post[];
	let books = posts.toSorted((a, b) => b.rating! - a.rating!).map(post => post.books[0]);
	return books.length > 0 ? await getBook(books[0] as unknown as string) : null;
}

export async function getUserFromId(id: string): Promise<User> {
	return (await getDocs(
		query(
			collection(db, "users"),
			where("id", "==", id)
		)
	)).docs[0].data() as User;
}

export async function getUserFromUsername(username: string): Promise<User> {
	let user = (await getDocs(
		query(
			collection(db, "users"),
			where("username", "==", username)
		)
	)).docs[0].data() as User;
	user.following = await Promise.all(user.following.map(async id => await getUserFromId(id)));
	user.followers = await Promise.all(user.followers.map(async id => await getUserFromId(id)));
	return user;
}

export async function getNumberOfBooksRead(user: User): Promise<number> {
	return (await getDocs(
		query(
			collection(db, "posts"),
			where("poster", "==", user.id),
			where("type", "==", "rating")
		)
	)).docs.length;
}

export async function getUserPosts(user: User): Promise<Post[]> {
	let posts = (await getDocs(
		query(
			collection(db, "posts"),
			where("poster", "==", user.id)
		)
	)).docs.map(doc => doc.data()) as Post[];

	posts = await Promise.all(posts.map(async post => {
		post.poster = await getUserFromId(post.poster as unknown as string);
		post.books = await Promise.all(post.books.map(async isbn => await getBook(isbn as unknown as string)));
		return post;
	}));

	return posts;
}

export async function searchUsers(searchTerm: string): Promise<User[]> {
	let users = (await getDocs(query(collection(db, "users"))))
		.docs
		.map(doc => doc.data())
		.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.displayName.includes(searchTerm.toLowerCase()));
	return users as User[];
}
