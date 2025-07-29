"use server";
import { cookies } from "next/headers";

export async function createSession(data: { token: string; role: string }) {
  const cookieStore = await cookies();

  cookieStore.set("session", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}
