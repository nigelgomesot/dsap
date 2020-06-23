import { editDistance } from './04_edit_distance.js';

describe('Edit Distance', () => {
  it('returns minimum edits required', () => {
    let str1;
    let str2;

    str1 = 'a';
    str2 = '';
    expect(editDistance(str1, str2)).toBe(1);

    str1 = 'abc';
    str2 = 'abc';
    expect(editDistance(str1, str2)).toBe(0);

    str1 = 'sitting';
    str2 = 'kitten';
    expect(editDistance(str1, str2)).toBe(3);
  });
});
