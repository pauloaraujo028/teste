"use client";

import Title from "@/app/_components/Title";
import { useGetProductsQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Filter, PencilIcon, PlusCircleIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Loader from "../_components/loader";
import { Card, CardHeader } from "../_components/ui/card";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", flex: 0.5 },
  { field: "name", headerName: "Product Name", flex: 2 },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    flex: 1,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    flex: 1,
    type: "number",
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => (
      <Link href={`/products/edit/${params.row.productId}`}>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          <PencilIcon size={16} />
        </button>
      </Link>
    ),
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(searchTerm);

  if (isLoading) {
    return (
      <div className="flex items-start pt-[15%] h-screen py-4">
        <Loader />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="mx-auto pb-5 w-full h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Title name="Products" />
          <span>Manage your products</span>
        </div>

        <Link href="/products/create-products">
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded">
            <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" />
            Adicionar novo produto
          </button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between flex-row">
          <div className="flex items-center border-2 border-gray-200 rounded-lg">
            <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
            <input
              type="text"
              className="w-full py-2 px-4 rounded bg-white"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Filter size={20} />
          </div>
        </CardHeader>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
          sx={{
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            borderLeft: "none",
            borderRight: "none",
            borderRadius: "0",
          }}
          // onRowClick={(params) => handleRowClick(params.row)}
        />
      </Card>
    </div>
  );
};

export default Products;
