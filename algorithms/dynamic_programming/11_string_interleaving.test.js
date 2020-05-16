import StringInterleaving from './11_string_interleaving.js';

describe('String Interleaving', () => {
  it('verifies if str1 & str2 interleaves st3', () => {
    let str1, str2, str3;
    let stringInterleaving;

    str1 = 'bcc';
    str2 = 'bbca';
    str3 = 'bbcbcac';
    stringInterleaving = new StringInterleaving(str1, str2, str3);

    expect(stringInterleaving.isTrue()).toBe(1);

    str1 = 'bcc';
    str2 = 'bbca';
    str3 = 'bcbbcac';
    stringInterleaving = new StringInterleaving(str1, str2, str3);

    expect(stringInterleaving.isTrue()).toBe(1);

    str1 = 'bcc';
    str2 = 'bbca';
    str3 = 'cbbcabc';
    stringInterleaving = new StringInterleaving(str1, str2, str3);

    expect(stringInterleaving.isTrue()).toBe(0);
  });
});
