import { GetAllArticles } from "@/actions/articles";
import { DataTable } from "@/components/table/article-page/data-table-articles";
import { allArticleType, pageSelectedType } from "./article-type";

async function getData(pageSelected: pageSelectedType) {

  const result: allArticleType = await GetAllArticles(pageSelected);

  return result;
}

export default async function TablePage(pageSelected: {
  page: number | undefined;
  category: string | undefined;
  search: string | undefined;
}) {
  const result = await getData(pageSelected);
  return (
    <div className="container mx-auto">
      <DataTable articles={result} />
    </div>
  );
}
