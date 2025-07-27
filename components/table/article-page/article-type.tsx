"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ArticleType {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    userId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: string;
    username: string;
  };
}

export const columns: ColumnDef<ArticleType>[] = [
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.imageUrl}
          alt="title"
          width={50}
          height={50}
          className="w-24 h-24"
        ></Image>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <p className="w-[200px] text-wrap">{row.original.title}</p>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return <p className="text-wrap">{row.original.category.name}</p>;
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
      const payment = row.original;

      return (
        <div className="flex items-center gap-2">
          <Link href="#" className="text-blue-500 underline">
            Preview
          </Link>
          <Link
            href={`/dashboard/article/${row.original.id}`}
            className="text-blue-500 underline"
          >
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
