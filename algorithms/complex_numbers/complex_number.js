// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/complex-number

export default class ComplexNumber {

	constructor({re = 0, im  = 0} = {}) {
		this.re = re;
		this.im = im;
	}

	add(addend) {
		return new ComplexNumber({
			re: this.re + addend.re,
			im: this.im + addend.im
		});
	}

	subtract(subtrahend) {
		return new ComplexNumber({
			re: this.re - subtrahend.re,
			im: this.im - subtrahend.im
		});
	}

	multiply(multipicand) {
		return new ComplexNumber({
			re: (this.re * multipicand.re - this.im * multipicand.im),
			im: (this.re * multipicand.im + this.im * multipicand.re)
		});
	}

	conjugate() {
		return new ComplexNumber({
			re: this.re,
			im: (-1 * this.im)
		});
	}

	divide(divider) {
		const dividerConjugate = divider.conjugate();

		const finalDivident = this.multiply(dividerConjugate);
		const finalDivider = ((divider.re ** 2) + (divider.im ** 2));

		return new ComplexNumber({
			re: (finalDivident.re / finalDivider),
			im: (finalDivident.im / finalDivider)
		});
	}

	getRadius() {
		return Math.sqrt((this.re ** 2) + (this.im ** 2));
	}
}
