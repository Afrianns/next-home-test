import { create } from "zustand";
import { GetAllCategories } from "@/actions/articles";

interface CategoryType {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryStore {
  categories: CategoryType[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  fetchCategories: () => Promise<void>;
  loadMoreCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [],
  currentPage: 1,
  totalPages: 1,
  loading: false,

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const { data, currentPage, totalPages } = await GetAllCategories();
      set({
        categories: data,
        currentPage: currentPage,
        totalPages: totalPages,
        loading: false,
      });
    } catch (err) {
      console.error("Failed to get categories", err);
      set({ loading: false });
    }
  },

  loadMoreCategories: async () => {
    const { currentPage, totalPages, categories } = get();
    if (currentPage >= totalPages) return;

    const nextPage = currentPage + 1;
    set({ loading: true });
    try {
      const { data, currentPage, totalPages } = await GetAllCategories();
      set({
        categories: [...categories, ...data],
        currentPage: currentPage,
        totalPages: totalPages,
        loading: false,
      });
    } catch (err) {
      console.error("Failed to load more categories", err);
      set({ loading: false });
    }
  },
}));
