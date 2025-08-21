import {
	browserLocalPersistence,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { getPreference, internalUserToUser, resolveUser, type User } from "../api/userapi";
import initializeFirebase from "./backend";
import type { InternalPost } from "../api/postapi";

let { db } = initializeFirebase();
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

let currentUser: User | null = $state(null);

export function user(): User | null {
	return currentUser;
}

/**
 * Returns a list of strings, each of which representing an error in the validity of the
 * given password, such as "Must contain at least 1 number". If the password is a valid
 * password, an empty list is returned.
 */
export function passwordErrors(password: string): string[] {
	if (password === "") return [];
	let errors = [];
	if (!/\d/.test(password)) errors.push("Must contain at least 1 number");
	if (!/[a-z]/.test(password)) errors.push("Must contain at least 1 lowercase letter");
	if (!/[A-Z]/.test(password)) errors.push("Must contain at least 1 uppercase letter");
	if (!/[\$_=\+\*!@#%\^&\|\\\/\(\)\[\]\{\}<>\?:;'"`~\-]/.test(password))
		errors.push("Must contain at least 1 symbol");
	if (password.length < 8) errors.push("Must be at least 8 characters");
	return errors;
}

export async function usernameIsTaken(username: string): Promise<boolean> {
	return (
		(await getDocs(query(collection(db, "users"), where("username", "==", username)))).docs
			.length > 0
	);
}

export async function emailIsTaken(email: string): Promise<boolean> {
	return (
		(await getDocs(query(collection(db, "users"), where("email", "==", email)))).docs.length > 0
	);
}

onAuthStateChanged(auth, async user => {
	// Logged in
	if (user) {
		currentUser = await internalUserToUser(
			(
				await getDocs(query(collection(db, "users"), where("id", "==", user.uid)))
			).docs[0].data() as User,
		);
		resolveUser(currentUser);
	}

	// logged out
	else {
	}
});

export async function logOut(): Promise<unknown | null> {
	try {
		await signOut(auth);
		return null;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function updateUser(userInfo: Partial<User>) {
	Object.entries(userInfo).forEach(([key, value]) => ((currentUser as any)[key] = value));
	await updateDoc(doc(db, "users", user()!.id), userInfo);
}

export async function signUp(
	email: string,
	password: string,
	username: string,
): Promise<unknown | null> {
	try {
		const darkMode = getPreference("darkMode");
		let userInfo = await createUserWithEmailAndPassword(auth, email, password);
		let user: User = {
			displayName: username,
			email,
			username,
			picture:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s",
			bio: "",
			pronouns: "",
			likes: [],
			id: userInfo.user.uid,
			banner: "https://i0.wp.com/www.lifecaretechnology.com/wp-content/uploads/2018/12/default-banner.jpg?ssl=1",
			tags: [],
			links: [],
			currentBook: null,
			readingList: [],
			following: [],
			darkMode,
			views: [],
			shares: [],
			birthmoment: Date.now(),
		};
		await setDoc(doc(db, "users", user.id), user);
		return null;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function logIn(email: string, password: string): Promise<unknown | null> {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return null;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function getUserReplies(user: User): Promise<InternalPost[]> {
	return (
		await getDocs(
			query(
				collection(db, "posts"),
				where("poster", "==", user.id),
				where("type", "==", "reply"),
				orderBy("timestamp", "desc"),
			),
		)
	).docs.map(doc => doc.data() as InternalPost);
}
