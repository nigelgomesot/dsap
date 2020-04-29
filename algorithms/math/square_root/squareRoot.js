// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/square-root

export default function squareRoot(number, tolerance = 0) {
	if (number < 0) {
		throw new Error('only positive integers allowed');
	}

	if (number === 0) {
		return 0;
	}

	let root = 1;
	const delta = 1 / (10 ** tolerance);

	while (Math.abs(number - (root ** 2)) > delta) {
		root -= ((root ** 2) - number) / (2 * root);
	}

	return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
