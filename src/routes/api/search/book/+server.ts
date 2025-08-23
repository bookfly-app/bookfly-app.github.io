import { searchBookISBNs } from "../../../../api/bookapi.ts";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
	const term = url.searchParams.get("term");
	const limit = url.searchParams.get("limit") ?? 10;
	const books = await searchBookISBNs(term, limit);
	return json({ results: books });
}
