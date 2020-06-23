import { scsLength } from './02_shortest_common_supersequence.js';

describe('Shortest Common Supersequence', () => {
  it('returns length of SCS', () => {
    let str1;
    let str2;

    str1 = 'ABC';
    str2 = 'DEF';
    expect(scsLength(str1, str2)).toBe(6);

    str1 = 'ABCBDAB';
    str2 = 'BDCABA';
    expect(scsLength(str1, str2)).toBe(9);
  });
});
