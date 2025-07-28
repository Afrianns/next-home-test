import axios from "axios";
import { compactDecrypt, importPKCS8 } from "jose";
import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

const privateKeyPEM = process.env.PRIVATE_KEY;

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session")?.value;

  const publicPaths = ["/login", "/register"];

  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (cookie) {
    try {
      const response = await getCurrentUser(cookie);
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

const getCurrentUser = async (cookie: string) => {
  const result = await axios.get(
    "https://test-fe.mysellerpintar.com/api/auth/profile",
    {
      headers: {
        Authorization: `Bearer ${cookie.split("|")[0]}`,
      },
    }
  );

  return result.data;
};
//   id: '401441db-2213-4238-9afc-6e8e3354adcb',
//   username: 'jackson',
//   role: 'User',
//   createdAt: '2025-07-26T07:18:54.627Z',
//   updatedAt: '2025-07-26T07:18:54.627Z'
// }
// const decryptwithPrivateKey = async (cookie: string, privateKeyPEM: string) => {
//   const privateKey = await importPKCS8(privateKeyPEM, "RSA-OAEP-256");
//   const { plaintext, protectedHeader } = await compactDecrypt(
//     cookie.split("|")[1],
//     privateKey
//   );
//   // console.log(new TextDecoder().decode(plaintext));
//   return JSON.parse(new TextDecoder().decode(plaintext));
// };
export const config = {
  matcher: ["/dashboard/:path*", "/articles/:path*", "/login", "/register"],
};
