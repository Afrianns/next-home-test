import Image from "next/image";
import Nav from "@/components/nav";

import { GetSingleArticle } from "@/actions/articles";

import { Separator } from "@/components/ui/separator";

import { convertDate } from "@/utils/convertDate";
import { sanitizeHTML } from "@/utils/sanitizeHTML";
import { Suspense } from "react";
import DetailArticleSkeleton from "@/components/skeleton/detail-article-skeleton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Nav />
      <Separator />
      <Suspense fallback={<DetailArticleSkeleton />}>
        <Articles id={id} />
      </Suspense>
    </>
  );
}

async function Articles({ id }: { id: string }) {
  const result = await GetSingleArticle(id);
  return (
    <div className="space-y-3 mb-10 max-md:px-5 max-w-[950px] w-full mx-auto">
      <div className="my-10 space-y-3">
        <div className="flex items-center gap-x-2 justify-center text-gray-600 text-sm mt-5">
          <span>{convertDate(result.createdAt)}</span> .{" "}
          <span>created by {result.user.username}</span>
        </div>
        <h1 className="text-center font-bold text-2xl">{result.title}</h1>
      </div>
      <Image
        src="/young-male-designer.jpg"
        alt="Image"
        className="rounded-md object-cover w-full h-[400px]"
        width={500}
        height={400}
      />
      <div
        className="my-6"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(result.content) }}
      ></div>
    </div>
  );
}
