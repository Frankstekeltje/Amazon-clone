import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-89aa0/us-central1/api' //The api (cloud function) url
});

export default instance;