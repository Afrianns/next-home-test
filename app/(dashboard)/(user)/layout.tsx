import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function mainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <section className="flex justify-between items-center w-full max-w-[1080px] mx-auto my-3 max-md:px-5">
        <p>LOGO</p>
        <div className="flex items-center gap-x-3">
          <Avatar>
            <AvatarImage src="/young-male-designe.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Name</p>
        </div>
      </section>
      <Separator className="my-4" />
      <main className="max-w-[920px] w-full mx-auto">{children}</main>
    </div>
  );
}
