import { lcsCount, lcsElements }  from './13_longest_common_subsequence.js';

describe('lcsCount', () => {
  it('returns length of longest common subsequence', () => {
    let str1, str2;

    str1 = 'ABCD';
    str2 = 'AEBD';
    expect(lcsCount(str1, str2)).toBe(3);

    str1 = 'ABCD';
    str2 = '';
    expect(lcsCount(str1, str2)).toBe(0);

    str1 = 'ABCD';
    str2 = 'AEDB';
    expect(lcsCount(str1, str2)).toBe(2);
  });
});

describe('lcsElements', () => {
  it('returns elements of longest common subsequence', () => {
    let str1, str2;

    str1 = 'ABCD';
    str2 = 'AEBD';
    expect(lcsElements(str1, str2)).toEqual(['A','B','D']);

    str1 = 'ABCD';
    str2 = '';
    expect(lcsElements(str1, str2)).toEqual([]);

    str1 = 'ABCD';
    str2 = 'AEDB';
    expect(lcsElements(str1, str2)).toEqual(['A','D']);
  });
});
