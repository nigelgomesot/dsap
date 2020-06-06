import { minEggDrops } from './18_egg_drops.js';

describe('Egg Drop', () => {
  it('returns minimum drops for an egg to break', () => {
    let eggs;
    let floors;

    eggs = 1;
    floors = 6;
    expect(minEggDrops(eggs, floors)).toBe(6);

    eggs = 2;
    floors = 6;
    expect(minEggDrops(eggs, floors)).toBe(3);

    eggs = 2;
    floors = 36;
    expect(minEggDrops(eggs, floors)).toBe(8);
  })
});
