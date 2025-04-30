import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_URL_LOCAL
  : process.env.REACT_APP_API_URL_DEPLOY;

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = (credentials) => api.post('login/', credentials);
export const registerUser = (data) => api.post('register/', data);

export default api;
