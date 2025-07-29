import { getUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function UserPage() {
  const data = await getUser();
  console.log(data);
  return (
    <Card className="w-full max-w-[1080px] mx-auto my-5 p-0">
      <CardHeader></CardHeader>
      <CardContent className="px-0 py-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-[500px] bg-gray-200">
            Name: {data.username}
          </div>
          <div className="w-full max-w-[500px] bg-gray-200">
            Name: {data.role}
          </div>

          <Button className="bg-blue-500">Confirm</Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
