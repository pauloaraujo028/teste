import { PencilIcon, PlusCircleIcon, Trash2 } from "lucide-react";

const Actionsbar = () => {
  return (
    <div className="w-full flex justify-end mt-4">
      <div className="flex gap-2">
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold p-2 rounded"
          // onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 !text-gray-200" />
        </button>
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold p-2 rounded"
          // onClick={() => setIsModalOpen(true)}
        >
          <PencilIcon className="w-5 h-5 !text-gray-200" />
        </button>
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold p-2 rounded"
          // onClick={() => setIsModalOpen(true)}
        >
          <Trash2 className="w-5 h-5 !text-gray-200" />
        </button>
      </div>
    </div>
  );
};

export default Actionsbar;
