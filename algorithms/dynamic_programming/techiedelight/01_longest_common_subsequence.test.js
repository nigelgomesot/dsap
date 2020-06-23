import { lcsLength } from './01_longest_common_subsequence.js';

describe('Longest Common Subsequence', () => {
  it('returns length of LCS', () => {
    let str1;
    let str2;

    str1 = 'ABC';
    str2 = '';
    expect(lcsLength(str1, str2)).toBe(0);

    str1 = 'XMJYAUZ';
    str2 = 'MZJAWXU';
    expect(lcsLength(str1, str2)).toBe(4);
  });
});
