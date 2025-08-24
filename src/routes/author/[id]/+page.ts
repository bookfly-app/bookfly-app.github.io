import { getAuthor } from "../../../api/authorapi";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	return { author: await getAuthor(params.id) };
};
