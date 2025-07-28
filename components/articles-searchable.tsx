"use client";
import { useEffect, useState } from "react";
import Combobox from "./combobox";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function ArticleSearchable({
  withCategory = true,
  className,
  title,
}: {
  withCategory?: boolean;
  className?: string;
  title: string;
}) {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");
  console.log(search, category);
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      const query = new URLSearchParams(window.location.search);

      search ? query.set("search", search) : query.delete("search");
      category ? query.set("cId", category) : query.delete("category");

      router.push(`?${query.toString()}`);
    }, 900);

    return () => clearTimeout(handler);
  }, [category, search, router]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  };
  return (
    <div className={"flex items-center gap-x-3 max-md:flex-col max-md:gap-y-2 " + className}>
      {withCategory && (
        <Combobox category={category} setCategory={setCategory} />
      )}
      <Input
        type="text"
        className="bg-white"
        value={search}
        placeholder={title}
        onChange={handleInput}
      />
    </div>
  );
}
