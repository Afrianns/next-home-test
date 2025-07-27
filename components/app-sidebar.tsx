import { Home, Inbox, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AppSidebar() {
  const items = [
    {
      title: "Articles",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: Inbox,
    },
    {
      title: "Logout",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <h1 className="text-lg font-semibold mt-4">Admin Dashboard</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="w-full h-10 p-2">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon size={64} />
                      <h3 className="text-lg">{item.title}</h3>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
