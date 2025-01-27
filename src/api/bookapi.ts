import { collection, getDocs, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { internalPostToPost, type InternalPost, type Post } from "./postapi";

export type ISBN = string;

export type Book = {
	authors: string[];
	isbn: ISBN;
	title: string;
	genres: string[];
	pageCount: number;
	cover: string;
	description: string;
};

let { db } = initializeFirebase();

export async function getBookDiscussions(isbn: ISBN): Promise<Post[]> {
	let posts = (
		await getDocs(
			query(
				collection(db, "posts"),
				where("books", "array-contains", isbn)
			)
		)
	).docs.map((doc) => doc.data()) as InternalPost[];

	return await Promise.all(posts.map((post) => internalPostToPost(post)));
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
		genres:
			data.subjects?.map((subject: { name: string }) => subject.name) ??
			[],
		description: googleData?.volumeInfo.description ?? "",
	};
}

export async function searchBooks(searchTerm: string): Promise<Book[]> {
	let response = await fetch(
		`https://openlibrary.org/search.json?q=${searchTerm}`
	);
	let books = (await response.json()).docs.filter(
		(book: { title: string; isbn?: unknown[] }) =>
			book.title.toLowerCase().includes(searchTerm.replace("+", " ")) &&
			book.isbn
	);
	return (
		await Promise.all(books.map((book: Book) => getBook(book.isbn[0])))
	).filter((book) => book.cover);
}
