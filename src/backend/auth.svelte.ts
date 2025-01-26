import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import initializeFirebase from "./backend";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { getUserFromId, type User } from "../api/userapi";

let { db } = initializeFirebase();
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

let currentUser: User | null = $state(null);

export function getUser(): User | null {
	return currentUser;
}

onAuthStateChanged(auth, async user => {
	// Logged in
	if (user) {
		currentUser = (await getDocs(query(collection(db, "users"), where("id", "==", user.uid)))).docs[0].data() as User;
		currentUser.following = await Promise.all(currentUser.following.map(async id => await getUserFromId(id)));
		currentUser.followers = await Promise.all(currentUser.followers.map(async id => await getUserFromId(id)));
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
	let user = { ...currentUser!, ...userInfo, };
	await setDoc(doc(db, "users", user.id), user);
}

export async function updateOtherUser(user: User, userInfo: Partial<User>) {
	let newUser = { ...user, ...userInfo, };
	await setDoc(doc(db, "users", newUser.id), newUser);
}

export async function signUp(email: string, password: string, username: string): Promise<unknown | null> {
	try {
		let userInfo = await createUserWithEmailAndPassword(auth, email, password);
		let user: User = {
			displayName: username,
			email,
			username,
			picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s",
			bio: "",
			likes: [],
			id: userInfo.user.uid,
			banner: "https://i0.wp.com/www.lifecaretechnology.com/wp-content/uploads/2018/12/default-banner.jpg?ssl=1",
			tags: [],
			links: [],
			currentBook: null,
			readingList: [],
			following: [],
			followers: []
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
