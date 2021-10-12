import axios, { AxiosInstance } from 'axios';
import { API_ROUTES } from '../constants/apiConfig';

export const instance: AxiosInstance = axios.create({
  baseURL: API_ROUTES.baseUrl,
  timeout: 2000,
});
