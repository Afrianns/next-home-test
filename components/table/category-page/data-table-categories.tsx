"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import Link from "next/link";

import PaginationMenu from "../../pagination";
import { CategoryType } from "./category-type";
import { convertDate } from "@/utils/convertDate";
import ArticleSearchable from "@/components/articles-searchable";
import DialogCard from "@/components/dialog-card";
import { Button } from "@/components/ui/button";

interface allCategoriesType {
  data: CategoryType[];
  totalData: number;
  currentPage: number;
  totalPages: number;
}

export function DataTable({ categories }: { categories: allCategoriesType }) {
  // console.log(articles);
  // const pageSelected = {
  //   page: 1,
  //   search: "",
  //   category: "",
  // };
  const pageSelected = {
    page: 1,
    search: "",
  };
  console.log(categories);
  return (
    <div>
      <p className="p-4 px-5">Total Category: {categories.totalData}</p>
      <div className="overflow-hidden border">
        <div className="flex items-center justify-between mx-10 my-3">
          <div className="flex items-center gap-x-4 py-4">
            {" "}
            <ArticleSearchable
              withCategory={false}
              title="search by category..."
            />
          </div>
          <DialogCard
            name="Add"
            button={
              <Button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                Add Category
              </Button>
            }
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="px-10">
              <TableHead className="px-10">Category</TableHead>
              <TableHead className="px-10">Created at</TableHead>
              <TableHead className="px-10">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.data.map((category) => {
              return (
                <TableRow
                  key={category.id}
                  // data-state={row.getIsSelected() && "selected"}
                >
                  <TableCell className="px-10">
                    <p className="text-wrap w-fit">{category.name}</p>
                  </TableCell>
                  <TableCell className="px-10">
                    {convertDate(category.createdAt)}
                  </TableCell>
                  <TableCell className="px-10">
                    <div className="flex items-center gap-2">
                      <DialogCard
                        name="Edit"
                        button={
                          <Link href="#" className="text-blue-500 underline">
                            Edit
                          </Link>
                        }
                      />
                      <Dialog>
                        <DialogTrigger className="text-red-500 underline">
                          Delete
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button className="bg-blue-500 hover:bg-blue-600">
                              Confirm
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5">
        <PaginationMenu
          total={categories.totalData}
          page={categories.currentPage}
          limit={10}
          pageSelected={pageSelected}
        />
      </div>
    </div>
  );
}
