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
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import Link from "next/link";

import { useState } from "react";
import { usernameValidation } from "@/validation/usernameValidation";
import { passwordValidation } from "@/validation/passwordValidation";
import { Login } from "@/actions/auth";

const FormSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
});

export default function LoginForm() {
  const [eye, setEye] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const { username, password } = data;

    const result = Login({ username, password });
    console.log(result);
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
          <Button className="w-full bg-blue-500 hover:bg-blue-800">
            Login
          </Button>
          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
