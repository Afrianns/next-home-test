import { getUser } from "@/actions/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default async function UserPage() {
  const { username, role } = await getUser();
  return (
    <Card className="w-full min-h-[80vh] mx-auto my-5 p-0 m-5 rounded-e-none">
      <CardHeader></CardHeader>
      <CardContent className="px-0 py-0">
        <div className="flex justify-center flex-col items-center h-full space-y-3">
          <h1 className="font-bold">User Profile</h1>

          <Avatar className="w-[100px] h-[100px] my-5">
            <AvatarFallback className="text-3xl">
              {username.split("")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="w-full max-w-[500px] bg-gray-200 py-3 px-5">
            Name: {username}
          </div>
          <div className="w-full max-w-[500px] bg-gray-200 py-3 px-5">
            Name: {role}
          </div>

          <Button className="bg-blue-500 w-full max-w-[500px] hover:bg-blue-600">
            <Link href={"/dashboard"}>Back to Dashboard</Link>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
