import axios from 'axios';

const URL = 'http://localhost:3001';

const API = axios.create({
  baseURL: URL,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
});

export default API;
