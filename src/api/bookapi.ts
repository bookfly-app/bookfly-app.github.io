import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { internalPostToPost, type InternalPost, type Post } from "./postapi";

export type ISBN = string;

export type Book = {
	backupCover: string;
	authors: string[];
	isbn: ISBN;
	title: string;
	genres: string[];
	pageCount: number;
	cover: string;
	description: string;
	publishers: string[];
	publishDate: string;
	characters: string[];
};

let { db } = initializeFirebase();

export async function getBookDiscussions(isbn: ISBN): Promise<InternalPost[]> {
	let posts = (
		await getDocs(
			query(
				collection(db, "posts"),
				where("books", "array-contains", isbn),
				orderBy("timestamp", "desc"),
			),
		)
	).docs.map(doc => doc.data()) as InternalPost[];

	return posts;
}

export async function getBookRating(isbn: ISBN): Promise<{ rating: number; count: number }> {
	let posts = (
		await getDocs(
			query(
				collection(db, "posts"),
				where("books", "array-contains", isbn),
				where("type", "==", "rating"),
			),
		)
	).docs.map(doc => doc.data().rating);

	return {
		rating:
			posts.reduce((accumulator, current) => accumulator + current, 0) / (posts.length || 1),
		count: posts.length,
	};
}

export async function getBook(isbn: ISBN): Promise<Book> {
	const item = localStorage.getItem(`book-${isbn}`);
	if (item) return JSON.parse(item);

	let [openLibraryResponse, googleResponse] = await Promise.all([
		fetch(`https://openlibrary.org/isbn/${isbn}.json`),
		fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`),
	]);
	let [openLibraryData, googleData] = await Promise.all([
		openLibraryResponse.json(),
		googleResponse.json(),
	]);

	const work = openLibraryData.works[0].key;
	const workResponse = await fetch(`https://openlibrary.org${work}.json`);
	const workData = await workResponse.json();

	googleData = googleData.items?.[0].volumeInfo;

	const book: Book = {
		title: openLibraryData.title,
		authors: Array.from(new Set(googleData?.authors ?? [])),
		isbn,
		cover: workData.covers?.[0]
			? `https://covers.openlibrary.org/b/id/${workData.covers[0]}-L.jpg`
			: `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`,
		backupCover: googleData?.imageLinks?.thumbnail,
		pageCount: openLibraryData.number_of_pages,
		genres: workData.subjects ?? [],
		description: googleData?.description ?? workData.description ?? "",
		publishers: openLibraryData.publishers,
		publishDate: openLibraryData.publish_date,
		characters: workData.subject_people ?? [],
	};

	localStorage.setItem(`book-${isbn}`, JSON.stringify(book));
	console.log(`Updated book "${book.title}" in localStorage`);

	return book;
}

export async function searchBooks(searchTerm: string, max = 10): Promise<Promise<Book>[]> {
	if (/^\d{3}\-?\d{10}$/.test(searchTerm)) getBook(searchTerm).then(book => [book]);

	const query = new URLSearchParams({ q: searchTerm });
	let response = await fetch(`https://openlibrary.org/search.json?${query}&fields=isbn,editions`);
	const data = await response.json();
	let books: { isbn: string[] }[] = data.docs.filter((book: Book) => book.isbn).slice(0, max);
	return books.map(book => getBook(book.isbn.find(isbn => /^\d{13}$/.test(isbn))!));
}
