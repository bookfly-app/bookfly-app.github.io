import { initializeApp, type FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import env from "../env.json";

let app: FirebaseApp;
let db: Firestore;

/**
 * Initializes the Firebase app if it's not already and returns the app and database.
 *
 * This is safe to call even if the app is already initialized; It won't be initialized
 * twice. This is the standard way to get a reference to the database.
 *
 * @returns A reference to the app and database.
 */
export default function initializeFirebase(): { app: FirebaseApp; db: Firestore } {
	if (!app) {
		app = initializeApp(env.firebase);
		db = getFirestore(app);
	}
	return { app, db };
}
