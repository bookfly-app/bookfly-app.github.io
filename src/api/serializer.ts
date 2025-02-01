export type Image = {
	[key: number]: string;
};

/**
 * Serializes an image into text data that can be stored in Firebase.
 *
 * Because Firebase has a size limit of 10MB, the image data is split into
 * ~10MB chunks. The resulting chunk list is returned.
 *
 * The image can be retrieved with `deserializeImage()`.
 *
 * @param blob The image data, usually a value from `input type="file"`.
 */
export async function serializeImage(blob: Blob): Promise<Image> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			let data = reader.result as string;
			let chunks = data.match(/.{1,1250000}/g)!;
			let chunkData: Image = {};
			chunks.forEach((chunk, index) => (chunkData[index] = chunk));
			resolve(chunkData);
		};
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}

export function deserializeImage(data: Image): string {
	let result = "";
	let index = 0;
	while (data[index]) {
		result += data[index];
		index++;
	}
	return result;
}
