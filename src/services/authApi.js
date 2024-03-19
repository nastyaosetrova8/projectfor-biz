import { instance } from "./api";

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export async function registerUser(userData) {
  const { data } = await instance.post("/auth/register", userData);
  setToken(data.token);
  return data;
}

export async function loginUser(userData) {
  const { data } = await instance.post("/auth/login", userData);
  setToken(data.token);
  return data;
}

export async function currentUser() {
  const { data } = await instance.get("/auth/current");
  return data;
}

export async function logOutUser() {
  const { data } = await instance.post("/auth/logout");
  clearToken();
  return data;
}

export async function updateUser(userData) {
    const { data } = await instance.patch("/users/update-user", userData);
    return data;
}

// export async function getUserStats() {
//   const { data } = await instance.get("/auth/stats");
//   return data;
// }