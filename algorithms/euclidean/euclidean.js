// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm

export function recursive(originalA, originalB) {
	const a = Math.abs(originalA);
	const b = Math.abs(originalB);

	return (b === 0) ? a : recursive(b, a % b);
}
