export const initialRootState = {
  isLoading: false,
  error: null,
};

export const initialUserState = {
  user: { name: null, email: null, _id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  avatar: null,
};

export const initialListsState = {
  customers: [],
  recentCustomers: [],
  total: 0,
};

export const initialProductsState = {
  products: [],
  total: 0,
};

export const initialModalState = {
  isShowModal: false,
  modalName: "",
  savedId: null,
};
