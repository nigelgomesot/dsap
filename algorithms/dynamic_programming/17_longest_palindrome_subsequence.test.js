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
  });

  it('returns longest palindrome subsequence', () => {
    let str;

    str = 'agbdba';
    expect(getLPS(str)).toEqual(['a','b','d','b','a']);

    str = 'bbbabcbcab';
    expect(getLPS(str)).toEqual(['b','a','c','b','c','a','b']);

    str = 'abcdef';
    expect(getLPS(str)).toEqual(['1']);
  });
});
