// import Image from "next/image";
// import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/LoginForm";

export default function InputForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Use your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <LoginForm></LoginForm>
      </CardContent>
    </Card>
  );
}
