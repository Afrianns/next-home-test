import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[1000px] mx-auto space-y-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-[500px]">
      {Array.from({ length: 6 }).map((_, index) => (
        <section className="p-3 space-y-3 w-full max-w-[500px]" key={index}>
          <Skeleton className="h-[200px] w-full rounded-md" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </section>
      ))}
    </div>
  );
}
