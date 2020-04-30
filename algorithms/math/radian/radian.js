// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/radian

export function toDegree(radian) {
	return radian * (180 / Math.PI);
}

export function toRadian(degree) {
	return degree * (Math.PI / 180);
}
