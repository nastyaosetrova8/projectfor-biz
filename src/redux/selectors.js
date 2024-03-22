export const selectIsLoading = (state) => state.root.isLoading;
export const selectError = (state) => state.root.error;

export const selectUser = (state) => state.user.user;
export const selectUserId = (state) => state.user.user.id;
export const selectIsAuth = (state) => Boolean(state.user.token);
export const selectUserAvatar = (state) => state.user.avatar;
export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectFormName = (state) => state.modal.formName;
export const selectShowFormRegister = (state) => state.user.showFormRegister;

export const selectCustomers = (state) => state.customers.customers;
export const selectRecentCustomers = (state) => state.customers.recentCustomers;
export const selectTotalCustomers = (state) => state.customers.total;

export const selectProducts = (state) => state.products.products;
export const selectTotalProducts = (state) => state.products.total;
