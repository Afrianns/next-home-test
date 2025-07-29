import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { redirect } from "next/navigation";

interface pageSelectedType {
  page: number | undefined;
  search: string | undefined;
  category?: string | undefined;
}

export default function PaginationMenu({
  total,
  page,
  limit,
  pageSelected,
}: {
  total: number;
  page: number;
  limit: number;
  pageSelected: pageSelectedType;
}) {

  const totalPage = Math.ceil(total / limit);

  if (pageSelected.page != undefined && pageSelected.page > totalPage) {
    return redirect(`?page=${totalPage}`);
  }
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={page <= totalPage ? `?page=${page - 1}` : ""}
            className={page <= 1 ? "pointer-events-none opacity-50" : undefined}
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
  );
}
