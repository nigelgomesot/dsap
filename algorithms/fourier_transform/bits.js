export function bitLength(number) {
	let length = 0;

    while ((1 << length) <= number) {
      length++;
    }

    return length;
}
