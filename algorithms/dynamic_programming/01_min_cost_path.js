export default class MinCostPath {

	constructor(costMatrix) {
		this.costMatrix = costMatrix;
		this.maxRow = costMatrix.length - 1;
		this.maxCol = costMatrix[0].length - 1;
		this.matrix = Array.from(Array(this.maxRow + 1), () => new Array(this.maxCol + 1));
	}

	calculate() {
		this.matrix[0][0] = this.costMatrix[0][0];

		for(let i = 1; i <= this.maxRow; i++) {
			this.matrix[i][0] = this.matrix[i - 1][0] + this.costMatrix[i][0];
		}

		for(let j = 1; j <= this.maxCol; j++) {
			this.matrix[0][j] = this.matrix[0][j - 1] + this.costMatrix[0][j];
		}

		for (let i = 1; i <= this.maxRow; i++) {
			for (let j = 1; j <= this.maxCol; j++) {
				const previousStepTopCost = this.matrix[i - 1][j];
				const previousStepLeftCost = this.matrix[i][j - 1];

				this.matrix[i][j] = Math.min(previousStepTopCost, previousStepLeftCost) + this.costMatrix[i][j];
			}
		}

		return this.matrix[this.maxRow][this.maxCol];
	}
}
