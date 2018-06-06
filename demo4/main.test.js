var data = require('./main');

// setup before running global test cases; global beforeEach -> scoped beforeEach -> scoped afterEach -> global afterEach
beforeEach(() => console.log('beforeEach') );
// teardown after running each test case
afterEach(() => console.log('afterEach'));

/* define a test case */
// test Compounds/Object
test('data Object', () => {
    expect(data.one).toEqual({})
});

test('data Object', () => {
    expect(data.two).toEqual([])
});

/* define a test suite(a set of test cases) */
describe('', () => {
    // setup before running scoped test cases; global beforeEach -> scoped beforeEach -> scoped afterEach -> global afterEach
    beforeEach(() => console.log('inner beforeEach'));
    afterEach(() => console.log('inner afterEach'));

    test('data Object', () => {
        expect(data.one).toEqual({})
    })

    test('data Obeject', () => {
        expect(data.two).toEqual([])
    })
});
