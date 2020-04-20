import * as PrimalityTest from './primalityTest.js'

describe('PrimalityTest', () => {
	it('verifies number is prime usng trial division', () => {
		expect(PrimalityTest.trialDivision(-1)).toBe(false);
		expect(PrimalityTest.trialDivision(0)).toBe(false);
		expect(PrimalityTest.trialDivision(1)).toBe(false);
		expect(PrimalityTest.trialDivision(2)).toBe(true);
		expect(PrimalityTest.trialDivision(3)).toBe(true);
		expect(PrimalityTest.trialDivision(4)).toBe(false);
		expect(PrimalityTest.trialDivision(17)).toBe(true);
		expect(PrimalityTest.trialDivision(21)).toBe(false);
	});
});
