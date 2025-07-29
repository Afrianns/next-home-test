export interface CategoryType {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface allCategoriesType {
  data: CategoryType[];
  totalData: number;
  currentPage: number;
  totalPages: number;
}
export interface pageSelectedType {
  page: number | undefined;
  search: string | undefined;
}