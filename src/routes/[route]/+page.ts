import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }: { parent: () => Promise<{ route: string }> }) => {
	return await parent();
};
