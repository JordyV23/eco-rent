import axios from "axios";

export const backendApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "cedula": import.meta.env.VITE_CEDULA_HEADER,
    "password":import.meta.env.VITE_PASSWORD_HEADER
  }
});
