import * as Radian from './radian.js';

describe('Radian', () => {
	it('converts radian to degree', () => {
		expect(Radian.toDegree(0)).toBe(0);
		expect(Radian.toDegree(Math.PI / 4)).toBe(45);
		expect(Radian.toDegree(Math.PI / 2)).toBe(90);
		expect(Radian.toDegree(Math.PI)).toBe(180);
		expect(Radian.toDegree(3 * Math.PI / 2)).toBe(270);
		expect(Radian.toDegree(2 * Math.PI)).toBe(360);
	});

	it('converts degree to radian', () => {
		expect(Radian.toRadian(0)).toBe(0);
		expect(Radian.toRadian(45)).toBe(Math.PI / 4);
		expect(Radian.toRadian(90)).toBe(Math.PI / 2);
		expect(Radian.toRadian(180)).toBe(Math.PI);
		expect(Radian.toRadian(270)).toBe(3 * Math.PI / 2);
		expect(Radian.toRadian(360)).toBe(2 * Math.PI);
	});
});
