import * as ArmstrongNumber from './armstrongNumber.js'

describe('ArmstrongNumber', () => {
	it('verifies if number is an armstrong number', () => {
		expect(ArmstrongNumber.verify(1)).toBe(true);
		expect(ArmstrongNumber.verify(9)).toBe(true);
		expect(ArmstrongNumber.verify(10)).toBe(false);
		expect(ArmstrongNumber.verify(153)).toBe(true);
		expect(ArmstrongNumber.verify(154)).toBe(false);
	});
});
