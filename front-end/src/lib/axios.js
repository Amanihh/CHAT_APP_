import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"?'http://localhost:5001/api':"/api",  // No localhost:5000 here, because Vite will handle it
  withCredentials: true,
});
