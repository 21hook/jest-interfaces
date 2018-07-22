var data = require('./main');
const mockCallback = jest.fn();

data.iterate([1, 2], mockCallback); // mimic the data IO of a real function(mock function)

/* define a test suite(a set of test cases) */
// test Compounds/Function
describe('data Object', () => {
    /* define a test case */
    test('iterate Function', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
        expect(mockCallback.mock.calls[0][0]).toBe(1); // first call to the mock function, first argument
        expect(mockCallback.mock.calls[1][0]).toBe(2); // second call to the mock function, first argument
        expect(mockCallback.mock.results[0].value).toBeUndefined(); // first call to the mock function, return value
    })
});
