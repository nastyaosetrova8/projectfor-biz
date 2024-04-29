import axios from "axios";

const baseUrl = "https://db-projectfor.onrender.com/api";
// const baseUrl = "http://localhost:3000/api";

export const instance = axios.create({
  baseURL: baseUrl,
});
