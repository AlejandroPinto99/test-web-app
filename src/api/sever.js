import axios from "axios";
import { API_URL } from "./config";

console.log(">> ", API_URL);
const server = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

server.interceptors.response.use((res) => {
  console.log("FETCH RES >> ", res);
  return res;
});

export default server;