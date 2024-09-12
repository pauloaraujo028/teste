"use client";

import Title from "@/app/_components/Title";
import { useGetUsersQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Actionsbar from "../_components/Actionsbar";

// type UserFormData = {
//   name: string;
//   email: string;
// };

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

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
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Title name="Users" />

      <Actionsbar />

      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        // onRowClick={(params) => handleRowClick(params.row)}
      />

      {/* {selectedProduct && (
        <EditProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          // onUpdate={handleEditProduct}
          initialData={selectedProduct}
        />
      )} */}
    </div>
  );
};

export default Users;
