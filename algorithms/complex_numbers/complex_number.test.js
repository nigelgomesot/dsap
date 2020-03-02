import ComplexNumber from 'ComplexNumber';

describe('ComplexNumber', () => {
	it('creates complex number', () => {
		const complexNumber = new ComplexNumber({re: 2, im: 3});

		expect(complexNmber).toBeDefined();
		expect(complexNmber.re).toBe(2);
    expect(complexNmber.im).toBe(3);
	});


});