// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci

export function list(number) {
	const result = [1];

	if (number === 1) {
		return result;
	}

	result.push(1);

	if (number === 2) {
		return result;
	}

	let counter = number - 2;

	while (counter) {
		const preceedingValue1 = result[result.length - 1];
		const preceedingValue2 = result[result.length - 2];
		const currentValue = preceedingValue1 + preceedingValue2;

		result.push(currentValue);

		counter -= 1;
	}

	return result;
}
