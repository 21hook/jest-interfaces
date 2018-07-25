// users.js
import axios from 'axios';

export default class Users {
    static all() {
        return axios.get('https://jsonplaceholder.typicode.com/posts/1/id').then(resp => resp.data);
    }
}
