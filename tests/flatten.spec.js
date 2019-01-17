const flatten = require("../src/flatten");

describe('Flatten', () => {

    it('Should error on null or undefined array parameter value.', () => {
        expect(() => flatten()).toThrow();
    })

    it('Should error on non array parameter value.', () => {
        expect(() => flatten(1234)).toThrow();
        expect(() => flatten("1234")).toThrow();
        expect(() => flatten(true)).toThrow();
        expect(() => flatten({})).toThrow();
    })

    it('Should return equivalent one-dimensional array.', () => {
        const input = [1, 2, 3, 4];
        expect(flatten(input)).toEqual(input);
    });

    it('Should flatten a two-dimensional array.', () => {
        const input = [1, 2, [3], 4];
        const expected = [1, 2, 3, 4];
        expect(flatten(input)).toEqual(expected);
    })

    it('Should flatten a three-dimensional array.', () => {
        const input = [1, 2, [3], [4, [5, 6]]];
        const expected = [1, 2, 3, 4, 5, 6];
        expect(flatten(input)).toEqual(expected);
    })

    it('Should ignore null, undefined values when flattening with skipNulls.', () => {
        const input = [1, 2, [3, null], [4, [5, 6]]];
        const expected = [1, 2, 3, 4, 5, 6];
        expect(flatten(input, true)).toEqual(expected);

    })

    it('Should not ignore null, undefined values when flattening without skipNulls.', () => {
        const input = [1, 2, [3, null], [4, [5, 6]]];
        const expected = [1, 2, 3, null, 4, 5, 6];
        expect(flatten(input)).toEqual(expected);

    })

})