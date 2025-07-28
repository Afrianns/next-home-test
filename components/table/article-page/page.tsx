import { GetAllArticles } from "@/actions/articles";
import { ArticleType } from "@/components/table/article-page/article-type";
import { DataTable } from "@/components/table/article-page/data-table-articles";

interface pageSelectedType {
  page: number | undefined;
  search: string | undefined;
  category: string | undefined;
}

interface allArticleType {
  data: ArticleType[];
  total: number;
  page: number;
  limit: number;
}

async function getData(pageSelected: pageSelectedType) {
  // Fetch data from your API here.

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
