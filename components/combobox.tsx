import { useEffect, useRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GetAllCategories } from "@/actions/articles";
import { Skeleton } from "./ui/skeleton";

interface CategoryType {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface categoryType {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function Combobox({
  category,
  setCategory,
  className = "w-fit",
}: {
  category: string;
  className?: string;
  setCategory: (a: string) => void;
}) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

  // Initial fetch
  useEffect(() => {
    const loadAllCategories = async () => {
      let currentPage = 1;
      let totalPages = 1;
      let allCategories: CategoryType[] = [];
      setLoading(true);
      try {
        while (currentPage <= totalPages) {
          const {
            data,
            currentPage: cp,
            totalPages: tp,
          } = await GetAllCategories(currentPage.toString());
          allCategories = [...allCategories, ...data];
          currentPage = cp + 1;
          totalPages = tp;
        }
        setCategories(allCategories);
        setPage(totalPages);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Failed to load categories", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllCategories();
  }, []);

  // Load function
  // const loadCategories = async (targetPage: number) => {
  //   if (loading || targetPage > totalPages) return;
  //   setLoading(true);
  //   try {
  //     const { data, currentPage, totalPages } = await GetAllCategories(
  //       targetPage as unknown as string
  //     );
  //     setCategories((prev) => [...prev, ...data]);
  //     setPage(currentPage);
  //     setTotalPages(totalPages);
  //   } catch (error) {
  //     console.error("Failed to load categories", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleScroll = () => {
  //   if (!listRef.current) return;
  //   const { scrollTop, scrollHeight, clientHeight } = listRef.current;
  //   if (scrollTop + clientHeight >= scrollHeight - 10) {
  //     loadCategories(page + 1);
  //   }
  // };

  // const getIDbyName = (name: string) => {
  //   return categories.find((cate) => cate.name === name)?.id as string;
  // };

  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={"max-md:w-full justify-between " + className}
        >
          {category
            ? categories.find((cate: categoryType) => cate.id === category)
                ?.name
            : "Select Category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-md:w-full w-fit p-0">
        <Command>
          <CommandInput placeholder="Search Category..." className="h-9" />
          <CommandList>
            {loading ? (
              <div className="space-y-3 m-3">
                <Skeleton className="h-5 w-full rounded" />
                <Skeleton className="h-5 w-full rounded" />
              </div>
            ) : (
              <CommandEmpty>No Category found.</CommandEmpty>
            )}
            <CommandGroup>
              {categories.map((cate: categoryType) => (
                <CommandItem
                  key={cate.id}
                  value={cate.id}
                  onSelect={(currentValue) => {
                    setCategory(currentValue === category ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {cate.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      category === cate.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
