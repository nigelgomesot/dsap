// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/is-power-of-two

export function bitwise(number) {
	if (number < 1) return false;

	return (number & (number - 1)) === 0;
}
