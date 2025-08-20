import initializeFirebase from "../backend/backend";
import { collection, getDocs, query } from "firebase/firestore";

export function levenshteinDistance(a: string, b: string): number {
	a = a.toLowerCase();
	b = b.toLowerCase();

	let insertionCost: number;
	let deletionCost: number;
	let substitutionCost: number;

	let dummy: number[];
	let aLength = a.length;
	let bLength = b.length;

	let v0: number[] = [];
	let v1: number[] = [];

	for (let i = 0; i <= bLength; i++) v0[i] = i;

	for (let i = 0; i < aLength; i++) {
		v1[0] = i + 1;

		for (let j = 0; j < bLength; j++) {
			deletionCost = v0[j + 1] + 1;
			insertionCost = v1[j] + 1;

			if (a.charAt(i) === b.charAt(j)) substitutionCost = v0[j];
			else substitutionCost = v0[j] + 1;

			v1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
		}

		dummy = v0;
		v0 = v1;
		v1 = dummy;
	}

	return v0[bLength];
}

export function distance(value: string, searchTerm: string) {
	value = value.toLowerCase();
	searchTerm = searchTerm.toLowerCase();
	if (value.startsWith(searchTerm)) return 0;
	return levenshteinDistance(value, searchTerm);
}

const { db } = initializeFirebase();

const defaultFuzzyQueryOptions = {
	limit: Infinity,
	sortingFunction: distance,
};

export async function fuzzyQuery<FieldName extends string, T extends { [F in FieldName]: string }>(
	searchTerm: string,
	fieldName: FieldName,
	collectionName: string,
	options: typeof defaultFuzzyQueryOptions = defaultFuzzyQueryOptions,
): Promise<T[]> {
	options = { ...defaultFuzzyQueryOptions, ...options };
	let values = (await getDocs(query(collection(db, collectionName)))).docs.map(doc =>
		doc.data(),
	) as T[];
	values.sort(
		(a, b) =>
			options.sortingFunction(a[fieldName], searchTerm) -
			options.sortingFunction(b[fieldName], searchTerm),
	);

	if (values.length > options.limit) {
		values = values.slice(0, options.limit);
	}

	return values;
}
