import { useState, useEffect } from "react";
import { GetAllCategories } from "@/actions/articles";

export default function allCategories() {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data, totalPages, currentPage } = await GetAllCategories();

        setCategories((prev) => [...prev, ...data]);

        setHasMore(currentPage < totalPages);
      } catch (err) {
        console.error("Error loading categories:", err);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page]);

  const loadNextPage = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    categories,
    hasMore,
    loading,
    loadNextPage,
  };
}
