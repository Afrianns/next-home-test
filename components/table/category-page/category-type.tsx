"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface CategoryType {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "name",
    header: "Categories",
    cell: ({ row }) => {
      return <p>{row.original.name}</p>;
    },
  },
  {
    accessorKey: "created at",
    header: "Created At",
    cell: ({ row }) => {
      return <p>{new Date(row.original.createdAt).toLocaleString()}</p>;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const result = row.original;
      return (
        <div className="flex items-center gap-2">
          <Link href="#" className="text-blue-500 underline">
            Edit
          </Link>
          <Link href="#" className="text-red-500 underline">
            Delete
          </Link>
        </div>
      );
    },
  },
];
