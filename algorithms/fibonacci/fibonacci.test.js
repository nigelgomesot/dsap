import * as Fibonacci from './fibonacci';

describe('Fibonacci', () => {

	it('returns list of fibonacci numbers', () => {
		expect(Fibonacci.list(1)).toEqual([1]);
		expect(Fibonacci.list(2)).toEqual([1,1]);
		expect(Fibonacci.list(6)).toEqual([1,1,2,3,5,8]);
		expect(Fibonacci.list(8)).toEqual([1,1,2,3,5,8,13,21]);
	});

	it('returns fibonacci number at specified position', () => {
		expect(Fibonacci.numberAt(1)).toEqual(1);
		expect(Fibonacci.numberAt(2)).toEqual(1);
		expect(Fibonacci.numberAt(6)).toEqual(8);
		expect(Fibonacci.numberAt(8)).toEqual(21);
	});

	it('returns fibonacci number at specified position via Closed Form', () => {
		expect(Fibonacci.numberAtViaClosedForm(1)).toEqual(1);
		expect(Fibonacci.numberAtViaClosedForm(2)).toEqual(1);
		expect(Fibonacci.numberAtViaClosedForm(6)).toEqual(8);
		expect(Fibonacci.numberAtViaClosedForm(8)).toEqual(21);
	});
});
