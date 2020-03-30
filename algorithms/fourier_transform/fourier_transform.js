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

	for (let index = 0; index < N; index++) {
		output[index] = inputData[reverseBits(index, bitCount)];
	}

	for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
		const imSign = inverse ? -1 : 1;

		const phaseStep = new ComplexNumber({
			re: Math.cos(2 * Math.PI / blockLength),
			im: (imSign * Math.sin(2 * Math.PI / blockLength))
		});

		for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
			let phase = new ComplexNumber({re: 1, im: 0});

			for (let signalId = blockStart; signalId < (blockStart + blockLength / 2); signalId++) {
				const component = output[signalId + blockLength / 2].multiply(phase);

				const upd1 = output[signalId].add(component);
				const upd2 = output[signalId].subtract(component);

				output[signalId] = upd1;
				output[signalId + blockLength / 2] = upd2;

				phase = phase.multiply(phaseStep);
			}
		}
	}

	if (inverse) {
		for (let signalId = 0; signalId < N; signalId++) {
			output[signalId] /= N;
		}
	}

	return output;
}

export function reverseBits(input, bitCount) {
	let reversedBits = 0;

	for(let bitIndex = 0; bitIndex < bitCount; bitIndex++) {
		reversedBits *= 2;

		if (Math.floor(input / (1 << bitIndex)) % 2 === 1) {
			reversedBits++;
		}
	}

	return reversedBits;
}
