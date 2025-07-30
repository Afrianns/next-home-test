import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session")?.value;

  const publicPaths = ["/login", "/register"];

  if (cookie) {
    try {
      const response = await getUser();
      console.log(response);
      if (!response || !response.role) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      if (publicPaths) {
        if (
          response.role === "Admin" &&
          !request.nextUrl.pathname.startsWith("/dashboard")
        ) {
          return NextResponse.redirect(new URL("/dashboard", request.url));
        }
      }
      if (
        response.role === "User" &&
        !request.nextUrl.pathname.startsWith("/articles")
      ) {
        return NextResponse.redirect(new URL("/articles", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/articles/:path*", "/login", "/register"],
};
