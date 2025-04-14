import { intersection } from './solution.js';

describe('Repeated values into two array', () => {
    it('[2, 1], [2, 3] --> [2]', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });
    it('[2, 1, 2], [2, 3] --> [2]', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });
});
