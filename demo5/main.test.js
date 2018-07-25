/**
 * Setup & teardown execution flow:
 *  global beforeEach -> scoped beforeEach -> scoped afterEach -> global afterEach
 */

var data = require('./main');

// setup before running each global test case/test suite
beforeEach(() => console.log('beforeEach') );
// teardown after running each test case/test suite
afterEach(() => console.log('afterEach'));

/* define a test case */
test('data Object', () => {
    expect(data.one).toEqual({}) // test Compounds/Object
});

test('data Object', () => {
    expect(data.two).toEqual([])
});

/* define a test suite */
describe('', () => {
    // setup before running each local test case
    beforeEach(() => console.log('inner beforeEach'));
    // teardown after running each local test case
    afterEach(() => console.log('inner afterEach'));

    test('data Object', () => {
        expect(data.one).toEqual({})
    })

    test('data Obeject', () => {
        expect(data.two).toEqual([])
    })
});
