import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import TablePage from "@/components/table/article-page/page";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; cId?: string; search?: string }>;
}) {
  const { page, cId, search } = await searchParams;
  return (
    <Card className="w-full max-w-[1080px] mx-auto my-5 p-0 rounded-none">
      <CardHeader></CardHeader>
      <CardContent className="px-0 py-0">
        <TablePage page={page} category={cId} search={search} />
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
