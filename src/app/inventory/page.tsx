"use client";

import Title from "@/app/_components/Title";
import { useGetProductsQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Actionsbar from "../_components/Actionsbar";
import Loader from "../_components/loader";
import TableTeste from "../_components/table";
import { Card, CardHeader } from "../_components/ui/card";

// type ProductFormData = {
//   name: string;
//   price: number;
//   stockQuantity: number;
//   rating: number;
// };

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
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] =
  //   useState<ProductFormData | null>(null);

  // const [editProduct] = useEditProductMutation();

  // const handleEditProduct = async (productData: ProductFormData) => {
  //   await editProduct(productData);
  //   setIsModalOpen(false);
  // };

  // const handleRowClick = (rowData: ProductFormData) => {
  //   setSelectedProduct(rowData);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

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
    <div className="flex flex-col">
      <Title name="Inventory" />

      <Actionsbar />

      <Card className="">
        <CardHeader>teste</CardHeader>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
          // onRowClick={(params) => handleRowClick(params.row)}
        />
      </Card>

      <TableTeste />

      {/* {selectedProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onUpdate={handleEditProduct}
          initialData={selectedProduct}
        />
      )} */}
    </div>
  );
};

export default Inventory;
