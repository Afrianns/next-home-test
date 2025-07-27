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

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

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

import { Content } from "@tiptap/react";
import { MinimalTiptapEditor } from "@/components/ui/minimal-tiptap/minimal-tiptap";

const categories = [
  { label: "Icon 1", value: "gasc" },
  { label: "Icon 2", value: "gxcc" },
  { label: "Icon 3", value: "gecx" },
  { label: "Icon 4", value: "gekc" },
] as const;

const FormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  category: z.string(),
  content: z.string().min(100, {
    message: "Content cannot be short.",
  }),
});

export default function CreateArticleForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      category: "",
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="type article title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
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
                        ? categories.find(
                            (category) => category.value === field.value
                          )?.label
                        : "Select Category"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {categories.map((category) => (
                          <CommandItem
                            value={category.label}
                            key={category.value}
                            onSelect={() => {
                              form.setValue("category", category.value);
                            }}
                          >
                            {category.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                category.value === field.value
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
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <MinimalTiptapEditor
                value={field.value}
                onChange={field.onChange}
                className="w-full"
                editorContentClassName="p-5 bg-white"
                output="html"
                placeholder="Enter your description..."
                autofocus={true}
                editable={true}
                editorClassName="focus:outline-hidden"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-5 text-center flex justify-end gap-x-2">
          <Button className="w-fit" variant="outline">
            Cancel
          </Button>
          <Button className="w-fit" variant="secondary">
            Preview
          </Button>
          <Button className="w-fit bg-blue-500 hover:bg-blue-800">
            Upload
          </Button>
        </div>
      </form>
    </Form>
  );
}
