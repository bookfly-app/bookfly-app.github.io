import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
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
				where("books", "array-contains", isbn),
				orderBy("timestamp", "desc"),
			),
		)
	).docs.map(doc => doc.data()) as InternalPost[];

	return await Promise.all(posts.map(post => internalPostToPost(post)));
}

export async function getBook(isbn: ISBN): Promise<Book> {
	const item = localStorage.getItem(`book-${isbn}`);
	if (item) return JSON.parse(item);

	let [response, second] = await Promise.all([
		fetch(`https://openlibrary.org/isbn/${isbn}.json`),
		fetch(`https://openlibrary.org/search.json?isbn=${isbn}`),
	]);
	let [data, secondData] = await Promise.all([response.json(), await second.json()]);

	const book: Book = {
		title: data.title,
		authors: Array.from(new Set(secondData.docs[0].author_name)),
		isbn,
		cover: `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`,
		pageCount: data.number_of_pages,
		genres: data.subjects?.map((subject: { name: string }) => subject.name) ?? [],
		description: data.description ?? "",
	};

	localStorage.setItem(`book-${isbn}`, JSON.stringify(book));

	return book;
}

export async function searchBooks(searchTerm: string, max = 10): Promise<Book[]> {
	if (/^\d{13}$/.test(searchTerm)) getBook(searchTerm).then(book => [book]);

	const query = new URLSearchParams({ q: searchTerm });
	let response = await fetch(`https://openlibrary.org/search.json?${query}&fields=isbn,editions`);
	const data = await response.json();
	console.log(data);
	let books = data.docs.filter((book: Book) => book.isbn).slice(0, max);
	return await Promise.all(
		books.map((book: any) => getBook(book.isbn.find((isbn: string) => /^\d{13}$/.test(isbn)))),
	);
}
