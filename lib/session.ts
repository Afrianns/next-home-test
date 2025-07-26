"use server";
import { cookies } from "next/headers";
import { CompactEncrypt, importSPKI } from "jose";

const publicKeyPEM = process.env.PUBLIC_KEY;
if (!publicKeyPEM) {
  throw new Error("There are no RSA Key");
}

const publicKey = await importSPKI(publicKeyPEM, "RSA-OAEP-256");

export async function createSession(data: { token: string; role: string }) {
  let enRole = await new CompactEncrypt(
    new TextEncoder().encode(JSON.stringify({ role: data.role }))
  )
    .setProtectedHeader({ alg: "RSA-OAEP-256", enc: "A256GCM" })
    .encrypt(publicKey);

  const cookieStore = await cookies();

  console.log("sesion", enRole, data);
  cookieStore.set("session", `${data.token}|${enRole}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}
