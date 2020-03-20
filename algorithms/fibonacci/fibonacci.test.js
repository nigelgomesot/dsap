import * as Fibonacci from './fibonacci';

describe('Fibonacci', () => {

	it('returns list of fibonacci numbers', () => {
		expect(Fibonacci.list(1)).toEqual([1]);
		expect(Fibonacci.list(2)).toEqual([1,1]);
		expect(Fibonacci.list(6)).toEqual([1,1,2,3,5,8]);
		expect(Fibonacci.list(8)).toEqual([1,1,2,3,5,8,13,21]);
	})
});
