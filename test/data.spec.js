require('../src/data.js');
require('../src/data/pokemon/pokemon.js');


describe('example', () => {
    it('is a function', () => {
        expect(typeof example).toBe('function');
    });

    it('returns `example`', () => {
        expect(example()).toBe('example');
    });
});