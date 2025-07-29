import { Suspense, useEffect, useRef, useState } from "react";
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
          console.log(currentPage, totalPages);
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
  const [open, setOpen] = useState(false);
  return (
    <>
      {loading || (categories.length <= 0) ? (
        <Skeleton className="w-full h-10 rounded-b-sm"></Skeleton>
      ) : (
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
                        setCategory(
                          currentValue === category ? "" : currentValue
                        );
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
      )}
    </>
  );
}
