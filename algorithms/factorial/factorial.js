// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/factorial

export function iterative(number) {
	let result = 1;

	for (let i = 2; i <= number; i++) {
		result *= i;
	}

	return result;
}

export function recursive(number) {
	return number > 1 ? number * recursive(number - 1) : 1;
}
