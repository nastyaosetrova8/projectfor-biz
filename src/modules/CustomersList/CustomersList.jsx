import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BoxStyled } from "../RecentCustomersList/RecentCustomersListStyled";

const CustomersList = ({ customers, isLoading }) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.6,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Avatar src={params.row.image} alt="Avatar" />
          <p>{params.row.name}</p>
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.6,
    },
    {
      field: "spent",
      headerName: "Spent",
      flex: 0.6,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
  ];

  return (
    <Box mt="8.5rem">
      <BoxStyled>
        <Typography
          variant="h4"
          fontWeight="600"
          sx={{
            fontFamily: "inherit",
          }}
        >
          All customers
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
            "& .MuiDataGrid-footerContainer": {},
          }}
        >
          <DataGrid
            loading={isLoading || !customers}
            getRowId={(row) => row._id}
            rows={customers}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
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
    </Box>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CustomersList;
