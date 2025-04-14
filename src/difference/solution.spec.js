import { difference } from './solution.js';

describe('create new array without the same characters ', () => {
    it('[2, 1], [2, 3] --> [1]', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
    it('[1, 2, 1], [2, 3] --> [1]', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });
});
