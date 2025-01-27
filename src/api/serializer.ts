
/**
 * Serializes an image into text data that can be stored in Firebase.
 *
 * The image can be retrieved with `deserializeImage()`.
 *
 * @param url The 
 */
export async function serializeImage(url: string): Promise<string> {
	let blob = await (await fetch(url)).blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

export function deserializeImage(data: string): string {
	return `data:image/png;base64,${data}`;
}
