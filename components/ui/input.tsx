import { cn } from "@/lib/utils";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";

function Input({
  className,
  type,
  eye,
  setEye,
  ...props
}: React.ComponentProps<"input"> & {
  eye?: boolean;
  setEye?: (a: boolean) => void;
}) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />

      {setEye && (
        <div
          className="absolute right-2 p-1 top-0.5 text-gray-500"
          onClick={() => setEye(!eye)}
        >
          {eye ? <Eye></Eye> : <EyeClosed></EyeClosed>}
        </div>
      )}
    </div>
  );
}

export { Input };
