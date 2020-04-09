// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/integer-partition

export default function integerPartition(number) {
	let matrix = new Array(number + 1).fill(null).map(() => Array(number + 1).fill(null));

	for (let colIndex = 1; colIndex <= number; colIndex++) {
		matrix[0][colIndex] = 0;
	}

	for (let rowIndex = 0; rowIndex <= number; rowIndex++) {
		matrix[rowIndex][0] = 1;
	}

	for (let rowIndex = 1; rowIndex <= number; rowIndex++) {
		for (let colIndex = 1; colIndex <= number; colIndex++) {
			if (rowIndex > colIndex) {
				matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex];
			} else {
				matrix[rowIndex][colIndex] = matrix[rowIndex - 1][colIndex] + matrix[rowIndex][colIndex - rowIndex];
			}
		}
	}

	return matrix[number][number];
}
