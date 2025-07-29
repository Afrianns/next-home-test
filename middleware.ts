import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session")?.value;

  const publicPaths = ["/login", "/register"];

  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (cookie) {
    try {
      const response = await getUser();
      console.log(response);
      if (!response && !response.role) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      if (response.role === "Admin") {
        if (!request.nextUrl.pathname.startsWith("/dashboard")) {
          return NextResponse.redirect(new URL("/dashboard", request.url));
        }
      } else if (response.role === "User") {
        if (!request.nextUrl.pathname.startsWith("/articles")) {
          return NextResponse.redirect(new URL("/articles", request.url));
        }
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/dashboard/:path*", "/articles/:path*", "/login", "/register"],
};
