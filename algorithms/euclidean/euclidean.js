// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm

export function recursive(originalA, originalB) {
	const a = Math.abs(originalA);
	const b = Math.abs(originalB);

	return (b === 0) ? a : recursive(b, a % b);
}

export function iterative(originalA, originalB) {
	let a = Math.abs(originalA);
	let b = Math.abs(originalB);

	while ((a && b) && (a !== b)) {
		[a, b] = a > b ? [a - b, b] : [a, b - a];
	}

	return a || b;
}
