var sum = require('./main');

/* define a test case */
// test primitives
test('literal String', () => {
    expect('team').toMatch(/team/);
});

test('sum function', () => {
    expect(sum(1, 2)).toBe(3); // toBe(); the same object values(object equality) for primitives
})

test('sum function', () => {
    expect(sum(1, 2)).not.toBe(4);
})
