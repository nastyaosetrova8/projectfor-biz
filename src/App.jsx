import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "./redux/selectors";
import { currentUserThunk } from "./redux/Thunks/userThunk";
import PrivateRoute from "./Guard/PrivateRoute";
import Loader from "./shared/components/Loader/Loader";
import PublicRoute from "./Guard/PublicRoute";
import NotificationToast from "./shared/components/NotificationToastify/NotificationToast";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage/CustomersPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectIsAuth);

  useEffect(() => {
    if (!token) return;
    dispatch(currentUserThunk());
  }, [dispatch, token]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <MainPage />
              </PublicRoute>
            }
          >
            <Route path="auth/:type" element={<AuthPage />} />
          </Route>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/customers"
              element={
                <PrivateRoute>
                  <CustomersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <ProductsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <NotificationToast />
    </>
  );
}

export default App;
