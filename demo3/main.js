var axios = require('axios');

module.exports = {
    fetchUsers:  () =>
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .catch(err => err.data.message),
};
