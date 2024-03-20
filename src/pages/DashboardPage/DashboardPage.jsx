import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/selectors";

// import RecentCustomersList from "../../modules/RecentCustomersList/RecentCustomersList";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import StatCardList from "../../modules/StatCardList/StatCardList";

const DashboardPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const isNonMediumScreens = useMediaQuery("(min-width: 1440px)");

  return (
    isAuth && (
      <>
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(10, 1fr)"
          gridAutoRows="160px"
          gap="20px"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          <StatCardList />

          {/* <RecentCustomersList /> */}
        </Box>
        {/* <RecentCustomersList /> */}
      </>
    )
  );
};
export default DashboardPage;
