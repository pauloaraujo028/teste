"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductFormProps = {
  formData: ProductFormData;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const formSchema = z.object({
  name: z.string().min(1, { message: "O nome do produto é obrigatório." }),
  price: z
    .number()
    .positive({ message: "O preço deve ser um número positivo." }),
  stockQuantity: z
    .number()
    .min(0, { message: "A quantidade deve ser maior ou igual a 0." }),
  rating: z
    .number()
    .min(0)
    .max(5, { message: "A avaliação deve estar entre 0 e 5." }),
});

const CreateProductForm = ({ formData, onChange }: CreateProductFormProps) => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      stockQuantity: 0,
      rating: 0,
    },
  });

  return (
    <Form {...form}>
      <form className="mt-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="productName">Nome do produto</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="shadcn"
                  {...field}
                  onChange={onChange}
                  value={formData.name}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="productPrice">Preço</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="shadcn"
                  {...field}
                  onChange={onChange}
                  value={formData.price}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stockQuantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="stockQuantity">Quantidade</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="shadcn"
                  {...field}
                  onChange={onChange}
                  value={formData.stockQuantity}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="rating">Rating</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="shadcn"
                  {...field}
                  onChange={onChange}
                  value={formData.rating}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default CreateProductForm;
