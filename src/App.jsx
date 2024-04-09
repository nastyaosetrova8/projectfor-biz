import { Suspense, lazy, useEffect } from "react";
// import Loader from "./shared/components/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "./redux/selectors";
import { currentUserThunk } from "./redux/Thunks/userThunk";
import PrivateRoute from "./Guard/PrivateRoute";
import Loader from "./shared/components/Loader/Loader";
// import Login from "./pages/AuthPage/Login";
// import Register from "./pages/LoginPage/Register";
import PublicRoute from "./Guard/PublicRoute";
import NotificationToast from "./shared/components/NotificationToastify/NotificationToast";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));

// const Login = lazy(() => import("./pages/AuthPage/Login"));
// const Register = lazy(() => import("./pages/AuthPage/Register"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage/CustomersPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
// const SuppliersPage = lazy(() => import("./pages/"));
// const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

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
                <AuthPage />
              </PublicRoute>
            }
          />

          {/* <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          /> */}

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
            {/* <Route
              path="/suppliers"
              element={
                <PrivateRoute>
                  <SuppliersPage />
                </PrivateRoute>
              }
            /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <NotificationToast />
    </>
  );
}

export default App;
