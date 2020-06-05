import { minEggDrops } from './18_egg_drops.js';

describe('Egg Drop', () => {
  it('returns minimum drops for an egg to break', () => {
    let floors = 6;
    let eggs;

    eggs = 1;
    expect(minEggDrops(floors, eggs)).toBe(6);

    eggs = 2;
    expect(minEggDrops(floors, eggs)).toBe(3);

    floors = 36;
    eggs = 2;
    expect(minEggDrops(floors, eggs)).toBe(8);
  })
});
