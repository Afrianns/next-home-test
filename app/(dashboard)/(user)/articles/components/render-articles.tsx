"use server";

import truncate, { type IOptions } from "truncate-html";
import { GetAllArticles } from "@/actions/articles";
import ImageRender from "@/components/image-render";

import { ArticleType } from "@/components/table/article-page/article-type";
import { Badge } from "@/components/ui/badge";
import { convertDate } from "@/utils/convertDate";
import { sanitizeHTML } from "@/utils/sanitizeHTML";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AllArticles(pageSelected: {
  page: number | undefined;
  search: string | undefined;
  category: string | undefined;
}) {
  const { data, total, page, limit } = await GetAllArticles(pageSelected);

  const totalPage = Math.ceil(total / limit);

  if (pageSelected.page != undefined && pageSelected.page > totalPage) {
    return redirect(`?page=${totalPage}`);
  }
  
  return (
    <>
      <div className="grid grid-cols-3 gap-2 w-full max-w-[1000px] mx-auto space-y-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-[500px]">
        {data.map((data: ArticleType, key: string) => {
          return (
            <section className="p-3 space-y-3 w-full max-w-[500px]" key={key}>
              <ImageRender img={data.imageUrl} />
              <span className="text-xs leading-none font-medium text-gray-600 block">
                {convertDate(data.createdAt)}
              </span>
              <Link
                href={"/articles/" + data.id}
                className="text-md font-semibold hover:underline"
              >
                {data.title}
              </Link>
              <div
                className="text-gray-600 text-sm mt-2"
                dangerouslySetInnerHTML={{
                  __html: truncate(sanitizeHTML(data.content), {
                    byWords: true,
                    length: 12,
                  }),
                }}
              ></div>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                {data.category.name}
              </Badge>
            </section>
          );
        })}
      </div>
      <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={page < totalPage ? `?page=${page - 1}` : ""}
              className={
                page <= 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          {(() => {
            const visiblePages: (number | "...")[] = [];
            const start = Math.max(1, page - 1);
            const end = Math.min(totalPage, page + 1);

            // Add ellipsis before
            if (start > 2) {
              visiblePages.push("...");
            }

            // Add consecutive pages
            for (let i = start; i <= end; i++) {
              visiblePages.push(i);
            }

            // Add ellipsis after
            if (end < totalPage - 1) {
              visiblePages.push("...");
            }

            return visiblePages.map((p, i) =>
              p === "..." ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink href={`?page=${p}`} isActive={p === page}>
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            );
          })()}
          <PaginationItem>
            <PaginationNext
              href={page < totalPage ? `?page=${page + 1}` : ""}
              className={
                page >= totalPage ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
