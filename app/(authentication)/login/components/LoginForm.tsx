"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Login } from "@/actions/auth";
import { createSession } from "@/lib/session";
import { passwordValidation } from "@/validation/passwordValidation";
import { usernameValidation } from "@/validation/usernameValidation";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

const FormSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
});

export default function LoginForm() {
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const { username, password } = data;

    const result = await Login({ username, password });

    if (result?.result) {
      createSession(result.result);
      toast("Successfully Login");
      return redirect("/articles");
    }
    setLoading(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="type your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="type your password"
                  {...field}
                  eye={eye}
                  setEye={setEye}
                  type={eye ? "text" : "password"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-5 text-center">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={loading}
          >
            {loading && <Loader className="mr-2 animate-spin size-4" />}
            {loading ? "Loading..." : "Login"}
          </Button>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
