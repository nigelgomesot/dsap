import * as FourierTransform from './fourier_transform';

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

});