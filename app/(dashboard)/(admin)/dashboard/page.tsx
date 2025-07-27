import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import TablePage from "@/components/table/page";

export default function AdminPage() {
  return (
    <Card className="w-full max-w-[1080px] mx-auto mt-5 p-0">
      <CardHeader></CardHeader>
      <CardContent className="px-0">
        <TablePage />
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
