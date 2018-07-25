var CGI = require('./main');

/* define a test case */
//test a callback
test('', done => { // pass a expectation callback, the client
    function handleRes(data) {
        expect(data).toBe('peanut butter')

        done() // wait until done callback is called, before the expectation callback is finished
    }

    fetchData(handleRes) // pass a res callback, the client
})

// test a promise
test('fetchUser Function', () => {
    CGI.fetchUsers() // return a promise
        .then(res => { // test the resolved value
            expect(res).not.toBeFalsy()
        })
        .catch(err => { // test the rejected value
            expect(err).toBe('error message')
        })
})

// test async & await(an async fn with sync waiting)
test('fetchUser Function', async () => {
    try {
        const res = await CGI.fetchUsers(); // wait an expression/promise

        expect(res).toBeTruthy()
    } catch (e) {
        expect(e).toBe('error message')
    }
})

