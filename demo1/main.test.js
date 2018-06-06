var sum = require('./main');

/* define a test case */
test('sum function', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum function', () => {
    expect(sum(1, 2)).not.toBe(4);
})
