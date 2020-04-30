import * as IsPowerOfTwo from './isPowerOfTwo.js'

describe('IsPowerOfTwo', () => {

	it('detrmines if number is power of two (bitwise)', () => {
		expect(IsPowerOfTwo.bitwise(-2)).toBe(false);
		expect(IsPowerOfTwo.bitwise(-1)).toBe(false);
		expect(IsPowerOfTwo.bitwise(0)).toBe(false);
		expect(IsPowerOfTwo.bitwise(1)).toBe(true);
		expect(IsPowerOfTwo.bitwise(2)).toBe(true);
		expect(IsPowerOfTwo.bitwise(3)).toBe(false);
		expect(IsPowerOfTwo.bitwise(4)).toBe(true);
	});
});
