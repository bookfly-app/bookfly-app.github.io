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
	query,
	setDoc,
	where,
} from "firebase/firestore";
import {
	internalUserToUser,
	type InternalUser,
	type User,
} from "../api/userapi";
import initializeFirebase from "./backend";

let { db } = initializeFirebase();
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

let currentUser: User | null = $state(null);

export function getUser(): User | null {
	return currentUser;
}

onAuthStateChanged(auth, async (user) => {
	// Logged in
	if (user) {
		currentUser = await internalUserToUser(
			(
				await getDocs(
					query(collection(db, "users"), where("id", "==", user.uid))
				)
			).docs[0].data() as InternalUser
		);
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
	let user = { ...currentUser!, ...userInfo };
	await setDoc(doc(db, "users", user.id), user);
}

export async function updateOtherUser(user: User, userInfo: Partial<User>) {
	let newUser = { ...user, ...userInfo };
	await setDoc(doc(db, "users", newUser.id), newUser);
}

export async function signUp(
	email: string,
	password: string,
	username: string
): Promise<unknown | null> {
	try {
		let userInfo = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		let user: User = {
			displayName: username,
			email,
			username,
			picture:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s",
			bio: "",
			likes: [],
			id: userInfo.user.uid,
			banner: "https://i0.wp.com/www.lifecaretechnology.com/wp-content/uploads/2018/12/default-banner.jpg?ssl=1",
			tags: [],
			links: [],
			currentBook: null,
			readingList: [],
			following: [],
			followers: [],
		};
		await setDoc(doc(db, "users", user.id), user);
		return null;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function logIn(
	email: string,
	password: string
): Promise<unknown | null> {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return null;
	} catch (error) {
		console.log(error);
		return error;
	}
}
