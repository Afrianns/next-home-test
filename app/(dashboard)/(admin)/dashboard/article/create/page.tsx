import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import UploadIMG from "@/components/upload-file";
import CreateArticleForm from "./components/createArticleForm";
import { Label } from "@/components/ui/label";

export default async function EditArticle(params: { id: string }) {
  let { id } = await params;

  console.log(id);
  return (
    <Card className="w-full max-w-[1080px] mx-auto my-5 bg-gray-50">
      <CardHeader>New Article</CardHeader>
      <CardContent className="space-y-3">
        <Label>Thumbnail</Label>
        <UploadIMG />
        <CreateArticleForm />
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
