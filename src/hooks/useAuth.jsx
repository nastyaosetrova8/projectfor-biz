import { useSelector } from "react-redux";
import {
  selectError,
  selectIsAuth,
  selectIsLoading,
  selectIsRefreshing,
  selectUser,
} from "../redux/selectors";

const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isAuth: useSelector(selectIsAuth),
    isRefreshing: useSelector(selectIsRefreshing),
    error: useSelector(selectError),
    isLoading: useSelector(selectIsLoading),
  };
};

export default useAuth;
