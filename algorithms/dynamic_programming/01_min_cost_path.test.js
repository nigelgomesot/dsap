import MinCostPath from './01_min_cost_path.js'

describe('MinCostPath', () => {

	it('calculates minimum cost path', () => {
		const costMatrix = [
			[1, 3, 5, 8],
			[4, 2, 1, 7],
			[4, 3, 2, 3]
		]
		const minCostPath = new MinCostPath(costMatrix);

		expect(minCostPath.calculate()).toBe(12);
	});
});
