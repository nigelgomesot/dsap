// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/pascal-triangle

export function iterative(lineNumber) {
	const currentLine = [1];

	const currentLineSize = lineNumber;

	for (let i = 1; i <= currentLineSize; i++) {
		currentLine[i] = currentLine[i - 1] * ((lineNumber - i + 1) / i);
	}

	return currentLine;
}

export function recursive(lineNumber) {
	if (lineNumber === 0) {
		return [1];
	}

	const currentLine = [];
	const currentLineSize = lineNumber;
	const previousLineSize = currentLineSize - 1;

	const previousLine = recursive(lineNumber - 1);

	for (let i = 0; i <= currentLineSize; i++) {
		const leftCoefficient = (i - 1) >= 0 ? previousLine[i - 1] : 0;
		const rightCoefficient = i <= previousLineSize ? previousLine[i] : 0;
		currentLine[i] = leftCoefficient + rightCoefficient;
	}

	return currentLine;
}
