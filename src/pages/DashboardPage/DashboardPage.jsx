import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsLoading,
  selectRecentCustomers,
  selectTotalCustomers,
  selectTotalProducts,
} from "../../redux/selectors";
import RecentCustomersList from "../../modules/RecentCustomersList/RecentCustomersList";
import { Box } from "@mui/system";
import StatCardList from "../../modules/StatCardList/StatCardList";
import { useEffect, useState } from "react";
import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";
import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);

  const totalProducts = useSelector(selectTotalProducts);
  const totalCustomers = useSelector(selectTotalCustomers);
  const recentCustomers = useSelector(selectRecentCustomers);

  const [page] = useState(0);
  const [pageSize] = useState(0);
  const [sort] = useState({});
  const [search] = useState("");

  useEffect(() => {
    if (!isAuth) return;
    dispatch(
      getProductsThunk({
        page: page,
        pageSize: pageSize,
        sort: JSON.stringify(sort),
        search,
      })
    );
    dispatch(getCustomersThunk());
  }, [dispatch, isAuth, page, pageSize, search, sort]);

  return (
    isAuth && (
      <Box mt="8.5rem">
        <StatCardList
          totalProducts={totalProducts}
          totalCustomers={totalCustomers}
        />

        <RecentCustomersList
          isLoading={isLoading}
          recentCustomers={recentCustomers}
        />
      </Box>
    )
  );
};
export default DashboardPage;
