import axios from 'axios';

const baseURL = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000',
  timeout: 15000,
});

export default baseURL;
