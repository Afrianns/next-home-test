// import Image from "next/image";
// import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Register</CardTitle>
        <CardDescription className="text-center">
          Create your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <RegisterForm></RegisterForm>
      </CardContent>
    </Card>
  );
}
