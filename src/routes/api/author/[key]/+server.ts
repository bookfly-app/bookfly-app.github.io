import { getAuthor } from "../../../../api/authorapi.ts";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
	const { key } = params;
	const author = await getAuthor(key);
	return json(author);
}
