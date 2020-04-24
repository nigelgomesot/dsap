// REF: https://exercism.io/tracks/javascript/exercises/armstrong-numbers/solutions/08b19bc54532479dba617c3d96d6d38c

export function verify(number) {
	const digits = number.toString().split("").map(digit => Number(digit));
	const digitsLength = digits.length;
	const digitsTotal = digits.reduce((total, digit) => total + Math.pow(digit, digitsLength));

	return digitsTotal === number;
}
