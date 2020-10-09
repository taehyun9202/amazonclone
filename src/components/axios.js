import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clo-c068c.cloudfunctions.net/api'
    // 'http://localhost:5001/clo-c068c/us-central1/api'
    
})

export default instance