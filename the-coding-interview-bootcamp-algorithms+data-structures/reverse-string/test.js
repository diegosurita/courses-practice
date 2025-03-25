const { reverseUsingForOfLoop } = require('./index');

test('Reverse function exists', () => {
    expect(reverseUsingForOfLoop).toBeDefined();
});

test('Param has to be an string', () => {
   expect(() => reverseUsingForOfLoop(1)).toThrow('Param has to be an string')
});

test('Reverse it', () => {
    expect(reverseUsingForOfLoop('hello')).toBe('olleh');
});