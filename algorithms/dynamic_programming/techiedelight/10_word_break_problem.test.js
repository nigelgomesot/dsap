import { wordBreakExists } from './10_word_break_problem.js';

describe('Word break Problem', () => {
  it ('checks if word break exists', () => {
    let str;
    let dictonary;

    str = 'wordbreakproblem';
    dictonary = ["this", "th", "is", "famous",
    "word", "break", "b", "r", "e", "a", "k",
    "br", "bre", "brea", "ak", "prob", "lem"];
    expect(wordBreakExists(str, dictonary)).toBe(true);

    str = 'iamace';
    dictonary = ["i", "a", "am", "ace"];
    expect(wordBreakExists(str, dictonary)).toBe(true);

    str = 'iamace';
    dictonary = ["i", "a", "ace"];
    expect(wordBreakExists(str, dictonary)).toBe(false);
  });
});
