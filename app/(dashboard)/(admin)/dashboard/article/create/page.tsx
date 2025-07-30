import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import ArticleForm from "@/components/article-input";
import FormArticleSkeleton from "@/components/skeleton/form-article-skeleton";
import { Label } from "@/components/ui/label";
import { Suspense } from "react";

export default function CreateArticle() {
  const article = {
    title: "",
    category: "",
    content: "",
    url: "",
  };
  return (
    <Suspense fallback={<FormArticleSkeleton />}>
      <Card className="w-full max-w-[1080px] mx-auto my-5 bg-gray-50 rounded-none">
        <CardHeader>New Article</CardHeader>
        <CardContent className="space-y-3">
          <Label>Thumbnail</Label>
          <ArticleForm
            title={article.title}
            category={article.category}
            content={article.content}
            url={article.url}
          />
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </Suspense>
  );
}
