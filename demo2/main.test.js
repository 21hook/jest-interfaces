var data = require('./main');

/* define a test case */

/* test Primitives/Boolean */
test('', () => {
    const bool = null;

    expect(bool).toBeDefined(); // defined variable
    expect(bool).toBeNull(); // null
    expect(bool).toBeFalsy(); // true
});

/* test Primitives/String */
test('literal String', () => {
    expect('team').toMatch(/team/);
});

/* test Compounds/Object */
test('data Object', () => {
    expect(data).toEqual({
        one: 1
    })
});
