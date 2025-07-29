import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";

export default function FormArticleSkeleton() {
  return (
    <Card className="w-full max-w-[1080px] mx-auto my-5 bg-gray-50">
      <CardHeader>
        <Skeleton className="h-6 w-40" />
      </CardHeader>

      <CardContent className="space-y-3">
        <Label>Thumbnail</Label>

        <Skeleton className="w-full h-[150px] rounded-md" />

        <div className="space-y-4">
          <div>
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div>
            <Skeleton className="h-4 w-1/4 mb-2" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div>
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-32 w-full rounded-md" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Skeleton className="h-10 w-1/3 rounded-md" />
      </CardFooter>
    </Card>
  );
}
