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

  it('returns conjugate of a complex number', () => {
    let result;

    const complexNumber1 = new ComplexNumber({re: 1, im: 3});

    result = complexNumber1.conjugate();

    expect(result.re).toBe(1);
    expect(result.im).toBe(-3);

    const complexNumber2 = new ComplexNumber({re: -1, im: -3});

    result = complexNumber2.conjugate();

    expect(result.re).toBe(-1);
    expect(result.im).toBe(3);
  }),

  it('divides complex numbers', () => {
    const complexNumber1 = new ComplexNumber({re: 2, im: 3});
    const complexNumber2 = new ComplexNumber({re: 4, im: -5});

    const result = complexNumber1.divide(complexNumber2);

    expect(result.re).toBe(-7 / 41);
    expect(result.im).toBe(22 / 41);
  });

  it('calculates radius', () => {
    const complexNumber = new ComplexNumber({re: 2, im: 4});

    const result = complexNumber.getRadius();

    expect(result).toBe(Math.sqrt((2 ** 2) + (4 ** 2)));
  });

  it('returns polar form', () => {
    const complexNumber1 = new ComplexNumber({re: 3, im: 3});
    expect(complexNumber1.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber1.getPolarForm().phase).toBe(Math.PI / 4);

    const complexNumber2 = new ComplexNumber({ re: -3, im: 3 });
    expect(complexNumber2.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber2.getPolarForm().phase).toBe(3 * (Math.PI / 4));

    const complexNumber3 = new ComplexNumber({ re: -3, im: -3 });
    expect(complexNumber3.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber3.getPolarForm().phase).toBe(-3 * (Math.PI / 4));

    const complexNumber4 = new ComplexNumber({ re: 3, im: -3 });
    expect(complexNumber4.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber4.getPolarForm().phase).toBe(-1 * (Math.PI / 4));

    const complexNumber5 = new ComplexNumber({ re: 5, im: 7 });
    expect(complexNumber5.getPolarForm().radius).toBeCloseTo(8.60);
    expect(complexNumber5.getPolarForm().phase).toBeCloseTo(0.95);

    const complexNumber6 = new ComplexNumber({ re: 0, im: 0.25 });
    expect(complexNumber6.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber6.getPolarForm().phase).toBeCloseTo(1.57);

    const complexNumber7 = new ComplexNumber({ re: 0, im: -0.25 });
    expect(complexNumber7.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber7.getPolarForm().phase).toBeCloseTo(-1.57);


    const complexNumber8 = new ComplexNumber({ re: -0.25, im: 0 });
    expect(complexNumber8.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber8.getPolarForm().phase).toBeCloseTo(Math.PI);

    const complexNumber9 = new ComplexNumber({ re: 0.25, im: 0 });
    expect(complexNumber9.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber9.getPolarForm().phase).toBeCloseTo(0);

    const complexNumber10 = new ComplexNumber({ re: 0, im: 0 });
    expect(complexNumber10.getPolarForm().radius).toBeCloseTo(0);
    expect(complexNumber10.getPolarForm().phase).toBeCloseTo(0);
  });
});
