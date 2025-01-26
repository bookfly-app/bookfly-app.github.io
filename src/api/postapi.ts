import { collection, getDocs, query } from "firebase/firestore";
import initializeFirebase from "../backend/backend";
import { getUserFromId } from "./userapi";
import { getBook, type Post } from "./bookapi";

let { db } = initializeFirebase();

export async function searchPosts(searchTerm: string): Promise<Post[]> {
	let posts = (await getDocs(
		query(
			collection(db, "posts"),
		)
	)).docs.map(doc => doc.data()) as Post[];

	posts = await Promise.all(posts.map(async post => {
		post.poster = await getUserFromId(post.poster as unknown as string);
		post.books = await Promise.all(post.books.map(async isbn => await getBook(isbn as unknown as string)));
		return post;
	}));

	return posts.filter(post => post.body.toLowerCase().includes(searchTerm.toLowerCase()));
}
