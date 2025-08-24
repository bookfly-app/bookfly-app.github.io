export type Author = {
	name: string;
	birthday: string;
	id: string;
	books: string[];
	picture: string;
};

export async function searchAuthors(searchTerm: string, limit = 10): Promise<Promise<Author>[]> {
	const query = new URLSearchParams({ q: searchTerm, limit });
	const response = await fetch(`https://openlibrary.org/search/authors.json?${query}`);
	const data = await response.json();
	return data.docs.map((author: any) => getAuthor(author.key));
}

export async function getAuthor(key: string) {
	const item = globalThis.localStorage ? globalThis.localStorage.getItem(`author-${key}`) : null;
	if (item) return JSON.parse(item);

	const response = await fetch(`https://openlibrary.org/authors/${key}.json`);
	const authorData = await response.json();

	const booksResponse = await fetch(
		`https://openlibrary.org/query.json?type=/type/edition&authors=/authors/${key}&isbn_13=`,
	);
	const bookData = await booksResponse.json();
	const books = bookData.filter(book => book.isbn_13).map(book => book.isbn_13[0]);

	const author: Author = {
		id: key,
		name: authorData.name,
		birthday: authorData.birth_date,
		picture:
			authorData.photos && authorData.photos.length
				? `https://covers.openlibrary.org/a/id/${authorData.photos[0]}-L.jpg`
				: "",
		books,
	};

	if (globalThis.localStorage) {
		globalThis.localStorage.setItem(`author-${key}`, JSON.stringify(author));
		console.log(`Updated author "${author.name}" in localStorage`);
	}

	return author;
}
