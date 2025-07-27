import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-gray-300 w-full min-h-screen">
        <div className="bg-white">
          <div className="flex items-center justify-between w-full px-4 py-5 max-w-[1080px] mx-auto">
            <div className="flex items-center gap-x-3">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-x-3">
              <Avatar>
                <AvatarImage src="/young-male-designer.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>Name</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="px-4">
        {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
