import type { ISBN } from "../backend/backend";

export type Book = {
	authors: string[],
	isbn: ISBN,
	title: string,
	genres: string[],
	pageCount: number,
	cover: string,
	description: string,
};

export async function getBook(isbn: string): Promise<Book> {
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
		authors: data.authors.map((author: any) => author.name),
		isbn,
		cover: data.cover?.large ?? "",
		pageCount: data.number_of_pages,
		genres: data.subjects?.map((subject: { name: string }) => subject.name) ?? [],
		description: googleData?.volumeInfo.description ?? ""
	};
}
