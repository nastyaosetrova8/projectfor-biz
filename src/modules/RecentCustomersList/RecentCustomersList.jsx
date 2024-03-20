// import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsLoading,
  selectRecentCustomers,
} from "../../redux/selectors";
import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";

const RecentCustomersList = () => {
  // const theme = useTheme();
  // const { data } = useSelector(selectCustomers);
  // console.log(customers);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const customers = useSelector(selectCustomers);
  const isLoading = useSelector(selectIsLoading);
  const recentCustomers = useSelector(selectRecentCustomers);
  // console.log(recentCustomers);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(getCustomersThunk());
  }, [
    dispatch,
    // token,
    isAuth,
  ]);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.8,
    },
    {
      field: "spent",
      headerName: "Spent",
      flex: 0.5,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      {/* <Header title="CUSTOMERS" subtitle="List of Customers" /> */}
      <Box
        mt="40px"
        // height="75vh"
        height="100%"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "none",
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#5BFF33",
            color: "#768173",
            borderBottom: "none",
          },
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {},
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: ,
          },
          "& .MuiDataGrid-footerContainer": {
            // backgroundColor: ,
            // color: ,
            // borderTop: "none",
            display: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // color: !important`,
          },
          // "& .MuiTablePagination-displayedRows": {
          //   display: "none",
          // },
        }}
      >
        <DataGrid
          loading={isLoading || !recentCustomers}
          getRowId={(row) => row._id}
          rows={recentCustomers}
          columns={columns}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       pageSize: 5,
          //     },
          //   },
          // }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Box>
  );
};

RecentCustomersList.propTypes = {};

export default RecentCustomersList;
