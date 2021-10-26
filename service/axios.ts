import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_PROD_API_BASE_URL;

export const createDefaultAxios = (frontendBaseUrl?: string) => {
  return axios.create({
    baseURL: frontendBaseUrl || API_BASE_URL,
  });
};
