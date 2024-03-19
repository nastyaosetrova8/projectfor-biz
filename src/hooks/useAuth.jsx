import { useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsRefreshing,
  selectUser,
} from "../redux/selectors";


const useAuth = () => {

  return {
    user: useSelector(selectUser),
    isAuth: useSelector(selectIsAuth),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};

export default useAuth;
