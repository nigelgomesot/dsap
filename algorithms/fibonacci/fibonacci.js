// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/fibonacci

export function list(count) {
	const result = [1];

	if (count === 1) {
		return result;
	}

	result.push(1);

	if (count === 2) {
		return result;
	}

	let counter = count - 2;

	while (counter) {
		const preceedingValue1 = result[result.length - 1];
		const preceedingValue2 = result[result.length - 2];
		const currentValue = preceedingValue1 + preceedingValue2;

		result.push(currentValue);

		counter -= 1;
	}

	return result;
}

export function numberAt(position) {
	let currentValue = 1;
	let previousValue = 0;

	if (position === 1) {
		return currentValue;
	}

	let counter = position - 1;

	while (counter) {
		currentValue += previousValue;
		previousValue = currentValue - previousValue;

		counter -= 1;
	}

	return currentValue;
}

export function numberAtViaClosedForm(position) {
	const sqrt5 = Math.sqrt(5);
	const phi = (1 + sqrt5) / 2;

	return Math.floor((phi ** position) / sqrt5 + 0.5);
}
