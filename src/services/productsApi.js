import { instance } from "./api";

export const getProducts = async ({ page, pageSize, sort, search }) => {
  const { data } = await instance.get(
    `/products?page=${page}&pageSize=${pageSize}&sort=${sort}&search=${search}`
  );
  // ("/products", params: {page, pageSize, sort, search});
  return data;
};

export const addProduct = async (product) => {
  const { data } = await instance.post("/products", product);
  return data;
};

export const updateProduct = async ({ productData, _id }) => {
  const { data } = await instance.patch(`/products/${_id}`, productData);
  return data;
};

export const deleteProduct = async (idProduct) => {
  const { data } = await instance.delete(`/products/${idProduct}`);
  return data;
};
