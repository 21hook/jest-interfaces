import axios from 'axios';
import Users from './main';

jest.mock('axios'); // mock process/module/function: output

test('should fetch users', () => {
    const resp = {};
    axios.get.mockResolvedValue(resp); // use the api, but mock the return value

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(users => expect(users).toEqual(resp)); // get the mock return value
});
