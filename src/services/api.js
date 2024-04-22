import axios from "axios";

const baseUrl = "https://db-projectfor.onrender.com/api";

export const instance = axios.create({
  baseURL: baseUrl,
});
