import PropTypes from "prop-types";
import { PersonAdd } from "@mui/icons-material";
import { GoPeople } from "react-icons/go";
import { LiaCoinsSolid } from "react-icons/lia";
import StatCard from "../../shared/components/StatCard/StatCard";
import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
// import { selectProducts } from "../../redux/selectors";
// import { useSelector } from "react-redux";
// import {
//   //   selectTotalCustomers,
//   selectTotalProducts,
// } from "../../redux/selectors";

const StatCardList = ({ totalProducts, totalCustomers }) => {
  //   const isNonDesktop = useMediaQuery("(min-width: 1440px)");
  //   const isNonDesktop = useMediaQuery("(max-width: 1440px)");
  //   const totalProducts = useSelector(selectTotalProducts);

  //   const totalCustomers = useSelector(selectTotalCustomers);
  //   const totalSuppliers = useSelector();

  //   const dispatch = useDispatch();

  return (
    <Box
      // mt="20px"
      // display="grid"
      // gridTemplateColumns="repeat(10, 1fr)"
      // gridAutoRows="100px"
      // gap="20px"
      // sx={{
      //   "& > div": {
      //     gridColumn: isNonMediumScreens ? undefined : "span 12",
      //   },
      // }}

      sx={{
        display: "flex",
        flexWrap: "wrap",
        // flexDirection: isNonDesktop ? "column" : "row",
        gap: "16px",
        margin: "0 2.5rem 1.5rem",
      }}
      display="flex"
    >
      <StatCard
        title="All Products"
        // value={data && data.totalProducts}
        value={totalProducts}
        icon={
          <LiaCoinsSolid size={26} />
          //   <Email
          //     sx={{ color: , fontSize: "26px" }}
          //   />
        }
      />
      <StatCard
        title="All Customers"
        // value={data && data.totalCustomers}
        value={totalCustomers}
        icon={
          <GoPeople size={26} />

          //   <PointOfSale
          //     sx={{ color: , fontSize: "26px" }}
          //   />
        }
      />

      <StatCard
        title="All Suppliers"
        // value={data && data.totalSuppliers}
        value={0}
        icon={
          <PersonAdd
          // sx={{ color:, fontSize: "26px" }}
          />
        }
      />
    </Box>
  );
};

StatCardList.propTypes = {
  totalProducts: PropTypes.any,
  totalCustomers: PropTypes.any,
};

export default StatCardList;
