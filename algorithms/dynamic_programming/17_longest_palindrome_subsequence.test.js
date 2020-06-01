import { getLPSLength } from './17_longest_palindrome_subsequence.js';

describe('LPS', () => {
  it('returns longest palindrome subsequence length', () => {
    let str;

    str = 'agbdba';
    expect(getLPSLength(str)).toBe(5);

    str = 'bbbabcbcab';
    expect(getLPSLength(str)).toBe(7);

    str = 'abcdef';
    expect(getLPSLength(str)).toBe(1);
  })
});
