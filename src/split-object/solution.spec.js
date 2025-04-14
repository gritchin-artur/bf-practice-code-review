import { splitObject } from './solution.js';

describe('The new objects are returned in an array', () => {
    it('{ a: 1, b: 2, c: 3 } -> [{ a: 1 }, { b: 2 }, { c: 3 }]', () => {
        expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
            { a: 1 },
            { b: 2 },
            { c: 3 },
        ]);
    });
    it("{ name: 'robs', age: 25, tall: true, userName: 'sbor' } -> [{ name: 'robs' }, { age: 25 }, { tall: true }, { userName: 'sbor' }]", () => {
        expect(
            splitObject({
                name: 'robs',
                age: 25,
                tall: true,
                userName: 'sbor',
            }),
        ).toEqual([
            { name: 'robs' },
            { age: 25 },
            { tall: true },
            { userName: 'sbor' },
        ]);
    });
});
