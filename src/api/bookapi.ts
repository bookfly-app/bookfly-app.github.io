import { collection, getDocs, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { getUserFromId, type User } from "./userapi";

export type ISBN = string;

export type Book = {
	authors: string[],
	isbn: ISBN,
	title: string,
	genres: string[],
	pageCount: number,
	cover: string,
	description: string,
};

export type PostType = "general" | "rating" | "update";

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

	views: number,
	likes: number,
	shares: number,
	comments: number,
	reposts: number,

	rating: T extends "rating" ? number : undefined,
	updateType: T extends "update" ? "start" : undefined,
};

let { db } = initializeFirebase();

export async function getBookDiscussions(isbn: ISBN): Promise<Post[]> {
	let posts = (await getDocs(
		query(
			collection(db, "posts"),
			where("books", "array-contains", isbn)
		)
	)).docs.map(doc => doc.data()) as Post[];

	posts = await Promise.all(posts.map(async post => {
		post.poster = await getUserFromId(post.poster as unknown as string);
		post.books = await Promise.all(post.books.map(async isbn => await getBook(isbn as unknown as string)));
		return post;
	}));

	return posts;
}

export async function getBook(isbn: ISBN): Promise<Book> {
	let response = await fetch(
		`https://openlibrary.org/api/books?bibkeys=ISBN%3A${isbn}&format=json&jscmd=data`
	);

	let data = (await response.json())[`ISBN:${isbn}`];

	let googleResonse = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
	);
	let googleData = (await googleResonse.json())?.items?.[0];

	return {
		title: data.title,
		authors: data.authors?.map((author: any) => author.name) ?? [],
		isbn,
		cover: data.cover?.large ?? "",
		pageCount: data.number_of_pages,
		genres: data.subjects?.map((subject: { name: string }) => subject.name) ?? [],
		description: googleData?.volumeInfo.description ?? ""
	};
}

export async function searchBooks(searchTerm: string): Promise<Book[]> {
	let response = await fetch(
		`https://openlibrary.org/search.json?q=${searchTerm}`
	);
	let books = (await response.json()).docs.filter((book: { title: string }) => book.title.toLowerCase().includes(searchTerm.replace("+", " ")) && book.isbn);
	return (await Promise.all(books.map((book: Book) => getBook(book.isbn[0])))).filter(book => book.cover);
}
