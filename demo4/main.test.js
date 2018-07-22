var CGI = require('./main');

/* define a test case */
//test Compounds/Object/Callback
test('', () => {

})

// test Compounds/Object/Promise
test('fetchUser Function', () => {
    CGI.fetchUsers().then(data => {
        expect(data).not.toBeFalsy()
    })
})

// test Compounds/Object/Async & Await
test('fetchUser Function', async () => {
    const data = await CGI.fetchUsers(); // wait an expression/promise

    expect(data).not.toBeFalsy();
})

