import { instance } from "./api";


// export const getProducts = async () => {
//   const { data } = await instance.get("/products");
//   return data;
// };

export const getProducts = async ({page, pageSize, sort, search}) => {
  const { data } = await instance.get(`/products?page=${page}&pageSize=${pageSize}&sort=${sort}&search=${search}`)
  // ("/products", params: {page, pageSize, sort, search});
  console.log(data);
  return data;
};

export const addProduct = async (product) => {
  const { data } = await instance.post("/products", product);
  return data;
};

export const deleteProduct = async (idProduct) => {
  // console.log('idProduct: ', idProduct);
  const { data } = await instance.delete(`/products/${idProduct}`);
  return data;
};

export const updateProduct = async ({ productData, id }) => {
  const productId = id;
  const { data } = await instance.patch(
    `/products/${productId}`,
    productData
  );
  // console.log(data);
  return data;
};

//   export const getProductCategories = async () => {
//     const { data } = await instance.get('/api/product-categories');
//     return data;
//   };
