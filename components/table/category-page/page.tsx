import { GetCategories } from "@/actions/articles";
import { ArticleType } from "@/components/table/article-page/article-type";
import { DataTable } from "@/components/table/category-page/data-table-categories";
import { CategoryType } from "./category-type";

interface pageSelectedType {
  page: number | undefined;
  search: string | undefined;
}

interface allCategoriesType {
  data: CategoryType[];
  totalData: number;
  currentPage: number;
  totalPages: number;
}

async function getData(pageSelected: pageSelectedType) {
  // Fetch data from your API here.
  const result: allCategoriesType = await GetCategories(pageSelected);

  return result;
  // return { data, total, page, limit };
}

export default async function TablePage(pageSelected: pageSelectedType) {
  const result = await getData(pageSelected);

  return (
    <div className="container mx-auto">
      <DataTable categories={result} />
    </div>
  );
}
