// REF: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fourier-transform

import ComplexNumber from './complexNumber.js';
import * as Bits from './bits.js';

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
		
		if (Math.abs(frequencySignal.re) < zeroThreshold) {
			frequencySignal.re = 0;
		}

		if (Math.abs(frequencySignal.im) < zeroThreshold) {
			frequencySignal.im = 0;
		}

		const nComplexNumber = new ComplexNumber({re: N});

		frequencySignal = frequencySignal.divide(nComplexNumber);

		signals[frequency] = frequencySignal;
	}

	return signals;
}

export function fast(inputData, inverse = false) {
	const bitCount = Bits.bitLength(inputData.length - 1);
	const N = 1 << bitCount;

	while(inputData.length < N) {
		inputData.push(new ComplexNumber());
	}

	const output = [];

	// PENDING
}

function reverseBits(input, bitCount) {
	let reversedBits = 0;

	for(let bitIndex = 0; bitIndex < bitCount; bitIndex++) {
		reversedBits *= 2;

		if (Math.floor(input / (1 << bitIndex)) % 2 === 1) {
			reversedBits++;
		}
	}

	return reversedBits;
}
