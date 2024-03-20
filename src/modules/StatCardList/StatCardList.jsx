import { PersonAdd } from "@mui/icons-material";
import { GoPeople } from "react-icons/go";
import { LiaCoinsSolid } from "react-icons/lia";
import StatCard from "../../shared/components/Buttons/StatCard/StatCard";

const StatCardList = () => {
  return (
    <>
      <StatCard
        title="All Products"
        // value={data && data.totalProducts}
        icon={
          <GoPeople size={26} />
          //   <Email
          //     sx={{ color: , fontSize: "26px" }}
          //   />
        }
      />
      <StatCard
        title="All Customers"
        // value={data && data.totalCustomers}
        icon={
          <LiaCoinsSolid size={26} />
          //   <PointOfSale
          //     sx={{ color: , fontSize: "26px" }}
          //   />
        }
      />

      <StatCard
        title="All Suppliers"
        // value={data && data.totalSuppliers}
        icon={
          <PersonAdd
          // sx={{ color:, fontSize: "26px" }}
          />
        }
      />
    </>
  );
};

export default StatCardList;
