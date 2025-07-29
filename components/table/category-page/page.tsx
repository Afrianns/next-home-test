import { GetCategories } from "@/actions/articles";
import { DataTable } from "@/components/table/category-page/data-table-categories";
import { allCategoriesType, pageSelectedType } from "./category-type";

async function getData(pageSelected: pageSelectedType) {
  const result: allCategoriesType = await GetCategories(pageSelected);
  return result;
}

export default async function TablePage(pageSelected: pageSelectedType) {
  const result = await getData(pageSelected);

  return (
    <div className="container mx-auto">
      <DataTable categories={result} />
    </div>
  );
}
