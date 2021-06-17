import axios from 'axios';

// import {API_URL} from '@env';

export const client = axios.create({
  baseURL: "https://my-json-server.typicode.com/benirvingplt/products",
});