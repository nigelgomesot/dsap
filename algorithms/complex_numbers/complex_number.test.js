import ComplexNumber from './complex_number.js';

describe('ComplexNumber', () => {
	it('creates complex number', () => {
		const complexNumber = new ComplexNumber({re: 2, im: 3});

		expect(complexNumber).toBeDefined();
		expect(complexNumber.re).toBe(2);
    expect(complexNumber.im).toBe(3);
	});


});