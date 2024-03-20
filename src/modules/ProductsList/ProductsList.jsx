import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomToolbar from "../../shared/components/DataGridCustomToolbar/DataGridCustomToolbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsLoading,
  selectProducts,
  selectTotal,
} from "../../redux/selectors";
import { getProductsThunk } from "../../redux/Thunks/ProductsThunk";

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
  // console.log(products)
  const total = useSelector(selectTotal);

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

  const columns = [
    {
      field: "name",
      headerName: "Product info",
      flex: 0.8,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 0.5,
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
  ];

  return (
    <Box
      m="2.5rem 2.5rem"
      // style={{ height: 400, width: '100%' }}
    >
      {/* <Header title="PRODACTS" subtitle="Entire list of transactions" /> */}
      <Box
        height="60vh"
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
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // color: !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !products}
          getRowId={(row) => row._id}
          rows={products || []}
          columns={columns}
          rowCount={(products && total) || 0}
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
