import PropTypes from "prop-types";
import { PersonAdd } from "@mui/icons-material";
import { GoPeople } from "react-icons/go";
import { LiaCoinsSolid } from "react-icons/lia";
import StatCard from "../../shared/components/StatCard/StatCard";
import { Box } from "@mui/material";

const StatCardList = ({ totalProducts, totalCustomers }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        margin: "0 2.5rem 1.5rem",
      }}
      display="flex"
    >
      <StatCard
        title="All Products"
        value={totalProducts}
        icon={<LiaCoinsSolid size={26} />}
      />
      <StatCard
        title="All Customers"
        value={totalCustomers}
        icon={<GoPeople size={26} />}
      />
      <StatCard title="All Suppliers" value={0} icon={<PersonAdd />} />
    </Box>
  );
};

StatCardList.propTypes = {
  totalProducts: PropTypes.number,
  totalCustomers: PropTypes.number,
};

export default StatCardList;
