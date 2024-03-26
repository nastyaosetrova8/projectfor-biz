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

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  // const { data, isLoading } = useGetTransactionsQuery({
  //   page,
  //   pageSize,
  //   sort: JSON.stringify(sort),
  //   search,
  // });

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
  }, [dispatch, isAuth, page, pageSize, search, sort]);

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
      // renderCell: (params) => params.value.length,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
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
            // type="button"
            // name="editProduct"
            // id={params.row._id}
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
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box
      m="2.5rem 2.5rem"
      // style={{ height: 400, width: '100%' }}
    >
      {/* <Header title="PRODACTS" subtitle="Entire list of transactions" /> */}
      <Box
        // height="60vh"
        height="100%"
        sx={{
          "& .MuiDataGrid-root": {
            // paddingLeft: "8px",
            // paddingRight: "8px",
            // border: "none",
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
            "&:not(:last-child)": {
              borderRight: "1px solid #B0B4B4",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: "#5BFF33",
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
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: ,
          },
          "& .MuiDataGrid-footerContainer": {
            // backgroundColor: ,
            // color: ,
            // borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // color: !important`,
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
            // height: "48px",
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
          // rowsPerPageOptions={[20, 50, 100]}
          pageSizeOptions={[5, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={(newpaginationModel) =>
            setPaginationModel(newpaginationModel)
          }
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          sx={{
            fontFamily: "inherit",
            fontSize: "16px",
          }}
        />
      </Box>
    </Box>
  );
};

ProductsList.propTypes = {
  products: PropTypes.any,
  isLoading: PropTypes.any,
  page: PropTypes.any,
  setPage: PropTypes.any,
  pageSize: PropTypes.any,
  setPageSize: PropTypes.any,
  sort: PropTypes.any,
  setSort: PropTypes.any,
  search: PropTypes.any,
  setSearch: PropTypes.any,
  searchInput: PropTypes.any,
  setSearchInput: PropTypes.any,
};

export default ProductsList;
