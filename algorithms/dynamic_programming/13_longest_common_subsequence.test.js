import lcs from './13_longest_common_subsequence.js';

describe('lcs', () => {
  it('returns length of longest common subsequence', () => {
    let str1, str2;

    str1 = 'ABCD';
    str2 = 'AEBD';
    expect(lcs(str1, str2)).toBe(3);

    str1 = 'ABCD';
    str2 = '';
    expect(lcs(str1, str2)).toBe(0);

    str1 = 'ABCD';
    str2 = 'AEDB';
    expect(lcs(str1, str2)).toBe(2);
  });
});
