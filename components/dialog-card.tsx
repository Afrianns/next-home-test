import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { createCategory, editCategory } from "@/actions/categories";
import { toast } from "sonner";

const categorySchema = z.object({
  name: z.string().min(1, { message: "Category name is required" }),
});
type CategoryForm = z.infer<typeof categorySchema>;

export default function DialogCard({
  name,
  value = "",
  button,
  id,
}: {
  button: ReactNode;
  name: string;
  value?: string;
  id?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryForm>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: value },
  });

  const onSubmit = async (data: CategoryForm) => {
    console.log("Submitted Category:", data);

    if (name == "Edit") {
      console.log(name);
      const result = await editCategory(id as string, data.name);
      if (result == 200) {
        return toast("Category updated");
      }
    } else {
      const result = await createCategory(data.name);
      if (result == 200) {
        return toast("Category created");
      }
    }
    toast("failed, please try again!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{name} Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <div className="space-y-1">
            <Input
              id="name"
              placeholder="Type the category..."
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Confirm
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
