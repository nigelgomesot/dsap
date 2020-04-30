import * as SieveOfEratosthenes from './sieveOfEratosthenes.js'

describe('SieveOfEratosthenes', () => {
	it('returns all prime numbers upto limit', () => {
		expect(SieveOfEratosthenes.fetch(5)).toEqual([2, 3, 5]);
		expect(SieveOfEratosthenes.fetch(10)).toEqual([2, 3, 5, 7]);
		expect(SieveOfEratosthenes.fetch(100)).toEqual([
	      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
	      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
	    ]);
	});
});
