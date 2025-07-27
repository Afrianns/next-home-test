import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import TablePage from "@/components/table/category-page/page";

export default function categoriesPage() {
  return (
    <div>
      <Card className="w-full max-w-[1080px] mx-auto my-5 p-0">
        <CardHeader></CardHeader>
        <CardContent className="px-0">
          <TablePage />
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
}
