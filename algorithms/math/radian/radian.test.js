import * as Radian from './radian.js';

describe('Radian', () => {
	it('converts radian to degree', () => {
		expect(Radian.toDegree(0)).toBe(0);
		expect(Radian.toDegree(Math.PI / 4)).toBe(45);
		expect(Radian.toDegree(Math.PI / 2)).toBe(90);
		expect(Radian.toDegree(Math.PI)).toBe(180);
		expect(Radian.toDegree(3 * Math.PI / 2)).toBe(270);
		expect(Radian.toDegree(2 * Math.PI)).toBe(360);
	})
});
