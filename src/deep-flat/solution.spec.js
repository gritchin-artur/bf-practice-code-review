import { deepFlat } from './solution.js';

describe('flat array', () => {
    it('[1, [2, [3, [4]], 5]] --> [1, 2, 3, 4, 5]', () => {
        expect(deepFlat([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it("['a', ['b', [['c'], ['d']], 'e']] --> ['a', 'b', 'c', 'd', 'e']", () => {
        expect(deepFlat(['a', ['b', [['c'], ['d']], 'e']])).toEqual([
            'a',
            'b',
            'c',
            'd',
            'e',
        ]);
    });
});
