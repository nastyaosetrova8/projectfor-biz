import PropTypes from "prop-types";
import { Box } from "@mui/material";
// import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";


const CustomersList = ({customers, isLoading}) => {
  // const theme = useTheme();
  // const { data } = useSelector(selectCustomers);
  // console.log(customers);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "spent",
      headerName: "Spent",
      flex: 1,
    },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    //   },
    // },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    // {
    //   field: "occupation",
    //   headerName: "Occupation",
    //   flex: 1,
    // },
    // {
    //   field: "role",
    //   headerName: "Role",
    //   flex: 0.5,
    // },
  ];


  return (
    <Box m="1.5rem 2.5rem">
      {/* <Header title="CUSTOMERS" subtitle="List of Customers" /> */}
      <Box
        mt="40px"
        height="75vh"
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
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {

          },
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
        />
      </Box>
    </Box>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.any,
  isLoading: PropTypes.any,
};


export default CustomersList;


// ================================================================


// import PropTypes from "prop-types";
// import { Sheet, Table } from "@mui/joy";
// // import { useSelector } from "react-redux";
// // import { selectCustomers } from "../../redux/selectors";
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// // import { useEffect } from "react";
// // import { getCustomersThunk } from "../../redux/Thunks/CustomersThunk";
// // import { useLoaderData } from "react-router-dom";

// const columnHelper = createColumnHelper();
// const columns = [
//   columnHelper.accessor("name", {
//     id: "name",
//     header: "Name",
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor("email", { id: "email", header: "Email" }),
//   columnHelper.accessor("spent", { id: "spent", header: "Spent" }),
//   columnHelper.accessor("country", { id: "country", header: "Country" }),
// ];

// const CustomersList = ({customers}) => {
//   // const dispatch = useDispatch();
//   // const isAuth = useSelector(selectIsAuth);
//   // const customers = useSelector(selectCustomers);
//   // console.log(customers)
//   // const data = useLoaderData();

//   // useEffect(() => {
//   //   if (!isAuth) return;
//   //   dispatch(getCustomersThunk())
//   //   // dispatch(getTransCategoriesThunk(token));
//   // }, [dispatch, 
//   //   // token, 
//   //   isAuth
//   // ]);

//   const table = useReactTable({
//     customers,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });


//   return (
//     <Sheet sx={{ borderRadius: 8 }}>
//       <Table aria-label="basic table" borderAxis="bothBetween">
//         <thead>
//           {/* <tr>
//           <th style={{ width: '30%' }}>Name</th>
//           <th>Email</th>
//           <th>Spent</th>
//           <th>Country</th>
//         </tr> */}
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                   {/* {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )} */}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {/* {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))} */}

//           {/* <tr>
//             <td>Frozen yoghurt</td>
//             <td>159</td>
//             <td>6</td>
//             <td>24</td>
//           </tr>
//           <tr>
//             <td>Ice cream sandwich</td>
//             <td>237</td>
//             <td>9</td>
//             <td>37</td>
//           </tr>
//           <tr>
//             <td>Eclair</td>
//             <td>262</td>
//             <td>16</td>
//             <td>24</td>
//           </tr>
//           <tr>
//             <td>Cupcake</td>
//             <td>305</td>
//             <td>3.7</td>
//             <td>67</td>
//           </tr>
//           <tr>
//             <td>Gingerbread</td>
//             <td>356</td>
//             <td>16</td>
//             <td>49</td>
//           </tr> */}
//         </tbody>
//       </Table>
//     </Sheet>
//   );
// };

// export default CustomersList;

// CustomersList.propTypes = {
//   customers: PropTypes.any,
// };


// ============================================

// const CustomersList = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default CustomersList

// import * as React from "react"
// import {
//   CaretSortIcon,
//   ChevronDownIcon,
//   DotsHorizontalIcon,
// } from "@radix-ui/react-icons"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { useDispatch, useSelector } from "react-redux"
// import { selectCustomers } from "redux/selectors"

// export const columns = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Email
//           <CaretSortIcon className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))

//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)

//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <DotsHorizontalIcon className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function CustomersList() {
//   const [sorting, setSorting] = React.useState([])
//   const [columnFilters, setColumnFilters] = React.useState([])
//   const [columnVisibility, setColumnVisibility] = React.useState({})
//   const [rowSelection, setRowSelection] = React.useState({})

//   const dispatch = useDispatch();
//   const customers = useSelector(selectCustomers);

//   const table = useReactTable({
//     customers,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter emails..."
//           value={(table.getColumn("email")?.getFilterValue()) ?? ""}
//           onChange={(event) =>
//             table.getColumn("email")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) =>
//                       column.toggleVisibility(!!value)
//                     }
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 )
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         {/* <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div> */}
//       </div>
//     </div>
//   )
// }
