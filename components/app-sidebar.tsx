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
import { Home, LogOut, Tag } from "lucide-react";
import Link from "next/link";
import Logout from "./logout-sidebar";

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
      icon: Tag,
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
              <SidebarMenuItem key="Logout" className="w-full h-10 p-2">
                <SidebarMenuButton asChild>
                  <div className="cursor-pointer">
                    <LogOut size={64} />
                    <Logout />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
