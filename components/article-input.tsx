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
import { MinimalTiptapEditor } from "@/components/ui/minimal-tiptap/minimal-tiptap";
import Combobox from "./combobox";
import { useState } from "react";

import UploadIMG from "./upload-file";
import Link from "next/link";
import {
  CreateArticle,
  updateArticle,
  UploadImageArticle,
} from "@/actions/articles";
import { Loader } from "lucide-react";

const FormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  category: z.string(),
  content: z.string().min(100, {
    message: "Content cannot be short.",
  }),
});

export default function ArticleForm({
  title,
  content,
  category,
  url,
  id,
}: {
  title: string;
  category: string;
  content: string;
  url: string;
  id?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [files, setFiles] = useState<File[] | undefined>();
  const [filePreview, setFilePreview] = useState<string | undefined>(url);

  const [filled, setFilled] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      title: title,
      category: category,
      content: content,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    toast("Data submitted");

    if (files && files[0]) {
      const { imageUrl } = await UploadImageArticle(files[0]);
      if (imageUrl) {
        const result = await CreateArticle({
          ...JSON.parse(JSON.stringify(data)),
          imageUrl,
        });
        if (result) {
          return toast("Successfully Create Article");
        }
      }
    }
    if (id) {
      let imageURL = url;
      if (files && files[0]) {
        const { imageUrl } = await UploadImageArticle(files[0]);
        if (imageUrl) {
          imageURL = imageUrl;
        } else {
          return toast("There is an error updating article");
        }
      }

      const result = await updateArticle({
        ...JSON.parse(JSON.stringify(data)),
        imageURL,
        id,
      });
      if (result) {
        return toast("Successfully Update Article");
      }
    }
    setIsSubmitting(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <UploadIMG
          filePreview={filePreview}
          setFilePreview={setFilePreview}
          files={files}
          setFiles={setFiles}
          filled={filled}
        />
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
            <Combobox
              className="w-full"
              category={field.value}
              setCategory={field.onChange}
            />
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
            <Link href="/dashboard/article" className="w-fit">
              Cancel
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href="#" className="w-fit">
              Preview
            </Link>
          </Button>
          <Button
            type="submit"
            className="w-fit bg-blue-500 hover:bg-blue-800"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader className="mr-2 animate-spin size-4" />}
            {isSubmitting ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
