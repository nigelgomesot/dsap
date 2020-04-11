// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/least-common-multiple

import * as Euclidean from '../euclidean/euclidean.js'

export default function leastCommonMultiple(a, b) {
	return (a === 0 || b === 0) ? 0 : (Math.abs(a * b) / Euclidean.recursive(a, b));
}
