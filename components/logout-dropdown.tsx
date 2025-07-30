"use client";

import { DropdownMenuItem } from "./ui/dropdown-menu";

import { handleLogout } from "@/utils/logout";
export default function Logout() {
  return <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>;
}
