// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.13:3000/api/nguoidung', // URL của server Express của bạn
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
