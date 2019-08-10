import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const apiGetName = async (): Promise<string> => {
  const response = await api.get(`/name`);
  const { result } = response.data;
  return result;
};
