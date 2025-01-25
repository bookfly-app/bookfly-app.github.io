import { initializeApp, type FirebaseApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from "firebase/firestore";
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

export type Post = {
	author: User,
	body: string,
	views: number,
	likes: number,
	comments: number,
	reposts: number
	shares: number,
	id: string
};

export async function getPosts(): Promise<Post[]> {
	const querySnapshot = await getDocs(collection(db, "posts"));
	const posts: Post[] = [];
	querySnapshot.forEach(async post => {
		let postObject = post.data() as Post;
		postObject.id = post.id;
		posts.push(postObject);
	});
	return await Promise.all(posts.map(async post => {
		post.author = await getUser(post.author as unknown as string);
		return post;
	}));
}

export type ISBN = string;

export type User = {
	username: string,
	displayName: string,
	likes: string[],
	email: string,
	picture: string,
	bio: string,
	posts: Post[],
	id: string,
	banner: string,
	tags: string[],
	links: {}[]
	books: { isbn: ISBN, rating: number, review: string }[],
	currentBook: string | null,
	readingList: ISBN[],
};

export async function getUser(username: string): Promise<User> {
	return (await getDoc(doc(db, "users", username))).data() as User;
}
