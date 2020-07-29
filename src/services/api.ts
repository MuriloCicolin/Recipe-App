import axios from 'axios';

const api = axios.create({
  baseURL: 'https://p-recipe-app.herokuapp.com',
});

export default api;
