import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://localhost:44336',
    baseURL: 'https://localhost:44321',
});

export default api;