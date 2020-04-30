import squareRoot from './squareRoot.js';

describe('squareRoot', () => {
	it('calculates square root of a number', () => {
		expect(squareRoot(0)).toBe(0);
		expect(squareRoot(1)).toBe(1);
		expect(squareRoot(2)).toBe(1);
		expect(squareRoot(3)).toBe(2);
		expect(squareRoot(4)).toBe(2);
		expect(squareRoot(15)).toBe(4);
		expect(squareRoot(16)).toBe(4);
	});
});
