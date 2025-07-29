import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

export default function Confirmation({ button }: { button: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-red-500 underline cursor-pointer">Delete</p>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Are you sure want to delete this?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>{button}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
