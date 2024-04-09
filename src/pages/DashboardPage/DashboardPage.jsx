import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsLoading,
  selectRecentCustomers,
  selectTotalCustomers,
  selectTotalProducts,
} from "../../redux/selectors";
import RecentCustomersList from "../../modules/RecentCustomersList/RecentCustomersList";
// import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import StatCardList from "../../modules/StatCardList/StatCardList";
import { useEffect, useState } from "react";
import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";
import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);

  // const isNonMediumScreens = useMediaQuery("(min-width: 1440px)");

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
      <>
        <Box
          mt="8.5rem"
          // mt="20px"
          // height="100vh"
          // display="grid"
          // gridTemplateColumns="repeat(10, 1fr)"
          // gridAutoRows="160px"
          // gap="20px"
          // sx={{
          //   "& > div": {
          //     gridColumn: isNonMediumScreens ? undefined : "span 12",
          //   },
          // }}
          // sx={{
          //   height: "100%",
          // }}
        >
          {/* <StatCard
            title="All Products"
            // value={data && data.totalProducts}
            // value={totalProducts}
          /> */}

          <StatCardList
            totalProducts={totalProducts}
            totalCustomers={totalCustomers}
          />

          <RecentCustomersList
            isLoading={isLoading}
            recentCustomers={recentCustomers}
          />
        </Box>
        {/* <RecentCustomersList /> */}
      </>
    )
  );
};
export default DashboardPage;
