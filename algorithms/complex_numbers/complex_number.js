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
}
