import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params, url }) => {
	let query = url.searchParams.get("q");
	return { searchTerm: query };
};
