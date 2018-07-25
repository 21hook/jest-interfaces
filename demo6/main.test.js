var data = require('./main');


/* define a test suite(a set of test cases) */
// test Compounds/Function
describe('Mock functions', () => {
    const mockCallback = jest.fn();

    data.iterate([1, 2], mockCallback); // mimic the data IO of a real function(mock function)

    /* define a test case */
    test('mock arguments', () => {
        expect(mockCallback.mock.calls.length).toBe(2);
        /*
           Mock functions
            mockFn.mock.calls
            return [[arg1, arg2... ], [ar1, arg2...]]
                       first call       second call

            mockFn.mock.results
            return [{   // result of the first call
                        isThrow: bool // throw or not, by throw keyword
                        value: result
                    }, {
                        isThrown: bool
                        value: result
                    }]
         */
        expect(mockCallback.mock.calls[0][0]).toBe(1); // first call to the mock function, first argument
        expect(mockCallback.mock.calls[1][0]).toBe(2);
        expect(mockCallback.mock.results[0].value).toBeUndefined(); // first call to the mock function, return value
    })


    test('mock return values', () => {
        const myMock = jest.fn()

        // serialize the return values
        myMock
            .mockReturnValueOnce(10) // return a value when it is called, once
            .mockReturnValueOnce('x')
            .mockReturnValue(true)  // return a value when it is called

        expect(myMock()).toBe(10) // object equality, for primitives
        expect(myMock()).toBe('x')
        expect(myMock()).toBeTruthy()
    })


    test('mock fn implementations', () => {
        // jest.fn(impl), shorthand for jest.fn().mockImplementation(impl)const myMock = jest.fn().mockImplementation(cb => cb(null, true)) // mock a fn impl
        const myMock = jest.fn().mockImplementation(x => x + 42) // mock the fn impl

        expect(myMock(0)).toBe(42) // call the mock
        expect(myMock(1)).toBe(43)


        const mockHOF = jest.fn()
            .mockImplementationOnce(cb => cb(null, true)) // process the data inside its caller; fn impl
            .mockImplementationOnce(cb => cb(null, false))

        mockHOF((err, val) => console.log(err, val)) // pass a fn to be called
        mockHOF((err, val) => console.log(err, val))
    })



});
