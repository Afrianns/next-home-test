import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-3 max-md:px-5 max-w-[950px] w-full mx-auto">
      <div className="flex justify-center gap-x-2 mt-10">
        <Skeleton className="h-[30px] max-w-[100px] w-full rounded" />
        <Skeleton className="h-[30px] max-w-[150px] w-full rounded" />
      </div>
      <Skeleton className="h-[50px] w-full rounded" />
      <Skeleton className="h-[500px] w-full rounded" />

      <div className="space-y-3">
        <Skeleton className="h-[20px] w-full rounded" />
        <Skeleton className="h-[20px] w-full rounded" />
        <Skeleton className="h-[20px] w-full rounded" />
        <Skeleton className="h-[20px] w-full max-w-[200px] rounded" />
      </div>
    </div>
  );
}
