// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/sieve-of-eratosthenes

export function fetch(maxNumber) {
	const isPrime = new Array(maxNumber + 1).fill(true);
	const primes = [];

	isPrime[0] = false;
	isPrime[1] = false;

	for(let number = 2; number <= maxNumber; number++) {
		if (isPrime[number]) {
			primes.push(number);
		}

		let nextNumber = number * number;

		while(nextNumber <= maxNumber) {
			isPrime[nextNumber] = false;
			nextNumber += number;
		}
	}

	return primes;
}
