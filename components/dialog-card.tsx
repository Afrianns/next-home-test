import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ReactNode } from "react";

export default function DialogCard({
  name,
  button,
}: {
  button: ReactNode;
  name: string;
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name} Category</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Input id="name-1" name="name" placeholder="type the category..." />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
