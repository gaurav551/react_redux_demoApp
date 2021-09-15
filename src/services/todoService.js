//import { API_ME } from '../configs';
import Axios from 'axios';

export class todoService {
    async getTodo() {
        console.log("getting data")
        //let apiEndPoint = `${API_ME}/mycurrentfeeling`;
        let apiEndPoint = 'https://jsonplaceholder.typicode.com/todos/'
        return await Axios.get(apiEndPoint, { withCredentials: true });
    }
    async postData() {
        console.log("setting data")
        //let apiEndPoint = `${API_ME}/mycurrentfeeling`;
        let apiEndPoint = 'https://jsonplaceholder.typicode.com/todos/'
        return await Axios.get(apiEndPoint, { withCredentials: true });
    }
}
