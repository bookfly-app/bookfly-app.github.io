import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import initializeFirebase from "../backend/backend";
import { collection, doc } from "firebase/firestore";
import { user } from "../backend/auth.svelte";

const db = initializeFirebase().db;
const storage = initializeFirebase().storage;

export async function uploadFile(
	data: File | Blob,
	type: "standard" | "profile picture" = "standard",
): Promise<string> {
	let id: string;

	if (type === "profile picture") {
		id = `${user()!.id}_profile_picture`;
	} else {
		id = doc(collection(db, "__temp__")).id;
	}

	await uploadBytes(ref(storage, id), data);
	return id;
}

export async function getFile(id: string): Promise<string | null> {
	try {
		return await getDownloadURL(ref(storage, id));
	} catch (error) {
		console.error(error);
		return null;
	}
}
