import Image from "next/image";
import AllArticles from "./components/render-articles";
import ArticleSearchable from "@/components/articles-searchable";
import Nav from "@/components/nav";
import { Suspense } from "react";
import ArticlesSkeleton from "./articles-skeleton";
import { useCategoryStore } from "@/store/categoriesStore";

export default async function UserPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; cId?: string; search?: string }>;
}) {
  let { page, cId, search } = await searchParams;

  return (
    <div>
      <Nav className="md:absolute z-10 w-full md:text-white" />
      <div className="w-full h-[450px] relative">
        <Image
          src="/young-male-designer.jpg"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
        <div className="bg-blue-600 w-full h-full absolute opacity-80"></div>
        <div className="absolute space-y-5 w-full h-full text-center flex flex-col justify-center items-center max-sm:px-2">
          <h1 className="text-4xl font-bold w-full max-w-[600px] text-white">
            The Journal: Design Resources, Interviews, and Industry News
          </h1>
          <p className="text-white">Your daily dose of design insight</p>
          <ArticleSearchable
            className="bg-blue-400 p-2 rounded-lg w-full max-w-[500px] shadow-lg"
            title="Search by title..."
          />
        </div>
      </div>
      <Suspense fallback={<ArticlesSkeleton />}>
        <AllArticles page={page} category={cId} search={search} />
      </Suspense>
    </div>
  );
}
