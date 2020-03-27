import * as FourierTransform from './fourier_transform';
import ComplexNumber from './complexNumber.js';

function sequenceApproxEquals(sequence1, sequence2, delta) {
	if (sequence1.length !== sequence2.length) {
		return false;
	}

	for (let seqIndex = 0; seqIndex < sequence1.length; seqIndex++) {
		if (Math.abs(sequence1[seqIndex].re - sequence2[seqIndex].re) > delta) {
			return false;
		}

		if (Math.abs(sequence1[seqIndex].im - sequence2[seqIndex].im) > delta) {
			return false;
		}
	}

	return true;
}

describe('FourierTransform', () => {
	it('performs DFT', () => {
		const testCases = [
			{
			    input: [
			      { amplitude: 1 },
			    ],
			    output: [
			      { frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0, },
			    ],
			},
			{
			    input: [
			      { amplitude: 1 },
			      { amplitude: 2 },
			      { amplitude: 3 },
			      { amplitude: 4 },
			    ],
			    output: [
			      { frequency: 0, amplitude: 2.5, phase: 0, re: 2.5, im: 0, },
			      { frequency: 1, amplitude: 0.70710, phase: 135, re: -0.5, im: 0.49999, },
			      { frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0, },
			      { frequency: 3, amplitude: 0.70710, phase: -135, re: -0.49999, im: -0.5, },
			    ],
			},
  		]

  		testCases.forEach(testCase => {
  			const { input, output: expectedOutput } = testCase;

  			const amplitudes = input.map(sample => sample.amplitude );
  			const result = FourierTransform.discrete(amplitudes);

  			expectedOutput.forEach((expectedSignal, frequency) => {
  				const currentSignal = result[frequency];
  				const currentPolarSignal = currentSignal.getPolarForm();

  				expect(currentSignal.re).toBeCloseTo(expectedSignal.re, 4);
  				expect(currentSignal.im).toBeCloseTo(expectedSignal.im, 4);

				const phaseInDegree = currentPolarSignal.phase * (180 / Math.PI);
				expect(phaseInDegree).toBeCloseTo(expectedSignal.phase, 4);
   				expect(currentPolarSignal.radius).toBeCloseTo(expectedSignal.amplitude, 4);
  			});
  		});

	});

	it('performs FFT', () => {
		const input = [
			new ComplexNumber({re: 1, im: 2}),
			new ComplexNumber({re: 2, im: 3}),
			new ComplexNumber({re: 8, im: 4}),
		];

		const expectedOutput = [
			new ComplexNumber({re: 11, im: 9}),
			new ComplexNumber({re: -10, im: 0}),
			new ComplexNumber({re: 7, im: 3}),
			new ComplexNumber({re: -4, im: -4}),
		]

		const delta = 1e-6;

		const output = FourierTransform.fast(input);
		const invertedOutput = FourierTransform.fast(input, true);

		expect(sequenceApproxEquals(expectedOutput, output, delta)).toBe(true);
		expect(sequenceApproxEquals(input, invertedOutput, delta)).toBe(true);
	});

});
