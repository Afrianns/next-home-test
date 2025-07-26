
import { compactDecrypt, importPKCS8 } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const privateKeyPEM = process.env.PRIVATE_KEY;

export async function middleware(request: NextRequest) {
  const cookie = (await cookies()).get("session")?.value;

  if (cookie) {
    if (!privateKeyPEM) {
      throw new Error("There are no RSA Key");
    }

    const privateKey = await importPKCS8(privateKeyPEM, "RSA-OAEP-256");
    const { plaintext, protectedHeader } = await compactDecrypt(
      cookie.split("|")[1],
      privateKey
    );
    console.log(new TextDecoder().decode(plaintext));
  }
}
