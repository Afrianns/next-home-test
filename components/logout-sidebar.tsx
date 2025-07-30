"use client";

import { handleLogout } from "@/utils/logout";

export default function Logout() {
  return <h3 className="text-lg" onClick={handleLogout}>Logout</h3>;
}
