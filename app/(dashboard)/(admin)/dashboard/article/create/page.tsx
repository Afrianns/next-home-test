"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import UploadIMG from "@/components/upload-file";
import CreateArticleForm from "./components/createArticleForm";
import { Label } from "@/components/ui/label";
import { Suspense, useState } from "react";

export default function CreateArticle() {
  const [files, setFiles] = useState<File[] | undefined>();
  console.log(files);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Card className="w-full max-w-[1080px] mx-auto my-5 bg-gray-50">
        <CardHeader>New Article</CardHeader>
        <CardContent className="space-y-3">
          <Label>Thumbnail</Label>
          <UploadIMG files={files} setFiles={setFiles} />
          <CreateArticleForm />
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </Suspense>
  );
}
