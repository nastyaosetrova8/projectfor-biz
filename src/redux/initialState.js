export const initialRootState = {
  isLoading: false,
  error: null,
};

// export const initialState = {
//     user: {
//       username: null,
//       email: null,
//       id: null,
//       balance: null,
//     },
//     token: null,
//     isAuth: false,
//   };

export const initialUserState = {
  user: { name: null, email: null, _id: null },
  token: null,
  isRefreshing: false,
  avatar: null,
};

export const initialListsState = {
  customers: [],
  recentCustomers: [],
  total: 0,
  // categories: [],
};

export const initialProductsState = {
  products: [],
  total: 0,
  // categories: [],
};

// export const initialSummaryState = {
//   categoriesSummary: [
//     {
//       name: '',
//       type: '',
//       total: 0,
//     },
//   ],
//   incomeSummary: 0,
//   expenseSummary: 0,
//   periodTotal: 0,
//   year: 0,
//   month: 0,
// };
