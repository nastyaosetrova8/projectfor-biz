import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomToolbar from "../../shared/components/DataGridCustomToolbar/DataGridCustomToolbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsLoading,
  selectProducts,
  selectTotalProducts,
} from "../../redux/selectors";
import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";
import { saveId, toggleShowModal } from "../../redux/Slices/modalSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);

  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  useEffect(() => {
    if (!isAuth) return;
    dispatch(
      getProductsThunk({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
        sort: JSON.stringify(sort),
        search,
      })
    );
  }, [dispatch, isAuth, paginationModel, search, sort]);

  const handleEdit = (row) => {
    dispatch(saveId(row._id));
    dispatch(toggleShowModal("editProduct"));
  };

  const handleDelete = (row) => {
    dispatch(saveId(row._id));
    dispatch(toggleShowModal("delete"));
  };

  const columns = [
    {
      field: "name",
      headerName: "Product info",
      flex: 0.6,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 0.4,
    },
    {
      field: "suppliers",
      headerName: "Suppliers",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.row)}
          >
            Delete
          </Button>
        </div>
      ),
      flex: 0.6,
    },
  ];

  return (
    <Box m="2.5rem 2.5rem">
      <Box
        height="100%"
        sx={{
          "& .MuiDataGrid-cell": {
            "&:not(:last-child)": {
              borderRight: "1px solid #B0B4B4",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#41ddd3",
            borderBottom: "none",
            borderRadius: "0",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#768173",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "600",
          },

          "& .MuiDataGrid-columnHeader": {
            "&:not(:last-child)": {
              borderRight: "1px solid #B0B4B4",
            },
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#38BDB5",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "600",
          },
          "& .MuiTablePagination-selectLabel": {
            fontFamily: "Inter",
            fontSize: "14px",
          },
          "& .MuiSelect-select.MuiTablePagination-select.MuiSelect-standard.MuiInputBase-input":
            {
              fontFamily: "Inter",
              fontSize: "14px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            },
          "& .MuiSelect-nativeInput": {
            display: "flex",
            alignItems: "center",
          },
          "& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiTablePagination-selectIcon.MuiSelect-iconStandard":
            {
              height: "24px",
              width: "24px",
            },
          "& .MuiTablePagination-displayedRows": {
            fontFamily: "Inter",
            fontSize: "14px",
          },
        }}
      >
        <DataGrid
          loading={isLoading || !products}
          getRowId={(row) => row._id}
          rows={products || []}
          columns={columns}
          rowCount={(products && totalProducts) || 0}
          // onRowCountChange
          pageSizeOptions={[5, 100]}
          pagination
          paginationModel={paginationModel}
          paginationMode="server"
          // sortingMode="server"
          // -----------------------------------------------
          // onPaginationModelChange={(newpaginationModel) =>
          //   setPaginationModel(newpaginationModel)
          // }
          // onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          // ------------------------------------------------
          onPaginationModelChange={setPaginationModel}
          // onSortModelChange={(sort) => setSort(...sort)}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          sx={{
            fontFamily: "inherit",
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  setPage: PropTypes.func,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  sort: PropTypes.object,
  setSort: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
};

export default ProductsList;
