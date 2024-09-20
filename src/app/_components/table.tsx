"use client";

import { Eye, Filter, SearchIcon, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TableTeste = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between">
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
          <Filter />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:table-cell">
                Total Sales
              </TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                Laser Lemonade Machine
              </TableCell>
              <TableCell>
                <Badge variant="outline">Draft</Badge>
              </TableCell>
              <TableCell>$499.99</TableCell>
              <TableCell className="hidden md:table-cell">25</TableCell>
              <TableCell className="hidden md:table-cell">
                2023-07-12 10:42 AM
              </TableCell>
              <TableCell className="">
                <Button variant="ghost" size="icon">
                  <Eye size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <SquarePen className="text-blue-500" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="text-red-500" size={20} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};

export default TableTeste;
