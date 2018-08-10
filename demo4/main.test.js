var API = require('./main');
var fs = require('fs')

describe('async code', () => {
    //test async function
    test('fetch data asynchronously', done => { // expectation callback

        //     done() // wait until done callback is called, before the expectation callback is finished

        fs.readFile('data.json', (err, data) => { // read callback
            // console.log(data.toString())
            expect(data).toBeDefined()

            done() // the expectation callback waits until the done callback is completed
        })
    })

    // test async promise
    test('fetch users asynchronously', () => {
        expect.assertions(1) // the number of assertions is 1

        return API.fetchUsers() // return a promise
            .then(res => { // test the resolved value
                expect(res).not.toBeFalsy()
            })
            .catch(err => { // test the rejected value
                expect(err).toBe('error message')
            })
    })


    // test async & await function
    test('fetchUser Function', async () => {
        try {
            const res = await API.fetchUsers(); // wait an expression/promise

            expect(res).toBeTruthy()
        } catch (e) {
            expect(e).toBe('error message')
        }
    })
})


