import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxStyled } from "./RecentCustomersListStyled";

const RecentCustomersList = ({ isLoading, recentCustomers }) => {
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
          sx={{
            fontFamily: "inherit",
          }}
        >
          Recent customers
        </Typography>
      </BoxStyled>

      <Box m="0 2.5rem 1.5rem">
        <Box
          height="100%"
          sx={{
            "& .MuiDataGrid-root": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderTop: "none",
              borderBottom: "1px solid #B0B4B4",
            },
            "& .MuiDataGrid-columnHeader": {
              "&:not(:last-child)": {
                borderRight: "1px solid #B0B4B4",
              },
            },
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              color: "#797a7a",
              fontFamily: "inherit",
              fontWeight: "600",
            },
            "& .MuiDataGrid-cell": {
              "&:not(:last-child)": {
                borderRight: "1px solid #B0B4B4",
              },
            },

            "& .MuiDataGrid-footerContainer": {
              display: "none",
            },
            "& .MuiDataGrid-row--lastVisible": {
              borderBottom: "none",
            },
          }}
        >
          <DataGrid
            loading={isLoading || !recentCustomers}
            getRowId={(row) => row._id}
            rows={recentCustomers}
            columns={columns}
            pageSizeOptions={[5]}
            sx={{
              borderTop: "none",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              borderColor: "#23fcee",
              color: "",
              fontFamily: "inherit",
              fontSize: "14px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

RecentCustomersList.propTypes = {
  isLoading: PropTypes.bool,
  recentCustomers: PropTypes.array,
};

export default RecentCustomersList;
