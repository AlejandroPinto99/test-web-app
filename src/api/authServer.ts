import axios from "axios";
import * as AxiosLogger from "axios-logger";
import { API_URL } from "./config";
​
export const authServer = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
​
authServer.interceptors.request.use(async (req) => {
  return AxiosLogger.requestLogger(req);
});
​
authServer.interceptors.response.use((res) => {
  return AxiosLogger.responseLogger(res);
});