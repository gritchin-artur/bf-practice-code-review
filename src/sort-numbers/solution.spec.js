import { sortNumbers } from './solution.js';

describe('Sorts an array of numbers from smallest to largest to largest', () => {
    it('[1.5, 1, -1.5, 0, -1] --> [-1.5, -1, 0, 1, 1.5]', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, -1])).toEqual([
            -1.5, -1, 0, 1, 1.5,
        ]);
    });
    it('[1.5, 1, -1.5, 3, 0, -1] --> [-1.5, -1, 0, 1, 1.5, 3]', () => {
        expect(sortNumbers([1.5, 1, -1.5, 3, 0, -1])).toEqual([
            -1.5, -1, 0, 1, 1.5, 3,
        ]);
    });
});
