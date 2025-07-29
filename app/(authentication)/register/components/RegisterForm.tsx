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

import { Check, ChevronsUpDown, Loader } from "lucide-react";
import { useState } from "react";
import { usernameValidation } from "@/validation/usernameValidation";
import { passwordValidation } from "@/validation/passwordValidation";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Register } from "@/actions/auth";

enum rolesEnum {
  ADM = "Admin",
  USR = "User",
}

const FormSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
  role: z.enum(rolesEnum, {
    error: "Please select a role.",
  }),
});

const roles = [
  { label: "Admin", value: rolesEnum.ADM },
  { label: "User", value: rolesEnum.USR },
] as const;

export default function RegisterForm() {
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
    const { username, password, role } = data;

    const result = await Register({ username, password, role });
    if (result == 200) {
      toast("Successfully Register!");
    }
    setLoading(false);
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
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? roles.find((level) => level.value === field.value)
                            ?.label
                        : "Select role"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {roles.map((role) => (
                          <CommandItem
                            value={role.label}
                            key={role.value}
                            onSelect={() => {
                              form.setValue("role", role.value);
                            }}
                          >
                            {role.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                role.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-5 text-center">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-800"
            disabled={loading}
          >
            {loading && <Loader className="mr-2 animate-spin size-4" />}
            {loading ? "Loading..." : "Register"}
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
