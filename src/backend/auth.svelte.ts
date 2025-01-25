import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, } from "firebase/auth";
import initializeFirebase, { type Post, type User } from "./backend";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

let { db } = initializeFirebase();
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

let currentUser: User | null = $state(null);

export function getUser(): User | null {
	return currentUser;
}

onAuthStateChanged(auth, async user => {
	if (user) {
		const querySnapshot = await getDocs(collection(db, "users"));
		const users: User[] = [];
		querySnapshot.forEach(user_ => {
			users.push(user_.data() as User);
		});
		let theUser = users.find(user_ => user_.id == user.uid)!;
		theUser.posts = await Promise.all(theUser.posts.map(async post => {
			let userPost = (await getDoc(doc(db, "posts", post as unknown as string))).data() as Post;
			userPost.author = theUser!;
			return userPost;
		}));
		currentUser = theUser;
		console.log(currentUser);
	} else {
		console.log("logged out");
	}
});

export async function updateUser(userInfo: Partial<User>) {
	let user = { ...currentUser!, ...userInfo, };
	user.posts = user.posts.map(post => post.id) as unknown as Post[];
	await setDoc(doc(db, "users", user.username), user);
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
			posts: [],
			id: userInfo.user.uid,
			banner: "https://i0.wp.com/www.lifecaretechnology.com/wp-content/uploads/2018/12/default-banner.jpg?ssl=1",
			tags: [],
			links: []
		};
		await setDoc(doc(db, "users", username), user);
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

export async function getUserByUsername(username: string): Promise<User> {
	let user = (await getDoc(doc(db, "users", username))).data() as User;

	user.posts = await Promise.all(user.posts.map(async post => {
		let userPost = (await getDoc(doc(db, "posts", post as unknown as string))).data() as Post;
		userPost.author = user!;
		return userPost;
	}));

	return user;
}
