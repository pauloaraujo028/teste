// "use client";

// import Title from "@/app/_components/Title";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/app/_components/ui/accordion";
// import { Card, CardContent } from "@/app/_components/ui/card";
// import { useCreateProductMutation, useEditProductMutation } from "@/state/api";
// import { ArrowLeft, CircleAlert } from "lucide-react";
// import Link from "next/link";
// import { ChangeEvent, useState } from "react";
// import { v4 } from "uuid";
// import EditProductForm from "../_components/EditProductForm";

// type ProductFormData = {
//   productId: string;
//   name: string;
//   price: number;
//   stockQuantity: number;
//   rating: number;
// };

// const EditProducts = () => {
//   const [editProduct] = useEditProductMutation();

//   const [formData, setFormData] = useState<ProductFormData>({
//     productId: v4(),
//     name: "",
//     price: 0,
//     stockQuantity: 0,
//     rating: 0,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]:
//         name === "price" || name === "stockQuantity" || name === "rating"
//           ? parseFloat(value)
//           : value,
//     });
//   };

//   const handleCreateProduct = async () => {
//     try {
//       await createProduct(formData);
//       setFormData({
//         productId: v4(),
//         name: "",
//         price: 0,
//         stockQuantity: 0,
//         rating: 0,
//       });
//       console.log("Produto criado com sucesso:", formData);
//     } catch (error) {
//       console.error("Erro ao criar o produto:", error);
//     }
//   };

//   return (
//     <div className="mx-auto pb-5 w-full h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <Title name="Editar produto" />
//           <span>Editar produto</span>
//         </div>

//         <Link href="/products">
//           <button
//             className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
//             // onClick={() => setIsModalOpen(true)}
//           >
//             <ArrowLeft className="w-5 h-5 mr-2 !text-gray-200" />
//             Voltar ao produto
//           </button>
//         </Link>
//       </div>

//       <Card>
//         <CardContent>
//           <Accordion
//             type="multiple"
//             defaultValue={["item-1", "item-2", "item-3"]}
//             className="w-full"
//           >
//             <AccordionItem value="item-1">
//               <AccordionTrigger>
//                 <div className="flex items-center gap-2">
//                   <CircleAlert />
//                   Informações do produto
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <EditProductForm formData={formData} onChange={handleChange} />
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-2">
//               <AccordionTrigger>
//                 <CircleAlert />
//                 Is it styled?
//               </AccordionTrigger>
//               <AccordionContent>
//                 Yes. It comes with default styles that matches the other
//                 components&apos; aesthetic.
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-3">
//               <AccordionTrigger>
//                 <CircleAlert />
//                 Is it animated?
//               </AccordionTrigger>
//               <AccordionContent>
//                 Yes. animated by default, but you can disable it if you prefer.
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </CardContent>
//       </Card>

//       <button
//         type="submit"
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         onClick={handleCreateProduct}
//       >
//         Create
//       </button>
//       <button
//         type="button"
//         className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default EditProducts;
