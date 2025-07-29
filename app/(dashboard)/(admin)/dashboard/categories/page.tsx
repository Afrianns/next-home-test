import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import TablePage from "@/components/table/category-page/page";

export default async function categoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; search?: string }>;
}) {
  const { page, search } = await searchParams;
  return (
    <div>
      <Card className="w-full max-w-[1080px] mx-auto my-5 p-0 rounded-none">
        <CardHeader></CardHeader>
        <CardContent className="px-0 py-0">
          <TablePage page={page} search={search} />
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
}
