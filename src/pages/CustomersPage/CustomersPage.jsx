import { useDispatch, useSelector } from "react-redux";
import {
  selectCustomers,
  selectIsAuth,
  selectIsLoading,
} from "../../redux/selectors";
import CustomersList from "../../modules/CustomersList/CustomersList";
import { useEffect } from "react";
import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";

const CustomersPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const customers = useSelector(selectCustomers);
  // console.log(customers)
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getCustomersThunk());
  }, [
    dispatch,
    // token,
    isAuth,
  ]);

  return (
    isAuth && (
      <>
        <CustomersList customers={customers} isLoading={isLoading} />
      </>
    )
  );
};

export default CustomersPage;
