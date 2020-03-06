import ComplexNumber from './complex_number.js';

describe('ComplexNumber', () => {
	it('creates complex number', () => {
		const complexNumber = new ComplexNumber({re: 2, im: 3});

		expect(complexNumber).toBeDefined();
		expect(complexNumber.re).toBe(2);
    expect(complexNumber.im).toBe(3);
	});

  it('adds complex numbers', () => {
    const complexNumber1 = new ComplexNumber({re: 1, im: 3});
    const complexNumber2 = new ComplexNumber({re: 2, im: 4});

    const result = complexNumber1.add(complexNumber2);

    expect(result.re).toBe(1+2);
    expect(result.im).toBe(3+4);
  });

  it('subtracts complex numbers', () => {
    const complexNumber1 = new ComplexNumber({re: 1, im: 3});
    const complexNumber2 = new ComplexNumber({re: 2, im: 4});

    const result = complexNumber1.subtract(complexNumber2);

    expect(result.re).toBe(1-2);
    expect(result.im).toBe(3-4);
  });

  it('multiplies complex numbers', () => {
    const complexNumber1 = new ComplexNumber({re: 1, im: 3});
    const complexNumber2 = new ComplexNumber({re: 2, im: 4});

    const result = complexNumber1.multiply(complexNumber2);

    expect(result.re).toBe(1 * 2 - 3 * 4);
    expect(result.im).toBe(1 * 4 + 3 * 2);
  });
});
