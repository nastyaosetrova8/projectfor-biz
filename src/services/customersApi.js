import { instance } from "./api";

export const getCustomers = async () => {
  const { data } = await instance.get("/customers");
  return data;
};

export const addCustomer = async (customer) => {
  const { data } = await instance.post("/customers", customer);
  return data;
};

export const deleteCustomer = async (idCustomer) => {
  const { data } = await instance.delete(`/customers/${idCustomer}`);
  return data;
};

export const updateCustomer = async ({ customerData, id }) => {
  const customerId = id;
  const { data } = await instance.patch(
    `/customers/${customerId}`,
    customerData
  );
  return data;
};
