import { initializeApp, type FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import env from "../env.json";

let app: FirebaseApp;
let db: Firestore;

export default function initializeFirebase() {
	if (!app) {
		app = initializeApp(env.firebase);
		db = getFirestore(app);
	}
	return { app, db };
}
