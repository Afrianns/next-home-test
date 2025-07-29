export interface ArticleType {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    userId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: string;
    username: string;
  };
}

export interface pageSelectedType {
  page: number | undefined;
  search: string | undefined;
  category: string | undefined;
}

export interface allArticleType {
  data: ArticleType[];
  total: number;
  page: number;
  limit: number;
}
