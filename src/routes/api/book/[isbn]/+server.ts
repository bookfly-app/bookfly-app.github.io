import { getBook } from "../../../../api/bookapi.ts";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
	const { isbn } = params
	const book = await getBook(isbn);
	return json(book);
}
