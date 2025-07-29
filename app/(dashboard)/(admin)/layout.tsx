import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import { getUser } from "@/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { username } = await getUser();
  const Logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    return redirect("/");
  };
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex min-h-screen w-full overflow-x-hidden">
          <main className="bg-gray-300 w-full min-h-screen">
            <div className="bg-white">
              <div className="flex items-center justify-between max-w-[1200px] w-full px-4 py-5 mx-auto max-md:px-4">
                <div className="flex items-center gap-x-3">
                  <SidebarTrigger />
                  <h1 className="text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div className="flex items-center gap-x-3">
                  <Avatar>
                    <AvatarFallback>{username.split("")[0]}</AvatarFallback>
                  </Avatar>
                  <DropdownMenu>
                    <DropdownMenuTrigger>{username}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href={"/user"}>Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={Logout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <Separator />
            <div className="px-4 m-5 max-w-[1200px] w-full mx-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
