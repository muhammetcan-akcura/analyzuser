// src/utils/axios.js

import axios from 'axios';

// Axios'u yapılandırma
const axiosInstance = axios.create({
    baseURL: 'https://socialpanel.app/adminapi/v2', // API Base URL
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'co393qbx4pdh2xfq08goc8a79k4mtjw1bcyzh2s11xy1a9frd1t1d4b32ih7k30u',
    },
});

export default axiosInstance;
