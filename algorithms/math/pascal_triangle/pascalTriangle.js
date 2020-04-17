// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/pascal-triangle

export function iterative(lineNumber) {
	const currentLine = [1];

	const currentLineSize = lineNumber;

	for (let i = 1; i <= currentLineSize; i++) {
		currentLine[i] = currentLine[i - 1] * ((lineNumber - i + 1) / i);
	}

	return currentLine;
}
