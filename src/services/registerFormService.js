//import { API_ME } from '../configs';
import Axios from 'axios';

export class registerFormService {
    async registerData(id) {
        console.log("registering data..." + id)
        //let apiEndPoint = `${API_ME}/mycurrentfeeling`;
        let apiEndPoint = `https://jsonplaceholder.typicode.com/todos/${id}`
        return await Axios.get(apiEndPoint, { withCredentials: true });
    }
   
}
