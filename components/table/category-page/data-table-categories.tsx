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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";

import { deleteCategory } from "@/actions/categories";
import ArticleSearchable from "@/components/articles-searchable";
import DialogCard from "@/components/dialog-card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import PaginationMenu from "../../pagination";
import { allCategoriesType } from "./category-type";

export function DataTable({ categories }: { categories: allCategoriesType }) {
  const pageSelected = {
    page: 1,
    search: "",
  };

  const handleDelete = async (id: string) => {
    if (id) {
      const res = await deleteCategory(id);
      if (res == 200) {
        toast("successfully deleted");
      } else {
        toast("failed to delete");
      }
    }
  };

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
                    {new Date(category.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="px-10">
                    <div className="flex items-center gap-2">
                      <DialogCard
                        name="Edit"
                        id={category.id}
                        value={category.name}
                        button={
                          <Link href="#" className="text-blue-500 underline">
                            Edit
                          </Link>
                        }
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <p className="text-red-500 underline cursor-pointer">
                            Delete
                          </p>
                        </DialogTrigger>
                        <DialogContent aria-describedby={undefined}>
                          <DialogHeader>
                            <DialogTitle>
                              Are you sure want to delete this?
                            </DialogTitle>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button
                                onClick={() => handleDelete(category.id)}
                                className="bg-blue-500 hover:bg-blue-600"
                              >
                                Confirm
                              </Button>
                            </DialogClose>
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
