"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

import { DeleteArticle } from "@/actions/articles";
import Confirmation from "@/components/Confirmation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import ArticleSearchable from "../../articles-searchable";
import PaginationMenu from "../../pagination";
import { allArticleType } from "./article-type";

export function DataTable({ articles }: { articles: allArticleType }) {
  const pageSelected = {
    page: 1,
    search: "",
    category: "",
  };

  const handleDelete = async (id: string) => {
    const result = await DeleteArticle(id);
    if (result) {
      toast("Article successfully Delete");
    } else {
      toast("Failed article Delete");
    }
  };

  return (
    <div>
      <p className="p-4 px-5">Total Articles: {articles.total}</p>
      <div className="overflow-hidden border">
        <div className="flex items-center justify-between mx-10">
          <div className="flex items-center gap-x-4 py-4">
            <ArticleSearchable title="search by title..." />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Link href="/dashboard/article/create" className="text-white">
              + New Article
            </Link>
          </Button>
        </div>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="px-10">
              <TableHead className="px-10">Thumbnail</TableHead>
              <TableHead className="px-10">Title</TableHead>
              <TableHead className="px-10">Category</TableHead>
              <TableHead className="px-10">Created At</TableHead>
              <TableHead className="px-10">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.data.map((article) => {
              return (
                <TableRow key={article.id}>
                  <TableCell className="px-10">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      width={50}
                      height={50}
                      className="w-15 h-15"
                    ></Image>
                  </TableCell>
                  <TableCell className="px-10">{article.title}</TableCell>
                  <TableCell className="px-10">
                    <p className="text-wrap w-fit">{article.category.name}</p>
                  </TableCell>
                  <TableCell className="px-10">
                    {new Date(article.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="px-10">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/preview/${article.id}`}
                        className="text-blue-500 underline"
                      >
                        Preview
                      </Link>
                      <Link
                        href={`/dashboard/article/edit/${article.id}`}
                        className="text-blue-500 underline"
                      >
                        Edit
                      </Link>

                      <Confirmation
                        button={
                          <Button
                            onClick={() => handleDelete(article.id)}
                            className="bg-blue-500 hover:bg-blue-600"
                          >
                            Confirm
                          </Button>
                        }
                      />
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
          total={articles.total}
          page={articles.page}
          limit={articles.limit}
          pageSelected={pageSelected}
        />
      </div>
    </div>
  );
}
