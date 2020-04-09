import * as FourierTransform from './fourier_transform.js';
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

	// REF: Debugging: https://medium.com/@alex.wasik/how-to-debug-jest-tests-with-chrome-c3d7e9edf82d
	// 1) Open chrome://inspect, 2) Click on “Open dedicated DevTools for Node”
	// 3) Add debugger statement, 4) Run `node --inspect node_modules/.bin/jest --runInBand fourier_transform.test.js`
	it('performs FFT', () => {
		const input = [
	      new ComplexNumber({ re: 1, im: 2 }),
	      new ComplexNumber({ re: 2, im: 3 }),
	      new ComplexNumber({ re: 8, im: 4 }),
	    ];

		const expectedOutput = [
			new ComplexNumber({re: 11, im: 9}),
			new ComplexNumber({re: -10, im: 0}),
			new ComplexNumber({re: 7, im: 3}),
			new ComplexNumber({re: -4, im: -4}),
		];

		const delta = 1e-6;

		const output = FourierTransform.fast(input);
		const invertedOutput = FourierTransform.fast(output, true);

		expect(sequenceApproxEquals(expectedOutput, output, delta)).toBe(true);
		expect(sequenceApproxEquals(input, invertedOutput, delta)).toBe(true);
	});

	it('performs IFT', () => {
		const inputFrequencies = [
			{ frequency: 0, amplitude: 2.5, phase: 0, re: 2.5, im: 0, },
	      	{ frequency: 1, amplitude: 0.70710, phase: 135, re: -0.5, im: 0.49999, },
	      	{ frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0, },
	      	{ frequency: 3, amplitude: 0.70710, phase: -135, re: -0.49999, im: -0.5, },
		];

		const expectedOutput = [
			{ amplitude: 1 },
	      	{ amplitude: 2 },
	      	{ amplitude: 3 },
	      	{ amplitude: 4 }
		];

		const formattedInput = inputFrequencies.map(frequency => {
			return new ComplexNumber({
				re: frequency.re,
				im: frequency.im
			});
		});

		const output = FourierTransform.inverse(formattedInput);

		expect(output.length).toBeLessThanOrEqual(formattedInput.length);

		expectedOutput.forEach((expectedAmplitudes, timer) => {
			const amplitude = output[timer];

			expect(amplitude).toBeCloseTo(expectedAmplitudes.amplitude, 4);
		});
	});

});
