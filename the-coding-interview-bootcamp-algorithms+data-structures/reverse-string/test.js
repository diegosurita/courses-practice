const { reverseUsingForOfLoop, reverseUsingReduceFn } = require('./index');

test('Reverse function exists', () => {
    expect(reverseUsingForOfLoop).toBeDefined();
    expect(reverseUsingReduceFn).toBeDefined();
});

test('Param has to be an string', () => {
   expect(() => reverseUsingForOfLoop(1)).toThrow('Param has to be an string')
   expect(() => reverseUsingReduceFn(1)).toThrow('Param has to be an string')
});

test('Reverse it', () => {
    expect(reverseUsingForOfLoop('hello')).toBe('olleh');
    expect(reverseUsingReduceFn('hello')).toBe('olleh');
});