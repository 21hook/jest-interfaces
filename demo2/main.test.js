var data = require('./main');

/* define test cases */
/* test compounds */
test('', () => {
    const bool = null;

    expect(bool).toBeDefined(); // defined variable
    expect(bool).toBeNull(); // null
    expect(bool).toBeFalsy(); // true
});

test('data Object', () => {
    expect(data).toEqual({ // toEqual(); the same values(object equality) for compounds
        one: 1
    })
});
