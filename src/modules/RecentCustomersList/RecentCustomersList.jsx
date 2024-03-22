import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxStyled } from "./RecentCustomersListStyled";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   // selectCustomers,
//   selectIsAuth,
//   selectIsLoading,
//   selectRecentCustomers,
// } from "../../redux/selectors";
// import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";

const RecentCustomersList = ({ isLoading, recentCustomers }) => {
  // const theme = useTheme();
  // const { data } = useSelector(selectCustomers);
  // console.log(customers);
  // const customers = useSelector(selectCustomers);
  // -------------------------------------------------------
  // const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  // const isLoading = useSelector(selectIsLoading);
  // const recentCustomers = useSelector(selectRecentCustomers);
  // console.log(recentCustomers);

  // useEffect(() => {
  //   if (!isAuth) return;
  //   dispatch(getCustomersThunk());
  // }, [
  //   dispatch,
  //   // token,
  //   isAuth,
  // ]);

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
    <>
      <BoxStyled>
        <Typography
          variant="h4"
          fontWeight="600"
          sx={
            {
              //   color:
            }
          }
        >
          Recent customers
        </Typography>
      </BoxStyled>

      <Box m="0  2.5rem 1.5rem">
        {/* <Header title="CUSTOMERS" subtitle="List of Customers" /> */}
        <Box
          // mt="40px"
          // height="75vh"
          height="100%"
          // width="50vw"
          // maxWidth="100%"

          sx={{
            "& .MuiDataGrid-root": {
              paddingLeft: "8px",
              paddingRight: "8px",
              // borderTop: "none",
            },
            // "& .MuiDataGrid-row": {
            //   border: "1px solid #B0B4B4",
            // },
            // "& .MuiDataGrid-cell": {
            // "&:not(:last-child)": {
            //   borderRight: "1px solid #B0B4B4",
            // borderColor: "#B0B4B4",
            // },
            // },

            // "& .MuiDataGrid-cell-textLeft": {
            // "& .MuiDataGrid-withBorderColor": {
            // "& .MuiDataGrid-cell": {
            //   "&:not(:last-child)": {
            //     borderRight: "1px solid #B0B4B4",
            //   },
            //   // "&:last-child": {
            //   //   border: "1px solid transparent",
            //   // },
            // },

            "& .MuiDataGrid-withBorderColor": {
              // "&:not(:last-child)": {
              // borderColor: "#B0B4B4",
              // },
            },

            "& .MuiDataGrid-columnHeader": {
              "&:not(:last-child)": {
                borderRight: "1px solid #B0B4B4",
              },
            },
            // "& .MuiDataGrid-column": {
            // "&:not(:last-child)": {
            // borderRight: "1px solid #B0B4B4",
            // },
            // },
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
            // "& . MuiDataGrid-columnHeaderTitleContainer": {
            //   "& :not(:last-of-type)": {
            //     borderRight: "1px solid #5BFF33",
            //   },
            // },
            "& .MuiDataGrid-columnHeaders": {
              // backgroundColor: "#5BFF33",
              // color: "#768173",
              // fontWeight: "600",
              borderTop: "none",
              borderBottom: "1px solid #B0B4B4",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#768173",
              fontWeight: "600",
            },
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {},
            "& .MuiDataGrid-virtualScroller": {},
            "& .MuiDataGrid-footerContainer": {
              // backgroundColor: ,
              // color: ,
              // borderBottom: "none",
              display: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              // color: !important`,
            },
            "& .MuiDataGrid-row--lastVisible": {
              borderBottom: "none",
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
            sx={{
              borderTop: "none",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              borderColor: "#23fcee",
              color: "",
              fontSize: "16px",
              // mt: "0",
              // "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
              //   borderRight: "1px solod black",
              // },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

RecentCustomersList.propTypes = {
  isLoading: PropTypes.any,
  recentCustomers: PropTypes.any,
};

export default RecentCustomersList;
