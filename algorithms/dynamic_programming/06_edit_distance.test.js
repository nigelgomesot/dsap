import editDistance from './06_edit_distance.js'

describe('editDistance', () => {
  it('returns minimum edit distance between 2 strings', () => {
    expect(editDistance('a', 'a')).toBe(0);
    expect(editDistance('a', 'b')).toBe(1);
    expect(editDistance('saturday', 'sunday')).toBe(3);
  });
});
