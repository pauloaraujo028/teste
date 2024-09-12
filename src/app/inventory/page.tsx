"use client";

import Title from "@/app/_components/Title";
import { useEditProductMutation, useGetProductsQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Actionsbar from "../_components/Actionsbar";
import EditProductModal from "../products/EditProductModal";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductFormData | null>(null);

  const [editProduct] = useEditProductMutation();

  const handleEditProduct = async (productData: ProductFormData) => {
    await editProduct(productData);
    setIsModalOpen(false);
  };

  const handleRowClick = (rowData: ProductFormData) => {
    setSelectedProduct(rowData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Title name="Inventory" />

      <Actionsbar />

      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        onRowClick={(params) => handleRowClick(params.row)}
      />

      {selectedProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleEditProduct}
          initialData={selectedProduct}
        />
      )}
    </div>
  );
};

export default Inventory;
