import * as Factorial from './factorial';

describe('Factorial', () => {

	it('computes factorial iteratively', () => {
		expect(Factorial.iterative(0)).toBe(1);
		expect(Factorial.iterative(1)).toBe(1);
		expect(Factorial.iterative(2)).toBe(2);
		expect(Factorial.iterative(3)).toBe(6);
		expect(Factorial.iterative(4)).toBe(24);
		expect(Factorial.iterative(5)).toBe(120);
	});

});
