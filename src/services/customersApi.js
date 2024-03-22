import { instance } from "./api";

export const getCustomers = async () => {
  const { data } = await instance.get("/customers");
  // console.log(data)
  return data;
};

export const addCustomer = async (customer) => {
  const { data } = await instance.post("/customers", customer);
  return data;
};

export const deleteCustomer = async (idCustomer) => {
  // console.log('idCustomer: ', idCustomer);
  const { data } = await instance.delete(`/customers/${idCustomer}`);
  return data;
};

export const updateCustomer = async ({ customerData, id }) => {
  const customerId = id;
  const { data } = await instance.patch(
    `/customers/${customerId}`,
    customerData
  );
  // console.log(data);
  return data;
};

//   export const getCustomerCategories = async () => {
//     const { data } = await instance.get('/api/customer-categories');
//     return data;
//   };
