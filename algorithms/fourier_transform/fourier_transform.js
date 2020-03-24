// REF: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fourier-transform

import ComplexNumber from '../complex_numbers/complex_number.js';

export function discrete(inputAmplitudes) {
	const N = inputAmplitudes.length;
	const zeroThreshold = 1e-10;
	const signals = [];

	for (let frequency = 0; frequency < N; frequency++) {
		let frequencySignal = new ComplexNumber();

		for (let timer = 0; timer < N; timer++) {
			const currentAmplitude = inputAmplitudes[timer];
			const currentAmplitudeComplexNumber = new ComplexNumber({re: currentAmplitude});

			const rotationAngle = -1 * (2 * Math.PI) * frequency * (timer / N);

			const dataPointContribution = new ComplexNumber({
				re: Math.cos(rotationAngle),
				im: Math.sin(rotationAngle)
			}).multiply(currentAmplitudeComplexNumber);

			frequencySignal = frequencySignal.add(dataPointContribution);
		}
		// PENDING:
	}
}
