import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Suspense } from "react";
import ArticleForm from "@/components/article-input";
import FormArticleSkeleton from "@/components/skeleton/form-article-skeleton";
import { GetSingleArticle } from "@/actions/articles";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id, title, categoryId, content, imageUrl } = await GetSingleArticle(
    data.id
  );
  return (
    <Suspense fallback={<FormArticleSkeleton />}>
      <Card className="w-full max-w-[1080px] mx-auto my-5 bg-gray-50">
        <CardHeader>Edit Articles</CardHeader>
        <CardContent className="space-y-3">
          <Label>Thumbnail</Label>
          <ArticleForm
            title={title}
            category={categoryId}
            content={content}
            url={imageUrl}
            id={id}
          />
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </Suspense>
  );
}
