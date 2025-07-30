"use client";

import { toast } from "sonner";
import axios from "axios";
import { redirect } from "next/navigation";

export const handleLogout = async () => {
  const result = await axios.post("/api/logout");
  if (result.status == 200) {
    toast("Successfully logout");
    return redirect("/");
  }
};
