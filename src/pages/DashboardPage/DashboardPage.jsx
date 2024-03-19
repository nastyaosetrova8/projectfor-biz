import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCustomers, selectIsAuth, selectIsLoading } from "../../redux/selectors";
import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";
import CustomersList from "../../modules/CustomersList/CustomersList";


function DashboardPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const customers = useSelector(selectCustomers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getCustomersThunk());
    // dispatch(getTransCategoriesThunk(token));
  }, [
    dispatch,
    // token,
    isAuth,
  ]);


  return (
    isAuth && (
    <>
      {/* <SideBar /> */}
      
      {/* <WrapperCustomersStyled> */}


        
        {/* {customers?.length > 0 &&  */}
        <CustomersList customers={customers} isLoading={isLoading} />
         {/* } */}

        {/* <ButtonAddTransactions /> */}


      {/* </WrapperCustomersStyled> */}
    </>
  )
  );
}
export default DashboardPage;
