import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Slices/rootSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { customersReducer } from "./Slices/customersSlice";
import { userReducer } from "./Slices/userSlice";
import { productsReducer } from "./Slices/productsSlice";
import { modalReducer } from "./Slices/modalSlice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    root: rootReducer,
    modal: modalReducer,
    customers: customersReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
